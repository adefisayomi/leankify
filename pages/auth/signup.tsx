
import { styled } from '@mui/material/styles';
import { Stack, Divider, Typography, Link, Box } from '@mui/material';
// components
import { Page, Logo } from '../../src/components';
import { AuthWithSocial, RegisterForm } from '../../src/sections/auth';
import { useFirebase, useResponsive, useSettings } from '../../src/hooks';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#F5F2EA',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    overflow: 'hidden',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 550,
  background: 'white',
  padding: theme.spacing(2, 2),
  borderRadius: 10,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 5)
  },
}));

// ----------------------------------------------------------------------

export default function RegisterCoverPage() {

  const {googleSignup} = useFirebase()
  const {user} = useSettings()
  const router = useRouter()
  const redirect = () => user && router.push('/')
  const isDesktop = useResponsive('up', 'md');

  useEffect(() => {
    redirect()
  }, [user, router])

  return (
    <Page title="Signup ">
      <RootStyle>
        <ContentStyle>

          <Box sx={{width: '100%', mb: 5}}>
            <Logo small={true} />
          </Box>
          

          <Stack
            sx={{ pb: 4}}
            alignItems='center'
            direction= 'row'
          >
            <Typography variant='button' sx={{ color: !isDesktop && 'text.disabled' }} fontSize={14}>
              Create an account - 
            </Typography>
          </Stack>

          <AuthWithSocial type='signup' />

          <Divider sx={{ py: 1 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              OR
            </Typography>
          </Divider>

          <RegisterForm />


          <Stack
            alignItems= 'center'
          >
          <Typography variant="caption" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            I agree to
            <Link color="text.primary" fontWeight={600} href="#">
              {''} Terms of Service {''}
            </Link>
            and
            <Link color="text.primary" fontWeight={600} href="#">
              {''} Privacy Policy.
            </Link>
          </Typography>
          </Stack>
          
          
        </ContentStyle>
        
      </RootStyle>
    </Page>
  );
}
