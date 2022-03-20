const { test } = require('tap')
const Fastify = require('fastify')

const buildApp = async (t) => {
  const fastify = Fastify({
    logger: {
      level: 'error'
    }
  })

  t.teardown(() => fastify.close())
  return fastify
}

test('fastify-argon2', async (t) => {
  t.test('hash', async (t) => {
    t.plan(2)
    const fastify = await buildApp(t)
    try {
      await fastify.register(require('../index'))
      const hash = await fastify.argon2.hash('password')
      t.equal(typeof hash, 'string', 'should generate a hash')
      t.not(hash, 'password', 'should generate a hash')
    } catch (err) {
      console.error(err)
      t.error(err, 'should not throw any error')
    }
  })
})
