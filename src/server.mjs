import express from 'express'
import { info, error } from 'node:console'
import { pages } from './pages.mjs'
import morgan from 'morgan'
import { createWriteStream } from 'node:fs'
import home from './routes/home.mjs'
import views from './routes/views.mjs'
import employees from './routes/api/employees.mjs'

const PORT = process.env.PORT || 3500
const log = createWriteStream(pages.log, { flags: 'a' })

const app = express()

// enable morgan logging
app.use(morgan('combined', { stream: log }))

// allow urlencoded requests. e.g. form data
// content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// allow JSON data
app.use(express.json())

// static files
app.use(express.static('public'))

// routes

app.use('/', home)
app.use('/views', views)
app.use('/employees', employees)

let index = 0
const chain = () => {
  return (res, req, next) => {
    index++
    info(`chain${'!'.repeat(index)}`)
    next()
  }
}

app.get('/chain', [
  chain(),
  chain(),
  chain(),
  (req, res) => {
    res.send('End of Chain, Chain, Chain')
  },
])

app.get('/*', (req, res) => {
  res.status(404).sendFile(pages['404'])
})

app.listen(PORT, () => {
  info('listening on port', PORT)
})
