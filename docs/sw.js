if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const r=e=>s(e,i),o={module:{uri:i},exports:c,require:r};a[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/whatsany1/_next/static/LtzkXLZZeEgb4GbJmQrR5/_buildManifest.js",revision:"35e98385413b509a6e07120a034ada4c"},{url:"/whatsany1/_next/static/LtzkXLZZeEgb4GbJmQrR5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/whatsany1/_next/static/chunks/455-9454bdaea4482014.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/chunks/4bd1b696-dc53661a9e7a1ea0.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/chunks/app/_not-found/page-7456c41c4a254266.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/chunks/app/layout-d17fc76e846a8387.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/chunks/app/page-8e291d6ca4a4762a.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/chunks/e34aaff9-b10160321cdf2dd6.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/chunks/main-981ada13c1820451.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/chunks/main-app-e51ecc9366a3dc92.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/whatsany1/_next/static/chunks/webpack-6478b103112fe7aa.js",revision:"LtzkXLZZeEgb4GbJmQrR5"},{url:"/whatsany1/_next/static/css/1d2ec9c108e1ef2e.css",revision:"1d2ec9c108e1ef2e"},{url:"/whatsany1/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/whatsany1/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/whatsany1/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/whatsany1/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/whatsany1/_next/static/media/favicon-32x32.43d2eb07.png",revision:"a0bf3011affaa2206df14e8952be26ba"},{url:"/whatsany1/apple-touch-icon.png",revision:"3723df839b605cf96e5c23c02cca0c47"},{url:"/whatsany1/favicon-16x16.png",revision:"9e463b2d69a3a2b347b4488598de8d3a"},{url:"/whatsany1/favicon-32x32.png",revision:"a0bf3011affaa2206df14e8952be26ba"},{url:"/whatsany1/favicon.ico",revision:"6a42e92470c64c79c4b8411b1484f16b"},{url:"/whatsany1/logo.png",revision:"dadce4a3ffbac00c9fe2fd62dec91fd0"},{url:"/whatsany1/logo.svg",revision:"288038176b53449a4e905ce3cb02f05d"},{url:"/whatsany1/logo192.png",revision:"03e1e142a2e31bbcb42b9458bdc41dfe"},{url:"/whatsany1/logo512.png",revision:"a60df9c6c6adcb684f9bf048dc1445bb"},{url:"/whatsany1/manifest.json",revision:"e0e6653e880d615a5604150929c5be58"},{url:"/whatsany1/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"/whatsany1/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/whatsany1",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
