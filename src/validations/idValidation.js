import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

export const objectIdValidation = (value, helpers) => {
  return isValidObjectId(value) ? value : helpers.message('Invalid id format');
};

export const idValidationSchema = {
  [Segments.PARAMS]: Joi.object({
    id: Joi.string().custom(objectIdValidation).required(),
  }),
};
