/*  2024-07-07 04:17:40


*/

import { UseFormReturn } from "react-hook-form";
import { UserType } from "@/schemas/UserFormSchema";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

type ShadCNCheckboxProps = {
  form: UseFormReturn<UserType>;
  name: keyof UserType;
  label: string;
  description?: string;
};

const ShadCNCheckbox = ({
  form,
  name,
  label,
  description,
}: ShadCNCheckboxProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox
              checked={field.value as boolean}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ShadCNCheckbox;
