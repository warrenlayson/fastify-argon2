import Fastify from 'fastify'
import argon2 from '../index'

const app = Fastify({ logger: false })
void app.register(argon2)

void app.get('/', async (request) => {
  const res = await request.argon2Hash('password')
  return await request.argon2Verify('password', res)
})
