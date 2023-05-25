import { useRouter } from "next/router";

function ClientsIdPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  function loadProjectHandler() {
    return router.push("/clients/max/projecta")
  }

  return (
    <div>
      <h1>The Project of A Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsIdPage;
