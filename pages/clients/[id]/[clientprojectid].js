import { useRouter } from "next/router";

function ClientsProjectIdPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>This is the ClientsProjectIdPage</h1>
    </div>
  );
}

export default ClientsProjectIdPage;
