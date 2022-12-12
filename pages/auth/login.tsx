import { styled } from '@mui/material/styles';
import { Stack, Divider, Typography, Box, Link, Paper } from '@mui/material';
import { blue } from '@mui/material/colors';
// components
import { Page,Logo} from '../../src/components';
// sections
import { AuthWithSocial, LoginForm } from '../../src/sections/auth';
import NextLink from 'next/link';
import { useFirebase, useSettings, useResponsive } from '../../src/hooks';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Routes from '../../src/routes';
import {purple, deepPurple} from '@mui/material/colors'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: deepPurple[50],
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

export default function Login() {

  const {user} = useSettings()
  const router = useRouter()
  const redirect = () => user && router.push('/')
  const isDesktop = useResponsive('up', 'md');

  useEffect(() => {
    redirect()
  }, [user, router])

  return (
    <Page title="Login">
      <RootStyle>
        <ContentStyle>
          <Box sx={{width: '100%', mb: isDesktop ? 5 : 3}}>
            <Logo small={true} />
          </Box>

          <Stack
            sx={{ pb: isDesktop ? 4 : 3}}
            justifyContent= 'space-between'
            alignItems='center'
            direction= 'row'
          >
            <Typography variant='button' sx={{ color: !isDesktop && 'text.disabled' }} fontSize={14}>
              Welcome back - 
            </Typography>

            {isDesktop &&
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              {"Don't have an account?  "}
              <NextLink href={Routes.signup} passHref>
              <Link sx={{color: 'black'}} fontWeight={600}>
                Signup
              </Link>
            </NextLink>
            </Typography>}

          </Stack>
         <AuthWithSocial type='login' />

          <Divider sx={{ py: 1 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              OR
            </Typography>
          </Divider>

          <LoginForm />

          {!isDesktop &&
          <Stack alignItems='center' mt={2} >
            <Typography variant="caption" sx={{ color: 'text.disabled'}}>
              {"Don't have an account?  "}
              <NextLink href={Routes.signup} passHref>
              <Link sx={{color: 'black'}} fontWeight={600}>
                Signup
              </Link>
            </NextLink>
            </Typography>
          </Stack>
            }
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}