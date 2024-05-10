"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailsjs from "@emailjs/browser";

const userId = process.env.EMAILJS_USER_ID as string;
const serviceId = process.env.EMAILJS_SERVICE_ID as string;
const templateId = process.env.EMAILJS_TEMPLATE_ID as string;

/**
 * A Zod schema that defines the shape of a contact form data object.
 * The schema includes the following fields:
 * - `name`: a non-empty string
 * - `email`: a valid email address
 * - `tel`: a number between 10 and 10 digits
 * - `message`: a non-empty string
 */
const contactSchema = z.object({
  name: z.string().min(1, "Enter your name"),
  email: z.string().email("Invalid email address"),
  tel: z
    .number()
    .min(10, "Your phone number is less than 10 numbers")
    .max(10, "Your phone number is more than 10 numbers"),
  message: z.string().min(1, "Enter your message"),
});

type FormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: FormData) => {
    const { name, email, tel, message } = data;

    emailsjs.send(serviceId, templateId, {
      from_name: name,
      reply_to: email,
      tel: tel,
      message: message
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
      <div className="my-4">
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name")}
          className={`shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && (
          <p className="text-red-500">{"$errors.name.message"}</p>
        )}
      </div>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
          className={`shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-500">{"$errors.email.message"}</p>
        )}
      </div>
      <div className="mb-4">
        <input
          type="tel"
          id="tel"
          placeholder="Phone Number"
          className={`shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.name ? "border-red-500" : ""
          }`}
          {...register("tel")}
        />
        {errors.tel && (
          <p className="text-red-500">{"$errors.tel.message"}</p>
        )}
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Message"
          id="message"
          rows={4}
          className={`shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.name ? "border-red-500" : ""
          }`}
          {...register("message", {
            required: "Enter your message",
          })}
        />
        {errors.message && (
          <p className="text-red-500">{"$errors.message.message"}</p>
        )}
      </div>
      <div className="flex items-center justify-between mx-auto">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
