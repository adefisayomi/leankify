import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const loginSchema = yupResolver(Yup.object().shape({
    email: Yup.string().required('Email is required').email('That is not an email'),
    password: Yup.string()
      .required('Password is required').min(6),
  }))

export const signupSchema = yupResolver(
    Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    name: Yup.string().min(3).required().matches(/^[آ-یA-z]{2,}( [آ-یA-z]{2,})+([آ-یA-z]|[ ]?)$/gm, 'First and last name are required'),
    password: Yup.string().min(6).required('Password is required'),
})
)

export const resetSchema = yupResolver(
  Yup.object().shape({
  email: Yup.string().required('Email is required').email('That is not an email'),
})
);