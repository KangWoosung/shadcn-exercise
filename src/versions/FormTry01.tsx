/*  2024-07-07 03:13:08

2024-07-07 04:39:29
밸리데이션 에러 메세지 출력까지 확인하였다.
다음 작업..
globals.css 추가
ShadCN 스타일링 가이드 따라해보기
Tailwind 스타일링
Design GUI 테스트

*/

import ShadCNButtton from "@/components/ShadCNButtton";
import ShadCNCheckbox from "@/components/ShadCNCheckbox";
import ShadCNInput from "@/components/ShadCNInput";
import ShadCNInputDate from "@/components/ShadCNInputDate";
import ShadCNRadioGroup from "@/components/ShadCNRadioGroup";
import ShadCNSelect from "@/components/ShadCNSelect";
import ShadCNSwitch from "@/components/ShadCNSwitch";
import { Form } from "@/components/ui/form";
import { UserFormSchema, UserType } from "@/schemas/UserFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { HiCode } from "react-icons/hi";
import { CgDanger } from "react-icons/cg";

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
            className=""
            placeholder="Enter your username"
          />
          <ShadCNInput
            form={form}
            name="email"
            label="Email"
            className=""
            placeholder="Enter your email address"
          />
          <ShadCNInputDate
            form={form}
            name="dateOfBirth"
            label="Date of Birth"
            className=""
            placeholder="Choose your date of birth"
          />
          <ShadCNSelect
            form={form}
            name="hobby"
            label="Hobby"
            className=""
            placeholder="Select your hobby"
            options={hobbies}
          />
          <ShadCNRadioGroup
            form={form}
            name="gender"
            label="Gender"
            className=""
            options={genders}
          />
          <ShadCNSwitch
            form={form}
            name="newsLetter"
            label="News Letter"
            className=""
            description="Receive News Letter lorem ipsum dolor sit amet."
          />
          <ShadCNCheckbox
            form={form}
            name="terms"
            className=""
            label="Terms and Conditions"
            description="I agree to the terms and conditions lorem ipsum dolor sit amet."
          />
          {/* 버튼에 아이콘도 넣어서 전달해주자. */}
          <div className="flex flex-row justify-center items-center gap-2">
            <ShadCNButtton
              form={form}
              type="submit"
              variant="default"
              size="default"
              className="flex flex-row gap-2"
            >
              <HiCode color="red" fontSize="1.5em" />
              Primary Button
            </ShadCNButtton>
            <ShadCNButtton
              form={form}
              type="submit"
              variant="outline"
              size="sm"
              className="flex flex-row gap-2"
            >
              <HiCode color="gold" fontSize="1.2em" />
              Secondary Button
            </ShadCNButtton>
            <ShadCNButtton
              form={form}
              variant="ghost"
              size="ssm"
              className="flex flex-row gap-2"
            >
              <HiCode color="cyan" fontSize="1.2em" />
              Ghost Button
            </ShadCNButtton>
            <ShadCNButtton
              form={form}
              variant="destructive"
              size="xlg"
              className="flex flex-row gap-2"
            >
              <CgDanger color="crimson" fontSize="1.5em" />
              Danger Button
            </ShadCNButtton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormTry01;
