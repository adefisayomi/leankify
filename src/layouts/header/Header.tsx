import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Button, Container } from '@mui/material';
// hooks
import { useOffSetTop, useResponsive, useSettings } from '../../hooks';
// routes
import Routes from '../../routes';
// config
import { HEADER_DESKTOP_HEIGHT } from '../../config';
import Searchbar from '../Searchbar';
import UserAccount from '../UserAccount'
import { NavMobile, NavDesktop, navConfig } from '../nav';
import { ToolbarStyle } from './HeaderToolbarStyle';
import Notification from '../Notification'

// ----------------------------------------------------------------------

type PropsHeader = {
  transparent: boolean,
};

export default function Header({ transparent, ...others }: PropsHeader) {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';
  const {user} = useSettings()

  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);

  return (
      <ToolbarStyle disableGutters transparent={transparent} scrolling={isScrolling}>
        <Container
          maxWidth= {false}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >

          <Box sx={{ flexGrow: 1 }} />

          <Stack spacing={2} direction="row" alignItems="center">
            {/* <Searchbar
              sx={{
                ...(isScrolling && { color: 'text.primary' }),
              }}
            /> */}

            <Notification />

            { isDesktop ? (
              <Stack direction="row" spacing={1}>
                {
                user ? 
                  <UserAccount /> :
                  <NextLink href={Routes.login} prefetch={false} passHref>
                    <Button
                      color="inherit"
                      variant="contained"
                    >
                      Login
                    </Button>
                </NextLink>
                }
              </Stack>
            ) : 
              <NavMobile
                navConfig={navConfig}
                sx={{
                  ml: 1,
                  ...(isScrolling && { color: 'text.primary' }),
                }}
              />
            }
          </Stack>

        </Container>
      </ToolbarStyle>

  );
}
