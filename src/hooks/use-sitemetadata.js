import { graphql, useStaticQuery } from 'gatsby';

let useSiteMetadata = () => {
  let data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
