import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import exampleRoutes from './routes/example.js'

const app = new Hono()

app.route('/api', exampleRoutes)

const PORT = Number(process.env.PORT) || 3001

serve({ fetch: app.fetch, port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
