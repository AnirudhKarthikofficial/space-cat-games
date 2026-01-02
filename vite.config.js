import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import os from 'node:os'
import { execSync } from 'node:child_process'

// Get Git commit hash and branch safely
function gitInfo() {
  try {
    const commit = execSync('git rev-parse --short HEAD').toString().trim()
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
    return { commit, branch }
  } catch {
    return { commit: 'unknown', branch: 'unknown' }
  }
}

const git = gitInfo()

// Get Vite version from environment (avoids JSON import issues)
const viteVersion = process.env.npm_package_dependencies_vite || 'unknown'

export default defineConfig({
  plugins: [react()],

  define: {
    __BUILD_INFO__: JSON.stringify({
      date: new Date().toISOString(),
      host: os.hostname(),
      os: `${os.type()} ${os.release()} ${os.arch()}`,
      node: process.version,
      vite: viteVersion,
      gitCommit: git.commit,
      gitBranch: git.branch,
    }),
  },

  optimizeDeps: {
    entries: ['index.html'],
    exclude: ['public/games/*'],
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})
