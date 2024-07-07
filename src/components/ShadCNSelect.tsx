/*  2024-07-07 04:14:23


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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ShadCNSelectProps = {
  form: UseFormReturn<UserType>;
  name: keyof UserType;
  label: string;
  description?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
};

const ShadCNSelect = ({
  form,
  name,
  label,
  description,
  placeholder,
  options,
}: ShadCNSelectProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-skin-base dark:text-gray-200">
            {label}
          </FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value as string | undefined}
          >
            <FormControl>
              <SelectTrigger className="bg-skin-input text-skin-base border-skin-base focus:ring-skin-base select-trigger">
                <SelectValue
                  placeholder={placeholder}
                  className="select-value"
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="select-content">
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="select-item"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ShadCNSelect;
