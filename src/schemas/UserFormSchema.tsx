/*  2024-07-07 02:55:19


  gender: z.enum(["male", "female", "bin"], {
    message: "Gender must be one of 'male', 'female', or 'bin'",
  }),
*/

import { z } from "zod";

// 기준 날짜를 설정합니다.
const maxDate = new Date("2006-01-31");
const minDate = new Date("1978-10-31");

// Preprocess to handle `null`, `undefined`, and `""` cases
// const booleanSchema = z.preprocess((val) => {
//   if (val === null || val === undefined || val === "") {
//     return false; // Assign a default value or handle it as per your logic
//   }
//   return val;
// }, z.boolean());
// Preprocess string to boolean conversion
const booleanStringSchema = z.preprocess((val) => {
  if (typeof val === "string") {
    return val === "true";
  }
  return val;
}, z.boolean());

// Define the zod schema
export const UserFormSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  hobby: z.enum(["yoga", "running", "drinking", "music", "movies"], {
    message:
      "Hobby must be one of 'yoga', 'running', 'drinking', 'music', or 'movies'",
  }),
  dateOfBirth: z.preprocess(
    (val) => {
      if (val === null || val === undefined || val === "") {
        return new Date(""); // Invalid date
      }
      return new Date(val as string);
    },
    z
      .date()
      .refine((date) => !isNaN(date.getTime()), {
        message: "잘못된 날짜입니다. Invalid date. Choose your date",
      }) // Ensure valid date
      .refine((date: Date) => date <= maxDate, {
        message: "Date of birth must be older than January 31, 2006",
      })
      .refine((date: Date) => date >= minDate, {
        message: "Date of birth must be younger than October 31, 1978",
      })
  ),
  gender: z.string({ message: "Gender is required" }),
  terms: booleanStringSchema.nullish().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  newsLetter: booleanStringSchema.nullish().refine((val) => val === true, {
    message: "Newsletter subscription status cannot be null",
  }),
});

// TypeScript type based on the zod schema
export type UserType = z.infer<typeof UserFormSchema>;
