import {Box, Button, Paper, Typography, Stack, Divider} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButtonAnimate } from '../../../../../components';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {useTheme} from '@mui/material/styles'

export const AddButton = () => {

    const theme = useTheme()
    
  return (
    <Stack
        direction='row'
        spacing={2}
        alignItems='center'
    >
        
        <Paper>
            <Stack direction='row' alignItems='center' spacing={1}>
                <IconButtonAnimate>
                    <RemoveIcon fontSize='small' />
                </IconButtonAnimate>
                <Typography variant='button'>
                    <Typography variant='overline'>
                        1 {"  "} / {"  "}
                    </Typography>
                    $250:00
                </Typography>
                <IconButtonAnimate>
                    <AddIcon fontSize='small' sx={{color: theme.palette.primary.main}}/>
                </IconButtonAnimate>
            </Stack>
        </Paper>

        <Button 
            variant='contained' 
            startIcon={<AddShoppingCartIcon fontSize='small' />} 
            sx={{p: 1.5, borderRadius: 20,px: 3}}
        >
            Add to cart
        </Button>
    </Stack>
  );
}
