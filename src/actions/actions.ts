"use server";

import { prisma } from "@/lib/db";
import { householdCreateSchema, THouseholdCreateSchema } from "@/types/types";

export async function createHousehold(data: THouseholdCreateSchema) {
  const validatedHousehold = householdCreateSchema.safeParse(data);

  if (!validatedHousehold.success) {
    console.error(validatedHousehold);
    return;
  }

  const resp = await prisma.household.create({
    data: {
      cost: validatedHousehold.data.cost,
      boughtAt: validatedHousehold.data.boughtAt,
    },
  });

  console.log(resp);
}
