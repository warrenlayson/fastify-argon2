'use strict'

const fp = require('fastify-plugin')
const argon2 = require('argon2')

module.exports = fp(
  async function (fastify, opts, next) {
    const hash = async (plain, options) => argon2.hash(plain, options)

    const verify = async (hash, plain) => argon2.verify(hash, plain)

    fastify
      .decorate('argon2', { hash, verify })
      .decorateRequest('argon2Hash', hash)
      .decorateRequest('argon2Verify', verify)

    next()
  },
  { fastify: '3.x' }
)
