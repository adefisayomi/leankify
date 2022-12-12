import {Box, Button, Paper, Typography, Stack, Divider} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButtonAnimate } from '../../../../../components';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


export const AddButton = () => {
    
  return (
    <Stack
        direction='row'
        spacing={1}
        alignItems='center'
    >
        <Button variant='contained' startIcon={<AddShoppingCartIcon fontSize='small' />} sx={{p: 1.5}}>
            Add to cart
        </Button>
        <Paper>
            <Stack direction='row' alignItems='center' spacing={1}>
                <IconButtonAnimate>
                    <ExpandCircleDownIcon />
                </IconButtonAnimate>
                <Typography variant='h6'>
                    <Typography variant='overline'>
                        1 {"  "} / {"  "}
                    </Typography>
                    $250:00
                </Typography>
                <IconButtonAnimate>
                    <ExpandCircleDownIcon sx={{transform: 'rotate(180deg)'}} />
                </IconButtonAnimate>
            </Stack>
        </Paper>
    </Stack>
  );
}
