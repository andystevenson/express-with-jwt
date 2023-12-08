import { Router } from 'express'
import { pages } from '../pages.mjs'

const router = Router()

router.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(pages.index)
})

router.get('/home', (req, res) => {
  res.status(301).redirect('/')
})

export default router
