importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5868ae8.js",
    "revision": "ffc399c111b30591a72119ccf53183ff"
  },
  {
    "url": "/_nuxt/5a8fdf1.js",
    "revision": "94cd3fd009140030c6efb95a66a50d99"
  },
  {
    "url": "/_nuxt/6a587cb.js",
    "revision": "0c32da1bfd0b5ac4ffdafdee1e07dee3"
  },
  {
    "url": "/_nuxt/7b774bd.js",
    "revision": "6b4f1b35f4836218cb121278981399ed"
  },
  {
    "url": "/_nuxt/e4b102f.js",
    "revision": "c50931aef0f7e266abb1bf3b929c7356"
  },
  {
    "url": "/_nuxt/ff3d5cf.js",
    "revision": "4536dc3a4f49187a63490ee182f4432e"
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
