import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
// @mui
import { MenuItem, Box, Popover, Badge, Typography, Stack, Avatar, Backdrop , Paper, Divider, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconButtonAnimate, Scrollbar } from '../../../../../components';
import { useResponsive } from '../../../../../hooks';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: 'English',
    value: 'en',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/flags/ic_flag_en.svg',
  },
  {
    label: 'German',
    value: 'de',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/flags/ic_flag_de.svg',
  },
  {
    label: 'French',
    value: 'fr',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/flags/ic_flag_fr.svg',
  },
];

// ----------------------------------------------------------------------

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
    fontSize: 11
  },
}));

export default function Cart ({ sx }) {

  const [currentLang, setCurrentLang] = useState('en');
  const isDesktop = useResponsive("up", "md")

  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeLang = (newLang) => {
    handleClose();
    setCurrentLang(newLang);
  };

  return (
    <>
      
        <IconButtonAnimate color="inherit" onClick={handleOpen} sx={sx} >
          <StyledBadge color="primary" badgeContent={2} showZero>
            <ShoppingCartIcon fontSize= 'small' />
          </StyledBadge >
        </IconButtonAnimate>
      
    
        <Popover
          open={Boolean(open)}
          onClose={handleClose}
          anchorEl={open}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: { p: 1, width: '100%', maxWidth: '300px' },
          }}
        >
       
       <Stack direction='row' alignItems= 'center' justifyContent='space-between' pb={3}>
          <Box >
            <Typography variant='h6'>
              {"Spencer's"}
            </Typography>
            <Typography variant='caption' color='text.disabled'>
              2 items
            </Typography>
          </Box>

          <Box sx={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h6'>
              $234:00
            </Typography>
            <Typography variant='caption' color='text.disabled'>
              subtotal
            </Typography>
          </Box>
       </Stack>

       <Scrollbar sx={{maxHeight: 450, pb: 5, pt: 2}}>
        <Stack spacing= {2} divider={<Divider flexItem />}>
          {
            images && images.length > 0 &&
            images.map((image, index) => (
              <CartItem image={image} key={index} />
            ))
          }
        </Stack>
       </Scrollbar>

       <Button fullWidth variant='contained' sx={{p: 1.5}}>
          Checkout
       </Button>
      </Popover>
   
    </>
  );
}

export const CartItem = ({image}) => {

  const {imgPath, label} = image

  return (
    <Stack direction='row' spacing={1.5}>
      <Avatar 
        src={imgPath}
        alt={label}
        sx={{width: 80, height: 110, objectFit: 'cover'}}
        variant='rounded'
      />

      <Stack justifyContent='space-between' >
        <Box>
          <Typography variant='body2'>
            {label}
          </Typography>
          <Typography variant='caption'>
            {"$34:00"}
          </Typography>
        </Box>

        <Paper>
            <Stack direction='row' alignItems='center' spacing={1}>
                <IconButtonAnimate size='small'>
                    <ExpandMoreIcon fontSize='small' />
                </IconButtonAnimate>
                <Typography variant='caption'>
                    <Typography variant='overline'>
                        1 {"  "} / {"  "}
                    </Typography>
                    $250:00
                </Typography>
                <IconButtonAnimate size='small'>
                  <ExpandLessIcon fontSize='small' />
                </IconButtonAnimate>
            </Stack>
        </Paper>
        
      </Stack>
    </Stack>
  )
}



const images = [
  {
    label: 'San Francisco',
    imgPath:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80',
  },
  {
    label: 'Bird',
    imgPath:
      'https://media.gettyimages.com/id/1204852047/photo/close-up-of-shoes-against-green-background.jpg?s=612x612&w=gi&k=20&c=WTAZlxP0LxiLHgHFpNOmcrHJvldIQph2kP56Bv1grXU=',
  },
  {
    label: 'Indonesia',
    imgPath:
      'https://media.gettyimages.com/id/171224469/photo/canvas-shoes.jpg?s=612x612&w=gi&k=20&c=m8fPMzFutcPz6R6cg5f7lC7T4m-v8RgCmi_FfPhFOzg=',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80',
  },
];