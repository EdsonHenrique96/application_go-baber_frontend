import { ValidationError } from 'yup';

interface FormattedErrors {
  [key: string]: string;
}

export default function getFormattedValidationErrors(
  validationErrorObj: ValidationError,
): FormattedErrors {
  const formattedErrors: FormattedErrors = {};

  validationErrorObj.inner.forEach(err => {
    formattedErrors[err.path] = err.message;
  });

  return formattedErrors;
}
