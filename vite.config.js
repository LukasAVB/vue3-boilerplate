import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
// Icons
import Components from "unplugin-vue-components/vite"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"

import path from 'path' 

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		base: env.VITE_BASE_URL,
		plugins: [
			Vue(),
			Components({
				resolvers: [IconsResolver({ prefix: "" })]
			}),
			Icons({
				autoInstall: true
			})
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
	}
})
