
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-blog-automatisert-testing-mdx": preferDefault(require("/Users/bjornjarle/projects/kvandecom/src/pages/blog/automatisert_testing.mdx")),
  "component---src-pages-blog-codeaholic-mdx": preferDefault(require("/Users/bjornjarle/projects/kvandecom/src/pages/blog/codeaholic.mdx")),
  "component---src-pages-blog-gold-or-led-mdx": preferDefault(require("/Users/bjornjarle/projects/kvandecom/src/pages/blog/gold_or_led.mdx")),
  "component---src-pages-blog-invester-i-produktet-mdx": preferDefault(require("/Users/bjornjarle/projects/kvandecom/src/pages/blog/invester-i-produktet.mdx")),
  "component---src-pages-index-mdx": preferDefault(require("/Users/bjornjarle/projects/kvandecom/src/pages/index.mdx"))
}

