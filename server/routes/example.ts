import { Hono } from 'hono'

const app = new Hono()

app.get('/hello', (c) => {
  return c.json({ message: 'Hello from the backend!', timestamp: new Date().toISOString() })
})

export default app
