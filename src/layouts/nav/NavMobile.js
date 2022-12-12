import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// icons
import menuIcon from '@iconify/icons-carbon/menu';
import chevronRight from '@iconify/icons-carbon/chevron-right';
import chevronDown from '@iconify/icons-carbon/chevron-down';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  List,
  Link,
  Stack,
  Button,
  Drawer,
  Collapse,
  ListItemText,
  ListItemButton,
  Divider,
  MenuItem,
  ListItemIcon,
  Typography,
  Paper,
} from '@mui/material';
// routes
import Routes from '../../routes';
// config
import { DRAWER_WIDTH } from '../../config';
// components
import { Logo, Scrollbar, Iconify, NavSection } from '../../components';
import { IconButtonAnimate } from '../../components/animate';
import MenuIcon from '@mui/icons-material/Menu';
import Aside from '../../sections/Aside';
import { useFirebase, useSettings } from '../../hooks';
import LogoutIcon from '@mui/icons-material/Logout';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import CloseIcon from '@mui/icons-material/Close';


// ----------------------------------------------------------------------

const RootLinkStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  ...theme.typography.body2,
  height: 48,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  ...(active && {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }),
}));

// ----------------------------------------------------------------------

NavMobile.propTypes = {
  navConfig: PropTypes.array.isRequired,
  sx: PropTypes.object,
};

export default function NavMobile({ navConfig, sx }) {
  const { pathname } = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {signOut} = useFirebase()

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const {themeMode, onToggleMode} = useSettings()
  console.log(themeMode)

  return (
    <>
      <IconButtonAnimate color="inherit" onClick={handleDrawerOpen} sx={sx}>
        <MenuIcon />
      </IconButtonAnimate>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: DRAWER_WIDTH },
        }}
      >
        <Stack sx={{ px: 2.5, py: 3, lineHeight: 0 }} direction='row' alignItems='center' justifyContent='space-between'>
          <Logo />

          <IconButtonAnimate onClick= {handleDrawerClose}>
            <CloseIcon />
          </IconButtonAnimate>
        </Stack>
        <Scrollbar>
          <Aside />
          
          <Divider sx= {{py: 1}} />

          <Stack spacing={1} p={1}>
            <MenuItem onClick= {signOut} selected>
                <ListItemIcon>
                <LogoutIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant='button' fontWeight={600}>
                    Logout
                  </Typography>
                </ListItemText>
            </MenuItem>

            <MenuItem onClick= {onToggleMode} selected>
                <ListItemIcon>
                  {themeMode === 'light' ? <ToggleOffIcon/> : <ToggleOnIcon />}
                </ListItemIcon>
                <Typography variant='button' fontWeight={600}>
                  {themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
                </Typography>
            </MenuItem>
          </Stack>
        </Scrollbar>

      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

NavItemMobile.propTypes = {
  item: PropTypes.shape({
    children: PropTypes.array,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
};

function NavItemMobile({ item }) {
  const { pathname } = useRouter();

  const { title, path, children } = item;
  const rootPath = pathname.split('/')[1];
  const isActiveRoot = pathname === path;
  const isActiveRootWithChild = pathname.includes(`/${rootPath}/`);

  const [open, setOpen] = useState(isActiveRootWithChild);

  const handleOpen = () => {
    setOpen(!open);
  };

  if (children) {
    return (
      <>
        <RootLinkStyle onClick={handleOpen} active={isActiveRootWithChild}>
          <ListItemText disableTypography primary={title} />
          <Iconify icon={open ? chevronDown : chevronRight} sx={{ width: 16, height: 16, ml: 1 }} />
        </RootLinkStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
            <NavSection
              navConfig={children}
              sx={{
                // Root
                position: 'relative',
                '&:before': {
                  top: 0,
                  bottom: 0,
                  height: 0.96,
                  my: 'auto',
                  left: 20,
                  width: '1px',
                  content: "''",
                  bgcolor: 'divider',
                  position: 'absolute',
                },
                '& .MuiListSubheader-root': { mb: 1 },
                '& .MuiListItemButton-root': {
                  backgroundColor: 'transparent',
                  '&:before': { display: 'none' },
                },
                // Sub
                '& .MuiCollapse-root': {
                  '& .MuiList-root': {
                    '&:before': {
                      top: 0,
                      bottom: 0,
                      left: 40,
                      my: 'auto',
                      height: 0.82,
                      width: '1px',
                      content: "''",
                      bgcolor: 'divider',
                      position: 'absolute',
                    },
                  },
                  '& .MuiListItemButton-root': {
                    pl: 8,
                    '& .MuiListItemIcon-root, .MuiTouchRipple-root': {
                      display: 'none',
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  },
                },
              }}
            />
          </Box>
        </Collapse>
      </>
    );
  }

  if (title === 'Documentation') {
    return (
      <Link href={path} underline="none" target="_blank" rel="noopener">
        <RootLinkStyle>
          <ListItemText disableTypography primary={title} />
        </RootLinkStyle>
      </Link>
    );
  }

  return (
    <NextLink key={title} href={path} passHref>
      <RootLinkStyle active={isActiveRoot}>
        <ListItemText disableTypography primary={title} />
      </RootLinkStyle>
    </NextLink>
  );
}
