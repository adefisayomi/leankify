// ----------------------------------------------------------------------
import {useTheme} from '@mui/material/styles'

export default function LoadingButton() {
  const theme = useTheme()
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          fontSize: 13,
          fontWeight: 600,
          borderRadius: 6,
          color: theme.palette.mode === 'light' ? 'black' : '',
          height: 46,
          '&.MuiButton-text': {
            '& .MuiLoadingButton-startIconPendingStart': {
              marginLeft: 0,
            },
            '& .MuiLoadingButton-endIconPendingEnd': {
              marginRight: 0,
            },
          },
        },
      },
    },
  };
}
