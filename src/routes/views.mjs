import express, { Router } from 'express'
import { pages } from '../pages.mjs'

const router = Router()

router.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(pages.views.index)
})

router.get('/test(.html)?', (req, res) => {
  res.sendFile(pages.views.test)
})

export default router
