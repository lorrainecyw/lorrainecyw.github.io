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
    "revision": "545c9e930916a667e0b39673e9f11027"
  },
  {
    "url": "assets/css/0.styles.a7146319.css",
    "revision": "ab61dcd08ca1044aa99e3f4020c971bd"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.7661ea60.js",
    "revision": "706c2385333cc27fc5b5574a91b93ebb"
  },
  {
    "url": "assets/js/10.bf7d4169.js",
    "revision": "282cc706f1b93b44511b240854158177"
  },
  {
    "url": "assets/js/11.5243378f.js",
    "revision": "eaa39d6bbb33acba3c28f6f5c73a0250"
  },
  {
    "url": "assets/js/12.7cf5d53c.js",
    "revision": "8d10c87066658e585bf3ffc918659dfe"
  },
  {
    "url": "assets/js/13.5e7074f4.js",
    "revision": "7f6663caf3c4abdd6e276c09b6943fc6"
  },
  {
    "url": "assets/js/14.b0107384.js",
    "revision": "60c079eec60910d95a000d914c8a47aa"
  },
  {
    "url": "assets/js/15.19a52165.js",
    "revision": "e6b4e78de463f854a3f916bd162b6064"
  },
  {
    "url": "assets/js/16.0b9f21b3.js",
    "revision": "7d7b3283c96232172b4b76731ac66344"
  },
  {
    "url": "assets/js/17.435e8550.js",
    "revision": "618c18e53b77a7df0e904372d068f52c"
  },
  {
    "url": "assets/js/18.8b78c4ed.js",
    "revision": "d5614350de0a98815ded4202f70360de"
  },
  {
    "url": "assets/js/19.c5a49905.js",
    "revision": "55e49483d53c47d9e6e683e3247c41ba"
  },
  {
    "url": "assets/js/2.d4d04e5b.js",
    "revision": "6cfc6f36010f1d0a1c067b402fa79e4b"
  },
  {
    "url": "assets/js/20.bc9d5ea9.js",
    "revision": "6c07a7e3847c889a7fc49ace1864b301"
  },
  {
    "url": "assets/js/21.d4f5cf2e.js",
    "revision": "ec62b17f94c39d14323966dad4f476ac"
  },
  {
    "url": "assets/js/22.9a57fc67.js",
    "revision": "933e5ed05b914d72fc9f6abc3a2a2240"
  },
  {
    "url": "assets/js/23.1238a38f.js",
    "revision": "48fad81b9e9b9d4d208771527101212d"
  },
  {
    "url": "assets/js/24.66913a31.js",
    "revision": "d6891ba72c5a93863dabedf55cf7c2b0"
  },
  {
    "url": "assets/js/25.4481b225.js",
    "revision": "5bb0a7f6c4b5384bf2a03678f5883c59"
  },
  {
    "url": "assets/js/26.3dc2d1e2.js",
    "revision": "564a6c1e85f186288ba2de8643793823"
  },
  {
    "url": "assets/js/27.c766f85f.js",
    "revision": "3257e558f14c388b0cc287d7c4b35ec6"
  },
  {
    "url": "assets/js/28.abf117d7.js",
    "revision": "ee19dc8959d1b9e90b3e08b2d1aa5273"
  },
  {
    "url": "assets/js/29.0ed090e7.js",
    "revision": "c2e528b36fbdbddc2dfce4793a7ecf0f"
  },
  {
    "url": "assets/js/3.85691da0.js",
    "revision": "7c519513f910f08854912f460ad7469f"
  },
  {
    "url": "assets/js/30.24366e38.js",
    "revision": "ddbf7120ce2d2b88ce322ab2107c0650"
  },
  {
    "url": "assets/js/31.926a472b.js",
    "revision": "9acfcb9ff4f1bd206e9efe03d1bb4a89"
  },
  {
    "url": "assets/js/32.4ed0c726.js",
    "revision": "11998668998a1f47eb3ff62b56811761"
  },
  {
    "url": "assets/js/33.0034657d.js",
    "revision": "07bff5900ff72f837eb1b3b3110964e9"
  },
  {
    "url": "assets/js/34.82c7b76a.js",
    "revision": "0e6ea12dd0fda81e571ff27dd2a5158f"
  },
  {
    "url": "assets/js/35.e889d441.js",
    "revision": "d520c4d3edb2cac5d6f3c69d1e2683d3"
  },
  {
    "url": "assets/js/36.8fb4409a.js",
    "revision": "9a887525128c647d177adf01ff52a48e"
  },
  {
    "url": "assets/js/37.afb4afd2.js",
    "revision": "4e1541bdbc9e101c29e8daacda849583"
  },
  {
    "url": "assets/js/38.d82a00f1.js",
    "revision": "1dd98a46335db491ef57bd421412a570"
  },
  {
    "url": "assets/js/39.f04c96cd.js",
    "revision": "3abbe765612f4436e21b1179f1b1e118"
  },
  {
    "url": "assets/js/40.48ed7059.js",
    "revision": "b54d4de942298edd1470b1f8ab4e263a"
  },
  {
    "url": "assets/js/41.901c962e.js",
    "revision": "774d4ef62418db7668eb72bd13443ca2"
  },
  {
    "url": "assets/js/42.fe8a0124.js",
    "revision": "4a52ea47a47dcf5a693486eef1efdae5"
  },
  {
    "url": "assets/js/43.fc97ad2e.js",
    "revision": "8592cac95649f6d0d6348d5c01cbc470"
  },
  {
    "url": "assets/js/44.fd0cf573.js",
    "revision": "524b3654fc1f31c51ea4c564170d4900"
  },
  {
    "url": "assets/js/45.4350498d.js",
    "revision": "943cd0bcba610034870fd20daaea5a38"
  },
  {
    "url": "assets/js/46.ce68e9f0.js",
    "revision": "85493ecd97cb2207ebb3b8aac0564edc"
  },
  {
    "url": "assets/js/47.8fb5c2ad.js",
    "revision": "2fd65bee3300e09a875f4c7e52e501a0"
  },
  {
    "url": "assets/js/48.23b14faf.js",
    "revision": "57ef977086869da72c1201bc2a389ad1"
  },
  {
    "url": "assets/js/49.b34f6903.js",
    "revision": "9462534ce204d4fdd84d36c630962822"
  },
  {
    "url": "assets/js/5.60ba17b8.js",
    "revision": "1687bc7a9f177d39c4c5d8a545d4c386"
  },
  {
    "url": "assets/js/50.b484bd13.js",
    "revision": "390cad84fd6ca6cfef075c816b286ba9"
  },
  {
    "url": "assets/js/51.5042beb9.js",
    "revision": "22b62f076f04e2ef067c1b82ab97e6ad"
  },
  {
    "url": "assets/js/52.50ea9d57.js",
    "revision": "ea5367cb681b7f9d88b3a54cc57fc0d0"
  },
  {
    "url": "assets/js/53.aa5a9e31.js",
    "revision": "cdb65ab95d15d93c75dd46982f038c28"
  },
  {
    "url": "assets/js/54.2169e047.js",
    "revision": "e187941be0307e21adefc16849612eb8"
  },
  {
    "url": "assets/js/55.2ac948e4.js",
    "revision": "e02c7237070bd8faa7fac7569d9cb676"
  },
  {
    "url": "assets/js/56.d9d77436.js",
    "revision": "1831002af08cdd1af63745dce51bdd46"
  },
  {
    "url": "assets/js/57.453d05e9.js",
    "revision": "489e4367ead04b1649d14ea3322e62f5"
  },
  {
    "url": "assets/js/6.fe652b67.js",
    "revision": "bf639f952e71a413c5f87f45bd8f4b18"
  },
  {
    "url": "assets/js/7.b0ed7b8c.js",
    "revision": "153270e152322418a45d5d37ce928bdc"
  },
  {
    "url": "assets/js/8.2f996208.js",
    "revision": "f385a5e11f1d72549cc6e666ac9f47ef"
  },
  {
    "url": "assets/js/9.223a722d.js",
    "revision": "0ee4a4e2161ad78b1117f0ed1c995a7f"
  },
  {
    "url": "assets/js/app.c06b0f17.js",
    "revision": "b337b108a4170892f5d671b931683a45"
  },
  {
    "url": "blogs/framework/spring/spring-aop-xiang-jie.html",
    "revision": "2b5b91ae72c4574477563d1f214173cd"
  },
  {
    "url": "blogs/network/tcp/tcp-lian-jie-de-jian-li-he-duan-kai.html",
    "revision": "5d2b84f991ac3328c2d4f385fb53c3ee"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "a9c43b6e5d102a07d235c5545a789e5a"
  },
  {
    "url": "blogs/other/test.html",
    "revision": "ea539f749709925ccb1849cb2aaf3b0e"
  },
  {
    "url": "categories/index.html",
    "revision": "40dac2451f064dbfdf9edb534e45f354"
  },
  {
    "url": "categories/Java 并发/index.html",
    "revision": "9daea8a4aa91ddb480623dd927482c5b"
  },
  {
    "url": "categories/Java 并发/page/2/index.html",
    "revision": "b41822a7a7ea1eaa53fcd75bddbece87"
  },
  {
    "url": "categories/Java 并发/page/3/index.html",
    "revision": "63da73471d45320ba3d5e90e1c9cdff4"
  },
  {
    "url": "categories/MySQL/index.html",
    "revision": "f3356fffca73e6283a514f395087a810"
  },
  {
    "url": "categories/框架/index.html",
    "revision": "f076ccbe31c8d4c57e196d14a977ee4a"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "17372b42d1c16f1cc06005dbaf7fb5ca"
  },
  {
    "url": "docs/java-concurrent-24/01.html",
    "revision": "fcfe571a6fa2a6fb11b0403e9c103d93"
  },
  {
    "url": "docs/java-concurrent-24/02.html",
    "revision": "e02b5a07614dd1f3c3a74e0ded871b52"
  },
  {
    "url": "docs/java-concurrent-24/03.html",
    "revision": "3a5132d0fe75431e8cea76ca395a7c2f"
  },
  {
    "url": "docs/java-concurrent-24/04.html",
    "revision": "e978fc925dea6a0c1d3391165fa8e804"
  },
  {
    "url": "docs/java-concurrent-24/05.html",
    "revision": "0005e62ceceffeb0c0e2fe158c5eab10"
  },
  {
    "url": "docs/java-concurrent-24/06.html",
    "revision": "0b0a6032f1e517031a788c7f87154db0"
  },
  {
    "url": "docs/java-concurrent-24/07.html",
    "revision": "b8ffe0bde9e5464b5e20032c9be2465b"
  },
  {
    "url": "docs/java-concurrent-24/08.html",
    "revision": "99906e3530100d96965b5422a13a1132"
  },
  {
    "url": "docs/java-concurrent-24/09.html",
    "revision": "bd313ad216a2b164dc4c840f69fa4b6d"
  },
  {
    "url": "docs/java-concurrent-24/10.html",
    "revision": "3c8d15eebc2de10c085826a58757c7ea"
  },
  {
    "url": "docs/java-concurrent-24/11.html",
    "revision": "fa6613c24d6e020f6e9f8a98e0eb0218"
  },
  {
    "url": "docs/java-concurrent-24/12.html",
    "revision": "d61c1c32812e7dc7dca8004bc173f4e7"
  },
  {
    "url": "docs/java-concurrent-24/13.html",
    "revision": "ac5e92a2be1a0f67ef2f7fed851be564"
  },
  {
    "url": "docs/java-concurrent-24/14.html",
    "revision": "ff6cb18cad866aeacc6ef3d3f06161af"
  },
  {
    "url": "docs/java-concurrent-24/15.html",
    "revision": "226d0e8ee55bb2f53f5496d193b8a154"
  },
  {
    "url": "docs/java-concurrent-24/16.html",
    "revision": "a874d3188dd6ee575de84b15a390071e"
  },
  {
    "url": "docs/java-concurrent-24/17.html",
    "revision": "1005e86267d7ba3f7e7be142eeb009af"
  },
  {
    "url": "docs/java-concurrent-24/18.html",
    "revision": "8fe118c49f98e68ea486b40e5751b634"
  },
  {
    "url": "docs/java-concurrent-24/19.html",
    "revision": "10fc48cfbd25e9637379614798857035"
  },
  {
    "url": "docs/java-concurrent-24/20.html",
    "revision": "0cf07d4934a3a2274669fb1099c089fa"
  },
  {
    "url": "docs/java-concurrent-24/21.html",
    "revision": "b524aab04715dc40227ac519f10ad5aa"
  },
  {
    "url": "docs/java-concurrent-24/22.html",
    "revision": "a08622ec1fd6504cbeb58f4e602e3ae5"
  },
  {
    "url": "docs/java-concurrent-24/23.html",
    "revision": "aa6699c8314fd8bcdeb6217e6657b74b"
  },
  {
    "url": "docs/java-concurrent-24/24.html",
    "revision": "7fb749a6f1b18c71580dced47e79d5a5"
  },
  {
    "url": "docs/java-concurrent-24/25.html",
    "revision": "a38de696023811cf59cda6f761f34868"
  },
  {
    "url": "docs/java-concurrent-24/26.html",
    "revision": "43a1d139f92641d5151d587241ccdbf2"
  },
  {
    "url": "docs/java-concurrent-24/27.html",
    "revision": "e910e2ab7262f0467c3b138c0839947b"
  },
  {
    "url": "docs/java-concurrent-24/index.html",
    "revision": "1726d5ac0757aa7a5127b10853675ae7"
  },
  {
    "url": "docs/mysql-practice45/01.html",
    "revision": "fcf5e62cb58c64a881e5983ade282b70"
  },
  {
    "url": "docs/mysql-practice45/02.html",
    "revision": "4aeb02573521bf1677592f7caeafcae3"
  },
  {
    "url": "docs/mysql-practice45/03.html",
    "revision": "81a632cc27dfac2e3d663008973897d0"
  },
  {
    "url": "docs/mysql-practice45/04.html",
    "revision": "1e6f4323bf3412ab80cf74725f5d21a2"
  },
  {
    "url": "docs/mysql-practice45/05.html",
    "revision": "837894320032bb67e0310e270be3c0b1"
  },
  {
    "url": "docs/mysql-practice45/06.html",
    "revision": "f9a1488919fed94f63e40cd3f0ce479e"
  },
  {
    "url": "docs/mysql-practice45/07.html",
    "revision": "3a66dee569ae4e79eb0affa1cce75f86"
  },
  {
    "url": "docs/mysql-practice45/08.html",
    "revision": "ab3c8dabd0496fcad53176511996a4dd"
  },
  {
    "url": "docs/mysql-practice45/09.html",
    "revision": "1d0fa50fa0d13531ead30221ba04d912"
  },
  {
    "url": "docs/mysql-practice45/10.html",
    "revision": "6bdbe7a37b24846928223dafb9dbb2b3"
  },
  {
    "url": "docs/mysql-practice45/index.html",
    "revision": "9a1a5daa654e98620925eef89b7c500c"
  },
  {
    "url": "hero.png",
    "revision": "934dc5c54dc987e5be9a9edec80ee4ed"
  },
  {
    "url": "heromax.png",
    "revision": "031d9d6161021ba57c474e0c0d83f181"
  },
  {
    "url": "index.html",
    "revision": "c2231252c131c7fe67b42b159329f577"
  },
  {
    "url": "tag/index.html",
    "revision": "17a53da2a689a3722503128f719fe8e9"
  },
  {
    "url": "tag/MySQL事务/index.html",
    "revision": "16a975b126a42675df550d3a82b11f06"
  },
  {
    "url": "tag/MySQL日志/index.html",
    "revision": "fdb8ab8eb2f46b36e72ef16f9efcd368"
  },
  {
    "url": "tag/MySQL结构/index.html",
    "revision": "e5e4f4a84d77fd86a21841d85c971406"
  },
  {
    "url": "tag/MySQL锁/index.html",
    "revision": "330b200a36649df448ace5cf085cba53"
  },
  {
    "url": "tag/Spring/index.html",
    "revision": "f1bf0c941146efef625fe65ee714aadd"
  },
  {
    "url": "tag/TCP/index.html",
    "revision": "834342bfedcade78105261b3840f6d3d"
  },
  {
    "url": "tag/test/index.html",
    "revision": "3d8897dcfb18a3d2ff69805b9193e0a9"
  },
  {
    "url": "tag/索引/index.html",
    "revision": "73365219a0f26699de7d669905f81a79"
  },
  {
    "url": "tag/线程/index.html",
    "revision": "b223a0ae96e6cb25382e35d4fba79664"
  },
  {
    "url": "timeline/index.html",
    "revision": "c4c03eb426b436572d3bd2f7f21d7aa9"
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
