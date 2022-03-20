import { hash, needsRehash, verify } from 'argon2'
import { FastifyPluginCallback } from 'fastify'

declare module 'fastify' {
  export interface FastifyInstance {
    argon2: {
      /**
       * Hashes a string or Buffer and
       * returns a promise which
       * resolves with the hash result
       */
      hash: typeof hash
      /**
       *
       */
      verify: typeof verify
      /**
       *
       */
      needsRehash: typeof needsRehash
    }
  }

  export interface FastifyRequest {
    /**
     * Hashes a string or Buffer and
     * returns a promise which
     * resolves with the hash result
     */
    argon2Hash: typeof hash

    /**
     *
     */
    argon2Verify: typeof verify
    /**
     *
     */
    argon2NeedsRehash: typeof needsRehash
  }
}

declare const fastifyArgon2: FastifyPluginCallback

export { fastifyArgon2 }
export default fastifyArgon2
