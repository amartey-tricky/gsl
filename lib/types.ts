import { z } from "zod";

/**
 * A Zod schema that defines the shape of a contact form data object.
 * The schema includes the following fields:
 * - `name`: a non-empty string
 * - `email`: a valid email address
 * - `tel`: a number between 10 and 10 digits
 * - `message`: a non-empty string
 */
export const contactSchema = z.object({
  name: z.string().min(1, "Enter your name"),
  email: z.string().email("Invalid email address"),
  tel: z
    .number()
    .min(10, "Your phone number is less than 10 numbers")
    .max(10, "Your phone number is more than 10 numbers"),
  message: z.string().min(1, "Enter your message"),
});

/**
 * A Zod schema that defines the shape of air cost data.
 * The schema includes the following fields:
 * - `length`: a positive number representing the length
 * - `width`: a positive number representing the width
 * - `height`: a positive number representing the height
 * - `numBoxes`: a positive number representing the number of boxes
 * - `weight`: a positive number representing the weight
 */
export const airCostSchema = z.object({
  length: z.number().positive("Enter the length"),
  width: z.number().positive("Enter the width"),
  height: z.number().positive("Enter the height"),
  numBoxes: z.number().positive("Enter the number of boxes"),
  weight: z.number().positive("Enter the weight"),
});