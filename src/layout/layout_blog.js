import React from "react"

import { Layout } from "./layout_default"
import { BlogHeader } from "./BlogHeader"
import Seo from "./seo"

export default function Template(props) {
  const { pageContext, children } = props
  const { frontmatter } = pageContext

  return (
    <Layout path={props.path}>
      <Seo
        children={props.children}
        page={frontmatter}
        title={frontmatter.title || frontmatter.heading}
      />
      <main className="min-h-screen bg-center bg-no-repeat bg-cover pt-20 mb-16 max-w-4xl m-auto px-4 sm:px-6 md:px-12">
        <BlogHeader path={props.path} {...frontmatter} />
        {children}
      </main>
    </Layout>
  )
}
