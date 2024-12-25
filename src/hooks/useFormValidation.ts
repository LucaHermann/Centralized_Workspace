import { useCallback, useState } from 'react';
import { THEME_CONSTANTS } from '../constants/theme';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  email?: boolean;
}

export const useFormValidation = (rules: ValidationRules) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = useCallback((value: string) => {
    if (rules.required && !value) {
      return 'This field is required';
    }
    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters`;
    }
    if (rules.email && !value.match(THEME_CONSTANTS.EMAIL_REGEX)) {
      return 'Please enter a valid email address';
    }
    return '';
  }, [rules]);

  return { errors, validate, setErrors };
}; 
