import { useRouter } from "next/router";

function ClientsIdPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>This is the ClientsIdPage</h1>
    </div>
  );
}

export default ClientsIdPage;
