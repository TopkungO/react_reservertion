import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(2, "Title must be more than 2 charator"),
  price: z.coerce.number(),
  description: z.string().max(50, "Descript must be less then 50 charactor"),
});
