import {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import {Typography, Box, Avatar,Stack, Rating, AppBar} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useResponsive } from '../../../../../hooks';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SwipeableViews from 'react-swipeable-views';
import { IconButtonAnimate, Scrollbar } from '../../../../../components';




export default function Reviews () {

    return (
        <Stack
            alignItems='center'
            spacing={1.5}
            sx={{
                pt: 3, px: 2,
                position: 'relative',
            }}
        >
             <Typography variant='body2' sx={{fontWeight: 600}}>
                it was a great buy, will order again
            </Typography>

            <Stack
               direction='row'
               spacing={1}
               alignItems='center'
            >
                <Rating name="read-only" value={3.5} precision={0.5} size='small' readOnly />
                <Typography variant='caption' sx={{color: 'text.disabled'}}>
                    3 hours ago
                </Typography>
            </Stack>

            <Typography variant='caption'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id saepe quasi nihil sunt delectus ut harum recusandae aspernatur rerum adipisicing elit. Sed id saepe quasi nihil sunt delectus ut harum recusandae aspernatur rerum.
            </Typography>

            <Stack direction= 'row' alignItems='center' justifyContent='space-between' width='100%'>
            <IconButtonAnimate size='small'>
                <ArrowBackIosIcon fontSize='small' />
            </IconButtonAnimate>
            
            <Stack direction='row' spacing={1}>
               <Avatar
                    alt='review'
                    src={'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis='}
                    sx={{width: 40, height: 40}}
                /> 
                <Stack>
                    <Typography variant='caption' fontWeight={600}>
                        Dolapo Akindola
                    </Typography>
                    <Typography variant='caption' sx={{color: 'text.disabled', fontSize: 10}}>
                        Lagos
                    </Typography>
                </Stack>
            </Stack>

            <IconButtonAnimate size='small'>
                <ArrowForwardIosIcon fontSize='small'  />
            </IconButtonAnimate>
            </Stack>
            
        </Stack>
    )
  }