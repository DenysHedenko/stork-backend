import { Joi, Segments } from "celebrate";
import { GENDERS } from "../constants/genders.js";

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().max(32),
    gender: Joi.string().valid(...GENDERS),
    dueDate: Joi.date().required(),
    avatar: Joi.string(),
  })
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })
};

// Доп задание

// export const requestResetEmailSchema = {
//   [Segments.BODY]: Joi.object({
//   email: Joi.string().email().required(),
// })
// };

// export const resetPasswordSchema = {
//   [Segments.BODY]: Joi.object({
//     token: Joi.string().required(),
//     password: Joi.string().required().min(8),
//   })
// };


