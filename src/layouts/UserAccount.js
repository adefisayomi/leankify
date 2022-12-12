import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { MenuItem, Popover, Avatar, ListItemIcon, Typography, Stack} from '@mui/material';
import { IconButtonAnimate } from '../components/animate';
import { useFirebase, useSettings } from '../hooks';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useRouter } from 'next/router';
import Routes from '../routes';


// ----------------------------------------------------------------------

UserAccount.propTypes = {
  sx: PropTypes.object,
};


export default function UserAccount({ sx }) {

  const {user} = useSettings()

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => setOpen(event.currentTarget);
  const handleClose = () => setOpen(null);

  return (
    <>
    <MenuItem sx={{py: 0.2, px: 1, borderRadius: 20}} onClick={handleOpen}>
      <Stack direction='row' alignItems= 'center'>
        <IconButtonAnimate sx={sx} size= 'small' >
          <Avatar
            src= {user?.photoURL}
            alt= {user?.displayName}
            sx={{ width: 30, height: 30 }}
          />
        </IconButtonAnimate>
        <Typography variant='overline' fontSize={11}>
          {user?.displayName?.split(' ')[0]}
        </Typography>
      </Stack>
    </MenuItem>
      
      

      <Popover
        open={Boolean(open)}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { px: 1, width: '100%', maxWidth: '250px' }
        }}
      >
        <UserListMenu />
      </Popover>
    </>
  );
}






function UserListMenu () {

    const {signOut} = useFirebase()
    const {themeMode, onToggleMode} = useSettings()
    const router = useRouter()

  return (
    <MenuList dense>
        <MenuItem onClick={() => router.push(Routes.dashboard.settings)}>
            <ListItemIcon>
                <ManageAccountsIcon fontSize='medium' />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='caption' fontWeight={500}>
                Manage account
              </Typography>
            </ListItemText>
        </MenuItem>

        <Divider sx= {{py: 1}} />

        <MenuItem onClick= {signOut}>
            <ListItemIcon>
            <LogoutIcon fontSize='medium' />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='caption' fontWeight={500}>
                Logout
              </Typography>
            </ListItemText>
        </MenuItem>

        <Paper variant= 'outlined'>
            <MenuItem onClick= {onToggleMode}>
                <Typography variant='caption' fontWeight={500}>
                  {themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
                </Typography>
            </MenuItem>
        </Paper>
    </MenuList>
  );
}
