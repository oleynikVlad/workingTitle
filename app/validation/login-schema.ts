import { z } from "zod";

export const loginSchema = z
  .object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6).optional(),
    forgotPassword: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    console.log(data);
    if (!data.forgotPassword && !data.password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password is required if you are not resetting it.",
        path: ["password"],
      });
    }
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
