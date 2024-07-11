import { z } from "zod";

export const householdCreateSchema = z.object({
  cost: z.coerce.number(),
  boughtAt: z.coerce.date(),
});

export type THouseholdCreateSchema = z.infer<typeof householdCreateSchema>;
