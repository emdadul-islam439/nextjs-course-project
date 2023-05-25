import { useRouter } from "next/router";

function ClientsPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>This is the ClientsPage</h1>
    </div>
  );
}

export default ClientsPage;
