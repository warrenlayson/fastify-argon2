# __MY_PLUGIN__

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)  ![CI workflow](__MY_PLUGIN_URL__
/workflows/CI%20workflow/badge.svg)

Supports Fastify versions `3.x`

## Install
```
npm i --save fastify-argon2
```

## Usage
Require `fastify-argon2` and register. This will decorate your `fastify` instance with the following methods: `hash`, `verify`, and `needsRehash`. It will also register `request.argon2Hash`, `request.argon2Verify`, and `request.argon2NeedsRehash`.
```js
const fastify = require('fastify')()

fastify.register(require('fastify-argon2'))

fastify.argon2.hash('password')
  .then(hash => fastify.argon2.verify(hash, 'password'))
  .then(isMatch => console.log(isMatch ? 'Matched" : 'Not matched'))
  .catch(err => console.error(err.message))

fastify.listen(3000)
```

## Acknowledgements

## License

Licensed under [MIT](./LICENSE).<br/>
