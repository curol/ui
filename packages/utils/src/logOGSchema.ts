import * as z from "zod"

export const logOGSchema = z.object({
  event: z.enum(["copy_primitive"]),
  data: z.record(z.string()),
})
