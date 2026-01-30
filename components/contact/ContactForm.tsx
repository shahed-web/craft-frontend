"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    // hook API/email service here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-2xl bg-[#FFF7EF] p-6 shadow-md md:p-8"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="w-full">
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First Name"
              className={`w-full rounded-lg bg-white p-3 text-sm outline-none ring-1
                ${
                  errors.firstName
                    ? "ring-red-400 focus:ring-red-500"
                    : "ring-transparent focus:ring-green-700/30"
                }`}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last Name"
              className={`w-full rounded-lg bg-white p-3 text-sm outline-none ring-1
                ${
                  errors.lastName
                    ? "ring-red-400 focus:ring-red-500"
                    : "ring-transparent focus:ring-green-700/30"
                }`}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            placeholder="Email Address"
            className={`w-full rounded-lg bg-white p-3 text-sm outline-none ring-1
              ${
                errors.email
                  ? "ring-red-400 focus:ring-red-500"
                  : "ring-transparent focus:ring-green-700/30"
              }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            {...register("message", {
              required: "Message cannot be empty",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            placeholder="Your Message"
            rows={5}
            className={`w-full resize-none rounded-lg bg-white p-3 text-sm outline-none ring-1
              ${
                errors.message
                  ? "ring-red-400 focus:ring-red-500"
                  : "ring-transparent focus:ring-green-700/30"
              }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            mt-2 inline-flex items-center justify-center
            rounded-full bg-green-800 px-6 py-3
            font-amatic text-lg text-white
            transition hover:bg-green-900
            disabled:opacity-50
          "
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
