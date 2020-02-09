import { graphql, useStaticQuery } from 'gatsby';

let usePosts = () => {
  let data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(({ frontmatter, excerpt }) => {
    return {
      title: frontmatter.title,
      author: frontmatter.author,
      slug: frontmatter.slug,
      body: excerpt,
    };
  });
};

export default usePosts;
