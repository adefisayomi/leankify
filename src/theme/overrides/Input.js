import { alpha } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// ----------------------------------------------------------------------

export default function Input(theme) {
  return {
    MuiTextField: {
      defaultProps: {
        // variant: 'filled',
        variant: 'outlined'
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& svg': { color: theme.palette.text.disabled },
          }
        },
        input: {
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
          fontSize: 13,
          '&.Mui-focused': {
            color: theme.palette.mode === 'dark' ? grey[200] : theme.palette.text.disabled
          },
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.grey[500_8],
          '&:hover': {
            backgroundColor: theme.palette.grey[500_16],
          },
          '&.Mui-error': {
            backgroundColor: alpha(theme.palette.error.main, 0.08),
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        input: {
          ...theme.typography.body2,
        },
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[500_32],
          },
          fontSize: 13,
          borderRadius: 4,
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
  };
}
