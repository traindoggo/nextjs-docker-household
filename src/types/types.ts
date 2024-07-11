import { z } from "zod";

export const householdCreateSchema = z.object({
  cost: z.number(),
  boughtAt: z.string().date(),
});

export type THouseholdCreateSchema = z.infer<typeof householdCreateSchema>;
