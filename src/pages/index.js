import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink =  styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data : {allMarkdownRemark} }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>
        Olusola's Blog
      </h1>
      <h4> {allMarkdownRemark.totalCount} </h4>
      {
        allMarkdownRemark.edges.map(({node:{id, frontmatter, excerpt, fields}}) => {
         return (
         <div key= {id}>
           <BlogLink to={fields.slug} >
              <BlogTitle>
                {frontmatter.title} - {frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p> {excerpt} </p>
          </div>
          )
        })
      }
    </div>

  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`