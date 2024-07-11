import { prisma } from "@/lib/db";

const table_border = `border border-collapse border-neutral-500
px-4 text-start`;

export default async function DashBoardPage() {
  const households = await prisma.household.findMany();

  return (
    <main className={`h-full flex flex-col p-4`}>
      <header className={`mb-6`}>
        <h1 className={`text-xl text-center mb-4`}>Create Household</h1>
      </header>

      <table className={`min-w-full ${table_border}`}>
        <thead className={`${table_border}`}>
          <tr>
            <th className={`${table_border}`}>At</th>
            <th className={`${table_border}`}>cost</th>
          </tr>
        </thead>

        <tbody className={`${table_border}`}>
          {households.map((household) => (
            <tr key={household.id}>
              <td className={`${table_border}`}>
                {household.boughtAt.toISOString().split("T")[0]}
              </td>
              <td className={`${table_border}`}>{household.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
