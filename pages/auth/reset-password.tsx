import { useEffect, useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Stack, Avatar } from '@mui/material';
// routes
import Routes from '../../src/routes';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, Image, Logo } from '../../src/components';
import { ResetPasswordForm } from '../../src/sections/auth';
import { grey } from '@mui/material/colors';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { useSettings } from '../../src/hooks';
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
  padding: theme.spacing(5, 5),
  borderRadius: 10,
}));

// ----------------------------------------------------------------------

export default function ResetPasswordPage() {

  const {user} = useSettings()
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('')
  const router = useRouter()

  useEffect(() => {
    if(user) {
      return router.back()
    }
  }, [user, router])

  return (
    <Page title="Reset Password">
      <RootStyle>
        <ContentStyle>
        <Box sx={{ maxWidth: 450, width: '100%' }}>

            <Stack
                sx={{ pb: 3}}
                justifyContent= 'flex-start'
                alignItems='center'
                direction= 'row'
              >
                <Logo />
            </Stack>

          {!sent ? (
            <>
              <Typography variant="button" color={grey[600]} paragraph textAlign='left'>
                Forgot Your Password?
              </Typography>
              <Typography variant="caption" sx={{  mb: 2,}} paragraph textAlign='left'>
                Enter the email address associated with your account and We will email you a
                link to reset your password.
              </Typography>

              <ResetPasswordForm setEmail={setEmail} setSent= {setSent} />
            </>
          ) : (
            <>
            <Stack
                sx={{ pb: 2}}
                justifyContent= 'flex-start'
                alignItems='center'
                direction= 'row'
                spacing= {2}
              >
              <MarkEmailUnreadIcon sx= {{color: '#ef6c00', fontSize: '50px'}} />
                
              <Typography variant="h4">
                Request Sent Successfully
              </Typography>
            </Stack>

              <Typography variant="caption" color={grey[700]} textAlign='left' paragraph >
                A password reset Link has been sent to: {''}
                <strong>{email}</strong>
                <br />
                Please check your email.
              </Typography>

              <NextLink href={Routes.login} passHref>
                <Button size="large" variant="contained"  fullWidth>
                  continue to Login
                </Button>
              </NextLink>
            </>
          )}
        </Box>
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

// ResetPasswordPage.getLayout = (page) => <Layout >{page}</Layout>
