import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>This is the BlogPostsPage</h1>
    </div>
  );
}

export default BlogPostsPage;
