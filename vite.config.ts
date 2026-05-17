import { defineConfig } from 'vite' //「これはViteの設定ファイルですよ」って補助する関数
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@/', replacement: `${__dirname}/src/` }],
  },
  server: {
    proxy: {
      '/api/v1': {
        target: 'https://node-job-posting.vercel.app',
        changeOrigin: true,
        // CORSエラー防止
      },
    },
  },
})
