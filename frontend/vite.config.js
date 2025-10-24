import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  // ver no log do terminal, não do navegador
  console.log('IP_PORTA_API:', env.IP_PORTA_API)
  
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.IP_PORTA_API || 'http://10.0.0.177:8080',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
