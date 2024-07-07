/*  2024-07-07 02:55:19


  gender: z.enum(["male", "female", "bin"], {
    message: "Gender must be one of 'male', 'female', or 'bin'",
  }),
*/

import { z } from "zod";

// Define the zod schema
export const UserFormSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  dateOfBirth: z
    .date()
    .refine((date) => !isNaN(date.getTime()), { message: "Invalid date" }), // Ensure valid date
  gender: z.string(),
  terms: z
    .boolean()
    .refine((val) => val !== null, { message: "Active status cannot be null" }),
  newsLetter: z
    .boolean()
    .refine((val) => val !== null, {
      message: "Newsletter subscription status cannot be null",
    })
    .optional(),
  hobby: z
    .enum(["yoga", "running", "drinking", "music", "movies"], {
      message:
        "Hobby must be one of 'yoga', 'running', 'drinking', 'music', or 'movies'",
    })
    .optional(),
});

// TypeScript type based on the zod schema
export type UserType = z.infer<typeof UserFormSchema>;
