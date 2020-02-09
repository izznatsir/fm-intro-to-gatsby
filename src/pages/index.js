import React from 'react';
import usePosts from '../hooks/use-posts';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import styles from '../styles/index.module.css';

let IndexPage = () => {
  let posts = usePosts();
  return (
    <Layout>
      <h1 className="text-3xl font-medium">Hi Frontend Masters!</h1>
      <h2 className="mt-5 text-xl font-bold">My blog posts</h2>
      <div className="grid grid-flow-col grid-cols-3 col-gap-5">
        {posts &&
          posts.map((post) => {
            return (
              <Link
                className={`mt-4 px-4 py-5 border border-gray-400 cursor-pointer ${styles.postContainer}`}
                key={post.slug}
                to={post.slug}
              >
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <span className="inline-block text-sm">Read post &rarr;</span>
              </Link>
            );
          })}
      </div>
    </Layout>
  );
};

export default IndexPage;
