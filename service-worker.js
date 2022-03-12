/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "23881beb5333c488b21f09d1b73e953d"
  },
  {
    "url": "assets/css/0.styles.0c1bf166.css",
    "revision": "060445baba8c46b4a748c7d41972d372"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ad781c78.js",
    "revision": "899ef58f3f92b85d021edba26afd2097"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.97611e9e.js",
    "revision": "b53ff81e491bbca388e699599993589d"
  },
  {
    "url": "assets/js/16.6a73ab67.js",
    "revision": "039a459ce7877806245e67226e4a6dcc"
  },
  {
    "url": "assets/js/17.f829100a.js",
    "revision": "8dceb00f63fb206ccfb8c7c505caca82"
  },
  {
    "url": "assets/js/18.f1775122.js",
    "revision": "efce58aaf72028620a6c956a1e228fb5"
  },
  {
    "url": "assets/js/19.53f9c669.js",
    "revision": "8f489a5cca5cc135ecd985b7d99ceb03"
  },
  {
    "url": "assets/js/2.6b9d4ca6.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.a1946310.js",
    "revision": "ca1b9a4e83ab9b28611b06ab0270f6d6"
  },
  {
    "url": "assets/js/21.6d9460cc.js",
    "revision": "8ff3260b6dc07ada4db3a00ef8132748"
  },
  {
    "url": "assets/js/22.8ccf43fb.js",
    "revision": "e44241768de2e77635ecca88a60d3c0a"
  },
  {
    "url": "assets/js/23.d97aed26.js",
    "revision": "b50fe8e43f38078ad9fce2e2b7b1c514"
  },
  {
    "url": "assets/js/24.42ae2fc3.js",
    "revision": "9b2de4ce88eba303e0a6e6e2b1830f78"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.4ed45971.js",
    "revision": "b16159aab039353619946e13967d38e4"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.3c71fcca.js",
    "revision": "b571707f54429051ffeeff5b8e1517e4"
  },
  {
    "url": "assets/js/6.73f22f79.js",
    "revision": "65c87ea66ae3b2e4b676cfecaec56395"
  },
  {
    "url": "assets/js/7.3f7143c7.js",
    "revision": "ba5677f2c1b45600efbf2676bd653ea6"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.e4eb971f.js",
    "revision": "5bda65f9b79b053b0721d42f717f529f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "659ac74f16726dbf809e4c293926c7ba"
  },
  {
    "url": "design/index.html",
    "revision": "8117bd4ffe4622737494249b18c45a3f"
  },
  {
    "url": "index.html",
    "revision": "5231771f1776aa9bd8e7a60567e30ca5"
  },
  {
    "url": "intro/index.html",
    "revision": "25effc8a7f23e901635b842e68b6cca8"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "4b87f5db21f21db3d94700833b4572ab"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4b1d8f2b71ac1902262f690d7a00f2ff"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7bc28f002cdc31e2388f3572835e147a"
  },
  {
    "url": "software/index.html",
    "revision": "4bf286ba2fdcc2a9dda552cc121dc7d3"
  },
  {
    "url": "test/index.html",
    "revision": "50606703871f92e4e8a02eba3afee68d"
  },
  {
    "url": "use cases/index.html",
    "revision": "41ff2da18e77e2fe4f5e3800b5e0f634"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
