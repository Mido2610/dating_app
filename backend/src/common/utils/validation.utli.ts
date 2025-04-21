import Joi, { CustomHelpers } from 'joi';
import JoiPhoneNumber from 'joi-phone-number';

export const JoiCustomPhone = Joi.extend(JoiPhoneNumber)
  .string()
  .required()
  .phoneNumber();

export const objectId = (value: string, helpers: CustomHelpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.error('Invalid ObjectId format');
  }
  return value;
};