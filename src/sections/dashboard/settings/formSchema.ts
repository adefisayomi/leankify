import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


export const profileFormSchema = yupResolver(
    Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    name: Yup.string().min(3).required().matches(/^[آ-یA-z]{2,}( [آ-یA-z]{2,})+([آ-یA-z]|[ ]?)$/gm, 'First and last name are required'),
    storeName: Yup.string(),
    phone: Yup.number(),
    address: Yup.string(),
    state: Yup.string(),
    country: Yup.string(),
    zipCode: Yup.string(),
    category: Yup.string(),
    bio: Yup.string()
})
)
