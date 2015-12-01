'use strict'

var test = require('tape')
var limitAlphanumeric = require('./')

test(function (t) {
  t.equal(limitAlphanumeric('foo.bar'), 'foobar')
  t.equal(limitAlphanumeric('foo_bar'), 'foobar')
  t.equal(limitAlphanumeric('foo_bar123'), 'foobar123')
  t.equal(limitAlphanumeric('foo:bar//'), 'foobar')
  t.end()
})
