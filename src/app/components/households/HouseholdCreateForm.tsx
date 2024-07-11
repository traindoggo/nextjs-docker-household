"use client";

import { createHousehold } from "@/actions/actions";
import { householdCreateSchema, THouseholdCreateSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function HouseholdCreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<THouseholdCreateSchema>({
    resolver: zodResolver(householdCreateSchema),
    defaultValues: {
      // TODO: tricky solution?
      boughtAt: new Date().toISOString().split("T")[0] as unknown as Date,
    },
  });

  const onSubmit = async (data: THouseholdCreateSchema) => {
    createHousehold(data);
  };

  return (
    <div className={`flex flex-col gap-4 text-xl`}>
      <form className={`flex flex-col gap-4`} onSubmit={handleSubmit(onSubmit)}>
        <div className={`grid grid-cols-2 mx-20`}>
          <label htmlFor="cost">Cost</label>
          <input
            {...register("cost")}
            type="number"
            className={`border roudned text-black outline-none`}
          />
          {errors.cost && (
            <p className="text-sm text-red-600">{`${errors.cost.message}`}</p>
          )}
        </div>

        <div className={`grid grid-cols-2 mx-20`}>
          <label htmlFor="boughtAt">Bought At</label>
          <input
            {...register("boughtAt")}
            type="date"
            className={`border rounded text-black outline-none`}
          />
          {errors.boughtAt && (
            <p
              className={`text-sm text-red-600`}
            >{`${errors.boughtAt.message}`}</p>
          )}
        </div>

        <button
          type="submit"
          className={`border border-green-700 bg-green-700
            hover:bg-green-500
            rounded text-black duration-100`}
        >
          Create
        </button>
      </form>
    </div>
  );
}
