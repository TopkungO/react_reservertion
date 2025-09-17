import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(2, "Title must be more than 2 charator"),
  price: z.coerce.number(),
  description: z.string().max(50, "Descript must be less then 50 charactor"),
  category: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
  image: z.any(),
});
export const profileSchema = z.object({
  firstname: z
    .string()
    .min(2, "first must be more than 2 charator")
    .max(30, "first name must be less than 30 charactor"),
  lastname: z
    .string()
    .min(2, "last must be more than 2 charator")
    .max(30, "last name must be less than 30 charactor"),
});
