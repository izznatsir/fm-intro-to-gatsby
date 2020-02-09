import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export let query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        slug
      }
      body
    }
  }
`;

let PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <div className="constrained-container">
        <Link className="text-sm text-blue-600">&larr; Back to home page</Link>
        <h1 className="mt-4 text-3xl font-semibold">
          {post.frontmatter.title}
        </h1>
        <span className="inline-block pl-1 text-sm text-gray-700">
          Authored by{' '}
          <span className="text-gray-900">{post.frontmatter.author}</span>
        </span>
      </div>
      <div className="mt-8">
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export default PostTemplate;
