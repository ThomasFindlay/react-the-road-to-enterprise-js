export const getStaticParams = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    res => res.json()
  );

  return posts.slice(0, 10).map(post => {
    return {
      postId: post.id,
    };
  });
};

const PostPage = async props => {
  const { postId } = props.params;
  /**
   * SSR
   */
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      cache: "no-store",
    }
  ).then(res => res.json());

  /**
   * SSG + ISR
   */
  /*
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    next: {
      revalidate: 30,
    },
  }).then(res => res.json());
  */
  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>Post ID: {postId}</h1>
      {post ? (
        <div>
          <div>{post.title}</div>
          <br />
          <div>{post.body}</div>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default PostPage;
