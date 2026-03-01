
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 494, hash: 'e69d020d853a3e35da9b2c9c7e7b89654ae82882c4f346cac5d7fd83f3a63b7b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '0332c5b36d29607f5a5a283d7c3b566ff03af2fb3acb478f83c62a7ea471dc92', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21657, hash: 'd45dbe24e2c2c7c3e38785ff623290d0e287b2f0ab9febb5781a0661c21de913', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
