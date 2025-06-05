import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(5, "Username must be atleast 5 characters")
  .max(10, "Maximum length is 10")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special chars");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password should be atleast 6 characters" })
    .max(8),
});
