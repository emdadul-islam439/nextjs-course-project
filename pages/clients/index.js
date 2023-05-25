import { useRouter } from "next/router";
import Link from "next/link";

function ClientsPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  const clients = [
    { id: "max", name: "Maximillian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>This is the ClientsPage</h1>
      {clients.map((client) => (
        <li key={client.id}>
          <Link href={`/clients/${client.id}`}>{client.name}</Link>
        </li>
      ))}
    </div>
  );
}

export default ClientsPage;
