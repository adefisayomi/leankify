import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
// @mui
import { LoadingButton } from '@mui/lab';
import { Typography, Stack, Link, TextField, IconButton, InputAdornment } from '@mui/material';
// components
import { IconButtonAnimate, Iconify } from '../../components';
import { useFirebase } from '../../hooks';
import NextLink from 'next/link';
import Routes from '../../routes';
import { signupSchema } from './schema';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';



export default function RegisterForm() {

  const {emailSignup} = useFirebase()
  const [showPassword, setShowPassword] = useState(false);

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'submit',
    resolver: signupSchema,
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
  });

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    const {email, password, name} = data
    const res = await emailSignup(email, password, name)
    if (res.success) {
      return reset()
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              size='large'
              variant='outlined'
              label="Full Name"
              type='text'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                      <PersonIcon fontSize='small' />
                  </InputAdornment>
                ),
              }}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              size='large'
              variant='outlined'
              fullWidth
              label="Email address"
              type='email'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                      <AlternateEmailIcon fontSize='small' />
                  </InputAdornment>
                ),
              }}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              size='large'
              variant='outlined'
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButtonAnimate size='small' edge='end'>
                     {showPassword ? <VisibilityIcon fontSize='small' /> : <VisibilityOffIcon fontSize='small' />} 
                     </IconButtonAnimate>
                  </InputAdornment>
                ),
              }}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />
        <Stack
          direction='row'
          justifyContent= 'space-between'
          alignItems= 'center'
          width= '100%'
        >
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              {"Already have an account? "}
              <NextLink href={Routes.login} passHref>
              <Link sx={{color: 'black'}} fontWeight={600}>
                Login
              </Link>
            </NextLink>
          </Typography>
            
        </Stack>

        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          loadingPosition='start'
          loading={isSubmitting}
          sx={{color: 'black'}}
        >
          {isSubmitting ? 'creating your account...' : 'create account'}
        </LoadingButton>
      </Stack>
    </form>
  );
}
