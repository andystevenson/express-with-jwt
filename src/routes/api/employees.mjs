import { Router } from 'express'
import employees from '../../../data/employees.json' assert { type: 'json' }

const router = Router()

router
  .route('/')
  .get((req, res) => {
    res.json(employees)
  })
  .post((req, res) => {
    const { firstName, surname } = req.body
    res.json({ firstName, surname })
  })
  .put((req, res) => {
    const { firstName, surname } = req.body
    res.json({ firstName, surname })
  })
  .delete((req, res) => {
    const { id } = req.body
    res.json({ deleted: id })
  })

router.route('/:id').get((req, res) => {
  const { id } = req.params
  res.json({ fetching: id })
})

export default router
