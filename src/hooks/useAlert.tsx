import { useSnackbar, VariantType } from 'notistack'
import {Typography} from '@mui/material'


export default function AlertAction () {

    const {enqueueSnackbar} = useSnackbar()
    const setAlert = (message: string, type?: VariantType) => {
        enqueueSnackbar(
            <Typography fontFamily='Poppins' fontSize={12}>
                {message}
            </Typography>, {
            variant: type || 'default'
        })
    }

    return {setAlert}
}