/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  let posts = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  posts.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug,
      },
    });
  });
};
