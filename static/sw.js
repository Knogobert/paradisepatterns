importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05e8920.js",
    "revision": "544651960ce6851f1074ef6ad8938e4d"
  },
  {
    "url": "/_nuxt/0aeb1c7.js",
    "revision": "e611210a88d20ed5ffc3d20fce9b5f0f"
  },
  {
    "url": "/_nuxt/466d241.js",
    "revision": "42771926ec968ed8111b44a3307b4faf"
  },
  {
    "url": "/_nuxt/4e2ba65.js",
    "revision": "66c668b07b9e6e25b8b8f6d8effb144f"
  },
  {
    "url": "/_nuxt/8d69458.js",
    "revision": "da439d2f241ea4b2af11159cb90ce662"
  },
  {
    "url": "/_nuxt/f4441d2.js",
    "revision": "ba21d8b70aa4f0561d3d4095734d6639"
  }
], {
  "cacheId": "paradisepatterns",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
