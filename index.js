'use strict'

const fp = require('fastify-plugin')
const argon2 = require('argon2')

module.exports = fp(
  async function (fastify, opts, next) {
    const hash = async (plain, options) => argon2.hash(plain, options)

    const verify = async (hash, plain, options) =>
      argon2.verify(hash, plain, options)

    const needsRehash = async (hash, options) =>
      argon2.needsRehash(hash, options)

    fastify
      .decorate('argon2', { hash, verify, needsRehash })
      .decorateRequest('argon2Hash', hash)
      .decorateRequest('argon2Verify', verify)
      .decorateRequest('argon2NeedsRehash', needsRehash)

    next()
  },
  { fastify: '3.x' }
)
