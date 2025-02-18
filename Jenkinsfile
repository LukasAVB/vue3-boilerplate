pipeline{
  agent { label 'atpoc-secureapi' } //atpoc-secureapi, atpoc-secureapicl, atpoc-dataengine
  tools { nodejs 'node:20' }
  environment {
    // static
    PACKAGE_MANAGER = 'npm' // npm
    BUILD_COMMAND = 'run build'  // npm run build
    JK_WORKSPACE = '/home/ubuntu/jenkins/workspace' //'Jenkins Workspace Directory'
    APACHE_DIR = '/var/www/' //'Apache Directory'
    SYNC_TO_SECUREAPI = false // true or false (if true change the agent name to atpoc-secureapicl)
    CODE_FOLDER = 'dist'
		// ENV
    // ## SITE CONFIG
    VITE_BASE_URL='/'

    // ## SEO
    VITE_SITE_TITLE='MVS Report Dashboard'

    // ## BRANDING
    VITE_LOGO_PRIMARY=''
    VITE_FAVICON=''

    // ## RESOURCES
    // #### Apis
    VITE_USER_SESSIONS_API_URL='https://1w4wqqe2f6.execute-api.us-east-1.amazonaws.com/reporting/userSessions'
  }
  stages{
    stage("build") {
      steps {
        timeout(time: 5, unit: 'MINUTES') {
          script {
            try {
              REPO_NAME = sh (script:'''printf ${GIT_URL} | sed 's|https://pik_git_service@bitbucket.org/atpoc/||; s/\\.git//' ''', returnStdout: true)
              slackSend color: "good", message: 'Building & compiling ' + REPO_NAME + ' dependecies on ' + BRANCH_NAME + ' branch 🧰. ' 
              if(PACKAGE_MANAGER == 'yarn'){
                sh 'yarn install'
                sh 'yarn ${BUILD_COMMAND}'
              }
              if(PACKAGE_MANAGER == 'npm'){
                npm command: 'install'
                npm command: '${BUILD_COMMAND}'
              }
              slackSend color: "good", message: "Success building the application."
            } catch (Exception e) {
              slackSend color: 'danger', message: "Failed to build code: ${e.getMessage()}"
              error "Failed to build code"
            }
          }
        } 
      }
    }
    stage("scan") {
      steps {
        timeout(time: 1, unit: 'MINUTES') {
          script{
            try {
              slackSend color: 'warning', message: 'Scanning code for any vulnerabilities...'
              snykSecurity organisation: 'pik', severity: 'high', snykInstallation: 'snyk-latest', snykTokenId: 'snyk'
              slackSend color: 'good', message: 'No high vulnerability found.'
            } catch (Exception e) {
              slackSend color: 'danger', message: "Failed to scan code for vulnerabilities: ${e.getMessage()}"
              error "Failed to scan code for vulnerabilities"
            }
          }
        }
      }
    }
    stage("deploy") {
      steps {
        timeout(time: 1, unit: 'MINUTES') {
          script {
            try {
              if (GIT_BRANCH == 'master') {
                echo "Deploying to master"
                REPO_NAME = sh (script:'''printf ${GIT_URL} | sed 's|https://pik_git_service@bitbucket.org/atpoc/||; s/\\.git//' ''', returnStdout: true)
                sh 'if [ ! -d ' + APACHE_DIR + '/' + '${GIT_BRANCH}' + '/' + REPO_NAME + '/ ]; then mkdir -p ' + APACHE_DIR + '/' + '${GIT_BRANCH}' + '/' + REPO_NAME +'/; fi'
                sh 'rsync -Pha --delete-during ${WORKSPACE}/${CODE_FOLDER}/* ' + APACHE_DIR +'/' + '${GIT_BRANCH}' + '/' + REPO_NAME
              } else if (GIT_BRANCH == 'alpha') {
                REPO_NAME = sh (script:'''printf ${GIT_URL} | sed 's|https://pik_git_service@bitbucket.org/atpoc/||; s/\\.git//' ''', returnStdout: true)
                echo "Deploying to sandbox"
                sh 'if [ ! -d ' + APACHE_DIR + '/' + '${GIT_BRANCH}' + '/' + REPO_NAME + '/ ]; then mkdir -p ' + APACHE_DIR + '/' + '${GIT_BRANCH}' + '/' + REPO_NAME +'/; fi'
                sh 'rsync -Pha --delete-during ${WORKSPACE}/${CODE_FOLDER}/* ' + APACHE_DIR +'/' + '${GIT_BRANCH}' + '/' + REPO_NAME 
              } else if (GIT_BRANCH == 'beta') {
                echo "Deploying to staging"
                // Add staging deployment steps here
                REPO_NAME = sh (script:'''printf ${GIT_URL} | sed 's|https://pik_git_service@bitbucket.org/atpoc/||; s/\\.git//' ''', returnStdout: true)
                sh 'if [ ! -d ' + APACHE_DIR + '/' + '${GIT_BRANCH}' + '/' + REPO_NAME + '/ ]; then mkdir -p ' + APACHE_DIR + '/' + '${GIT_BRANCH}' + '/' + REPO_NAME +'/; fi'
                sh 'rsync -Pha --delete-during ${WORKSPACE}/${CODE_FOLDER}/* ' + APACHE_DIR +'/' + '${GIT_BRANCH}' + '/' + REPO_NAME 
              } else {
                error "Unsupported branch name: GIT_BRANCH"
              }
              slackSend color: "good", message: "Success deploying application."
            } catch (Exception e) {
              slackSend color: 'danger', message: "Failed to to deplpy application: ${e.getMessage()}"
              error "Failed to deploy"
            }
          }
        }
      }
    }
		stage("sync code") {
			when {
				environment name: 'SYNC_TO_SECUREAPI', value: 'true'
			}
			steps {
				timeout(time: 1, unit: 'MINUTES') {
					script {
						try {
							REPO_NAME = sh(script:'''printf ${GIT_URL} | sed 's|https://pik_git_service@bitbucket.org/atpoc/||; s/\\.git//' ''', returnStdout: true)
							sh "bash /home/ubuntu/sync_code.sh ${GIT_BRANCH} ${REPO_NAME} ${CODE_FOLDER}"
							slackSend color: "good", message: "Success syncing application."
							} catch (Exception e) {
								slackSend color: 'danger', message: "Failed to rsync application: ${e.getMessage()}"
								error "Failed to rsync to server"
							}
						}
					}
				}
			}
		// stage("sync to S3") {
		// 	steps {
		// 		timeout(time: 1, unit: 'MINUTES') {
		// 			script {
		// 				try {
		// 					sh "bash /home/ubuntu/sync_s3.sh ${GIT_BRANCH} ${WORKSPACE}"
		// 					slackSend color: "good", message: "Success syncing application."
		// 				} catch (Exception e) {
		// 					slackSend color: 'danger', message: "Failed to rsync application: ${e.getMessage()}"
		// 					error "Failed to sync to s3"
		// 				}
		// 			}
		// 		}
		// 	}
		// }
	}
  post {
    success {
      slackSend color: 'good', message: '🎉 The pipeline completed successfully. '
    }
    failure {
      slackSend color: 'danger', message: '⚠️ The pipeline failed, at least one step failed'
    }
  }      
}

