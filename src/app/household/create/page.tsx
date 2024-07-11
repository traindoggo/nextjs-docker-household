import { HouseholdCreateForm } from "@/app/components/households/HouseholdCreateForm";

export default function Page() {
  return (
    <main className="flex flex-col p-4">
      <h1 className={`text-xl text-center mb-4`}>Create Household</h1>

      <HouseholdCreateForm />
    </main>
  );
}
