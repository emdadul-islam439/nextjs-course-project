import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname)
  console.log(router.query)
  return (
    <div>
      <h1>This is the PortfolioProjectPage</h1>
    </div>
  );
}

export default PortfolioProjectPage;
