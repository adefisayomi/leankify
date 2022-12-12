import { useForm, Controller } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, TextField, InputAdornment } from '@mui/material';
import { useFirebase } from '../../hooks';
import { resetSchema } from './schema';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


// ----------------------------------------------------------------------

export default function ResetPasswordForm({ setSent, setEmail }) {


  const {sendResetPasswordLink} = useFirebase()

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onSubmit',
    resolver: resetSchema,
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data) => {
    const res = await sendResetPasswordLink(data.email)
    if (res.success) {
      setSent(true)
      setEmail(data.email)
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              variant= 'outlined'
              size= 'large'
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

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          loadingPosition='start'
          variant="contained"
          loading={isSubmitting}
        >
          Reset Password
        </LoadingButton>
      </Stack>
    </form>
  );
}
