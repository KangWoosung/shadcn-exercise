/* 2024-07-11 09:00:34


*/

import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form";
// import { Input } from "./ui/input";
import { UseFormReturn } from "react-hook-form";
import { UserType } from "@/schemas/UserFormSchema";
import FormTitle from "./FormTitle";
import { useFormFieldError } from "./UseFormFieldError";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { SelectSingleEventHandler } from "react-day-picker";

// type Matcher = boolean | ((date: Date) => boolean) | Date | Date[] | DateRange | DateBefore | DateAfter | DateInterval | DayOfWeek;

type ShadCNInputProps = {
  form: UseFormReturn<UserType>;
  name: keyof UserType;
  label: string;
  placeholder?: string;
  description?: string;
};

const ShadCNInputDate = ({
  form,
  name,
  placeholder,
  description,
}: ShadCNInputProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  const handleOnSelect: SelectSingleEventHandler = (date) => {
    onSelect?.(date);
    setIsPopoverOpen(false);
  };

  const { error } = useFormFieldError(name);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormTitle>Date of birth</FormTitle>
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    error && "border-destructive",
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value as Date, "PPP")
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 text-popover-foreground bg-popover shadow-md outline-none border rounded-md"
              align="start"
            >
              <Calendar
                mode="single"
                selected={field.value as Date}
                onSelect={(e) => {
                  field.onChange(e);
                  setIsPopoverOpen(false);
                }}
                disabled={(date: Date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                captionLayout="dropdown-buttons"
                fromYear={1960}
                toYear={2030}
              />
            </PopoverContent>
          </Popover>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ShadCNInputDate;
