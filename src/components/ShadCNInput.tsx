/*  2024-07-07 02:48:18

bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400
*/

import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { UseFormReturn } from "react-hook-form";
import { UserType } from "@/schemas/UserFormSchema";

type ShadCNInputProps = {
  form: UseFormReturn<UserType>;
  name: keyof UserType;
  label: string;
  placeholder?: string;
  description?: string;
};

const ShadCNInput = ({
  form,
  name,
  label,
  placeholder,
  description,
}: ShadCNInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="form-label">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              value={field.value as string}
              className="bg-skin-input text-skin-base border-skin-base focus:border-skin-base focus:ring-skin-base"
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ShadCNInput;
