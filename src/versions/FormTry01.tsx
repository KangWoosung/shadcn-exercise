/*  2024-07-07 03:13:08

2024-07-07 04:39:29
밸리데이션 에러 메세지 출력까지 확인하였다.
다음 작업..
globals.css 추가
ShadCN 스타일링 가이드 따라해보기
Tailwind 스타일링
Design GUI 테스트

*/

import ShadCNCheckbox from "@/components/ShadCNCheckbox";
import ShadCNInput from "@/components/ShadCNInput";
import ShadCNInputDate from "@/components/ShadCNInputDate";
import ShadCNRadioGroup from "@/components/ShadCNRadioGroup";
import ShadCNSelect from "@/components/ShadCNSelect";
import ShadCNSwitch from "@/components/ShadCNSwitch";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { UserFormSchema, UserType } from "@/schemas/UserFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const hobbies = [
  { value: "yoga", label: "Yoga" },
  { value: "running", label: "Running" },
  { value: "drinking", label: "Drinking" },
  { value: "music", label: "Music" },
  { value: "movies", label: "Movies" },
];
const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const FormTry01 = () => {
  const form = useForm<UserType>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      userName: "",
      email: "",
      // dateOfBirth: new Date(),
      // gender: "male",
      // terms: false,
    },
  });

  const onSubmit = (data: UserType) => {
    console.log(data);
  };

  return (
    <div className="w-10/12">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-auto space-y-6"
        >
          <h1>FormTry01</h1>
          <ShadCNInput
            form={form}
            name="userName"
            label="Username"
            placeholder="Enter your username"
            // description="Enter your username lorem ipsum"
          />
          <ShadCNInput
            form={form}
            name="email"
            label="Email"
            placeholder="Enter your email address"
            // description="Enter your email address lorem ipsum dolor sit amet."
          />
          <ShadCNInputDate
            form={form}
            name="dateOfBirth"
            label="Date of Birth"
            placeholder="Choose your date of birth"
            // description="Enter your date of birth lorem ipsum dolor sit amet."
          />
          <ShadCNSelect
            form={form}
            name="hobby"
            label="Hobby"
            placeholder="Select your hobby"
            // description="Enter your hobby lorem ipsum dolor sit amet."
            options={hobbies}
          />
          <ShadCNRadioGroup
            form={form}
            name="gender"
            label="Gender"
            // description="Select your gender"
            options={genders}
          />
          <ShadCNSwitch
            form={form}
            name="newsLetter"
            label="News Letter"
            description="Receive News Letter lorem ipsum dolor sit amet."
          />
          <ShadCNCheckbox
            form={form}
            name="terms"
            label="Terms and Conditions"
            description="I agree to the terms and conditions lorem ipsum dolor sit amet."
          />
          <Button
            type="submit"
            className="text-primary-button bg-primary-button-background border-primary-button-border border border-solid "
          >
            Submit .................
          </Button>
          <button
            type="submit"
            className="p-primary-button bg-primary-button-background text-primary-button border-primary-button-border border border-solid "
          >
            Primary Button
          </button>
          <button
            type="submit"
            className="p-secondary-button bg-secondary-button-background text-secondary-button border-secondary-button-border border border-solid "
          >
            secondary Button
          </button>
        </form>
      </Form>
    </div>
  );
};

export default FormTry01;
