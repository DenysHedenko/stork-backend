import { Joi, Segments } from 'celebrate';
import { objectIdValidation } from './idValidation.js';

export const createDiarySchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).max(64).trim().required(),
    description: Joi.string().min(1).max(1000).trim().required(),
    emotions: Joi.array()
      .items(Joi.string().custom(objectIdValidation))
      .min(1)
      .max(12)
      .required(),
  }),
};

export const updateDiarySchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).max(64).trim(),
    description: Joi.string().min(1).max(1000).trim(),
    emotions: Joi.array()
      .items(Joi.string().custom(objectIdValidation))
      .min(1)
      .max(12),
  }),
};
