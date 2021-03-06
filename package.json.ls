name: 'prelude-ls-browser'
version: '1.1.2'

author: 'George Zahariev <z@georgezahariev.com>'

description: "prelude.ls is a functionally oriented utility library. It is powerful and flexible. Almost all of its functions are curried. It is written in, and is the recommended base library for, LiveScript."

keywords:
  'prelude'
  'livescript'
  'utility'
  'ls'
  'coffeescript'
  'javascript'
  'library'
  'functional'
  'array'
  'list'
  'object'
  'string'

main: 'browser/'
files:
  'browser/'
  'README.md'
  'LICENSE'

homepage: 'http://preludels.com'
bugs: 'https://github.com/gkz/prelude-ls/issues'
license: 'MIT'
engines:
  node: '>= 0.8.0'
repository:
  type: 'git'
  url: 'git://github.com/franklx/prelude-ls.git'
scripts:
  test: "make test"

dev-dependencies:
  browserify: '^16.2.3'
  istanbul: '^0.4.5'
  livescript: '^1.6.0'
  mocha: '^5.2.0'
  sinon: '^7.1.1'
  'uglify-js': '^3.4.9'
