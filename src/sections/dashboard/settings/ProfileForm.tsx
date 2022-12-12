import {useForm, Controller} from 'react-hook-form'
import { profileFormSchema } from './formSchema'
import {Stack, TextField, InputAdornment, Typography, Grid, Button} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { useSettings } from '../../../hooks';
import { useState, useEffect } from 'react';


export default function ProfileForm () {

    const {user} = useSettings()
    const [initialVal, setInitialVal] = useState({})
    const {control, handleSubmit, watch, reset, formState: {isSubmitting}} = useForm({
        mode: 'onSubmit',
        resolver: profileFormSchema,
        defaultValues: {
            storeName: '',
            name: user?.displayName || '',
            email: user?.email || '',
            phone: user?.phone || '',
            address: '',
            state: '',
            country: '',
            zipCode: '',
            category: '',
            bio: ''
        },

    })

    const onSubmit = data => {
        console.log(data)
    }



    return (
        <Stack spacing={2}>
            <Typography variant='caption' pt={1}>
                Basic Informations
            </Typography>

            <Stack direction='row' alignItems='center' spacing= {2}>
                <Controller
                    name="storeName"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Store name"
                            type='text'
                            placeholder='spencer'
                            error={Boolean(error)}
                            helperText={error?.message}
                            InputProps={{
                                startAdornment: <Typography variant='body2'  fontSize={13}>https://leankify.com/</Typography>,
                              }}
                        />
                    )}
                />

                <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="First & Last name"
                            type='text'
                            placeholder='Adeline spencer'
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />
            </Stack>

            <Stack direction='row' alignItems='center' spacing= {2}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Email"
                            type='email'
                            placeholder='eg. spencer@gmail.com'
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />

                <Grid item md={6} xm={12}>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            fullWidth
                            type='tel'
                            label="Phone Number"
                            placeholder='+234 012 3456 789'
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />
                </Grid>
            </Stack>

            {/* Adress */}
            <Typography variant='caption' pt={1}>
                Business Address
            </Typography>

            <Stack direction='row' alignItems='center' spacing= {2}>
                <Controller
                    name="address"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Address"
                            type='text'
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />

                <Controller
                    name="state"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            fullWidth
                            type='text'
                            label="State/Region"
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />
            </Stack>

            <Stack direction='row' alignItems='center' spacing= {2}>
                <Controller
                    name="country"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Country"
                            type='text'
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />

                <Grid item md={7} sm={12}>
                <Controller
                    name="zipCode"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            fullWidth
                            type='text'
                            label="Zip code"
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />
                </Grid>
            </Stack>

            <Stack direction='row' alignItems='center' spacing= {2}>
                <Controller
                    name="bio"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            fullWidth
                            multiline
                            rows={6}
                            label="Bio"
                            placeholder='Business bio'
                            type='text'
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />

                {/* <Grid item md={6} xm={12}>
                <Controller
                    name="category"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            fullWidth
                            type='text'
                            label="Store Category"
                            error={Boolean(error)}
                            helperText={error?.message}
                        />
                    )}
                />
                </Grid> */}
            </Stack>

            <Stack spacing= {2} direction= 'row' alignItems='center' justifyContent='flex-end' pt={5}>
                <LoadingButton 
                    variant="contained"
                    loadingPosition="start"
                    size='small'
                    loading= {isSubmitting}
                    onClick={handleSubmit(onSubmit)}
                >
                    {isSubmitting ? 'saving changes...' : 'save changes'}
                </LoadingButton>
            </Stack>

        </Stack>
    )
}