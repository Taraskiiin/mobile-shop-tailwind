import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextArea } from "./common/TextArea";
import { FormProvider } from "./common/FormProvider";
import { TextField } from "./common/TextField";
import { Button } from "./common/Button";

interface FormValues {
  comment: string;
  name: string;
  email: string;
  phone?: string;
}

export const FeedbackForm: FC = () => {
  const [loading, setIsLoading] = useState<boolean>(false);

  const validationSchema = Yup.object({
    comment: Yup.string().required("Comment is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string(),
  });

  const initialValues: FormValues = {
    comment: "",
    name: "",
    email: "",
    phone: "",
  };

  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  const {
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    const { comment, name, email, phone } = data;
    console.log({ comment, name, email, phone });
    try {
      setIsLoading(true);
    } catch (error) {
      console.error(error);
      reset();
    }
  });

  return (
    <>
      <h2 className="text-2xl text-primary mb-[16px]">Leave a Review</h2>
      <p className="text-sm text-primary mb-[16px]">
        Your email address will not be published. Required fields are marked{" "}
        <span>*</span>
      </p>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <TextArea
          id="comment"
          placeholder="Comment *"
          value={values.comment}
          onChange={(event) => setValue("comment", event.target.value)}
        />
        <div className="flex justify-between">
          <TextField
            id="name"
            type="text"
            placeholder="Name *"
            value={values.name}
            onChange={(event) => setValue("name", event.target.value)}
          />
          <TextField
            id="email"
            type="text"
            placeholder="Email *"
            value={values.email}
            onChange={(event) => setValue("email", event.target.value)}
          />
        </div>
        <TextField
          id="phone"
          type="text"
          placeholder="Phone (optional)"
          value={values.phone}
          onChange={(event) => setValue("phone", event.target.value)}
        />
        <div className="max-w-[350px] mt-[30px]">
          <Button
            type="submit"
            label="Post Review"
            loading={isSubmitting && loading}
          />
        </div>
      </FormProvider>
    </>
  );
};
