import PropTypes from 'prop-types'
import {Stack, Typography, MenuItem, Grid, Button } from '@mui/material';
import {useTheme} from '@mui/material/styles'
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useFirebase, useResponsive } from '../../hooks';
import {TextMaxLine} from '../../components'

// ----------------------------------------------------------------------
AuthWithSocial.prototype = {
  onClickAction: PropTypes.func
};

export default function AuthWithSocial({type}) {

  const theme = useTheme()
  const {googleLogin, googleSignup} = useFirebase()
  const isDesktop = useResponsive('up', 'md');
  

  return (
    <Grid container spacing={1}>
      <Grid xs={6} item>
        <Button 
          onClick={type === 'login' ? googleLogin : googleSignup}
          sx={{
            width: '100%',
            p: 1.5, 
            borderRadius: 3,
            borderWidth: 3,
            "&:active": {
              borderWidth: 3
            },
            "&:hover": {
              borderWidth: 3
            }
          }} 
          variant='outlined'
        >
          <Stack direction='row' alignItems= 'center' spacing={1.5}>
            <GoogleIcon fontSize= {isDesktop ? 'small' : 'medium' } />
            <TextMaxLine line={1} variant="caption" fontWeight={600} sx={{ textAlign: 'center' }}>
              {`${isDesktop ? "Continue with" : ""} Google`}
            </TextMaxLine>
          </Stack>
        </Button>
      </Grid>

      <Grid xs={6} item>
        <Button 
          onClick={type === 'login' ? googleLogin : googleSignup}
          sx={{
            width: '100%',
            p: 1.5, 
            borderRadius: 3, 
            borderWidth: 3,
            "&:active": {
              borderWidth: 3
            },
            "&:hover": {
              borderWidth: 3
            }
          }} 
          variant='outlined'
        >
          <Stack direction='row' alignItems= 'center' spacing={1.5}>
            <LinkedInIcon fontSize= {isDesktop ? 'small' : 'medium' } />
            <TextMaxLine line={1} variant="caption" fontWeight={600} sx={{ textAlign: 'center' }}>
              {`${isDesktop ? "Continue with" : ""} Linkedin`}
            </TextMaxLine>
          </Stack>
        </Button>
      </Grid>
    </Grid>
    
  );
}
