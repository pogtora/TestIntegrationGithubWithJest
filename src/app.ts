import express from 'express'
import routeGithub from './routes/routeGithub';

const app = express()
app.use('/github', routeGithub)

module.exports = app
export default app