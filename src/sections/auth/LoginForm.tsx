import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
// next
import NextLink from 'next/link';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Link, TextField, IconButton, InputAdornment, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
// routes
import Routes from '../../routes';
// components
import { IconButtonAnimate, Iconify } from '../../components';
import {useFirebase} from '../../hooks'
import { loginSchema } from './schema';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

// ----------------------------------------------------------------------

export default function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);
  const {emailSignin} = useFirebase()

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onSubmit',
    resolver: loginSchema,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    const {email, password} = data
    const res = await emailSignin(email, password)
    if (res.success) {
      reset()
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
      <Stack spacing={2.5} alignItems="flex-end">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              size='medium'
              variant='outlined'
              label="Email address"
              error={Boolean(error)}
              type='email'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                      <AlternateEmailIcon fontSize='small' />
                  </InputAdornment>
                ),
              }}
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
              {"Forgot your password? "}
              <NextLink href={Routes.resetPassword} passHref>
              <Link sx={{color: red[500]}} fontWeight={600}>
                Reset
              </Link>
            </NextLink>
            </Typography>
            
        </Stack>

        

        <LoadingButton
          loadingPosition='start'
          fullWidth
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          {isSubmitting ? 'wait a minute...' : 'Login'}
        </LoadingButton>
      </Stack>
    </form>
  );
}
