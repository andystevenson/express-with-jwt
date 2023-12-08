import { info } from 'node:console'
import * as url from 'url'
import path from 'node:path'

// const __filename = url.fileURLToPath(import.meta.url)
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
export const pages = {
  index: path.join(__dirname, 'pages', 'index.html'),
  404: path.join(__dirname, 'pages', '404.html'),
  public: path.join(__dirname, 'public'),
  log: path.join(__dirname, '..', 'logs', 'access.log'),
  views: {
    index: path.join(__dirname, 'pages', 'views', 'index.html'),
    test: path.join(__dirname, 'pages', 'views', 'test.html'),
  },
  db: {
    employees: path.join(__dirname, '..', 'data', 'employees.json'),
  },
}
