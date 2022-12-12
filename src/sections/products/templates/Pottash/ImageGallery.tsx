import { Stack, Divider, Typography, Box, Link, Paper, Button, Grid, MenuItem, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {useTheme} from '@mui/material/styles'
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {IconButtonAnimate} from '../../../../components'




const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80',
  },
  {
    label: 'Bird',
    imgPath:
      'https://media.gettyimages.com/id/1204852047/photo/close-up-of-shoes-against-green-background.jpg?s=612x612&w=gi&k=20&c=WTAZlxP0LxiLHgHFpNOmcrHJvldIQph2kP56Bv1grXU=',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://media.gettyimages.com/id/171224469/photo/canvas-shoes.jpg?s=612x612&w=gi&k=20&c=m8fPMzFutcPz6R6cg5f7lC7T4m-v8RgCmi_FfPhFOzg=',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80',
  },
];

export function ImageGallery () {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    if(activeStep < images.length - 1) {
        return setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    setActiveStep(prevActiveStep => 0);
  };

  const handleBack = () => {
    if (activeStep > 0 ) {
       return setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    setActiveStep(prevActiveStep => images.length - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{
        flexGrow: 1, 
        position: 'relative',
        '&:hover': {
            '#pottash-image-slider-arrow': {
                transition: '0.2s',
                opacity: 1
            }
        }
        }}
    >

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: 1
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <Stack direction='row' alignItems='center' justifyContent='center' spacing={0} mt={1}>
        {images.map((step, index) => (
            <MenuItem key={step.label} onClick={() => setActiveStep(index)} sx={{p: 0.5}}>
            <CircleIcon 
                key={index} 
                sx={{fontSize: 8,color: activeStep === index ? theme.palette.primary.main : 'text.disabled'}}
            />
            </MenuItem>
        ))}
      </Stack>

      <Stack 
        direction='row' 
        alignItems='center' 
        id='pottash-image-slider-arrow'
        justifyContent='space-between'
        sx={{
            margin: 0,
            position: 'absolute',
            top: '50%',
            left: '50%',
            '-ms-transform': 'translate(-50%, -50%)',
            transform: 'translate(-50%, -50%)',
            transition: '0.2s',
            width: '100%',
            opacity: 0
        }}
    >
        <IconButtonAnimate onClick={handleBack}>
            <KeyboardArrowLeftIcon sx={{color: 'text.primary'}} />
        </IconButtonAnimate>

        <IconButtonAnimate onClick={handleNext}>
            <KeyboardArrowRightIcon sx={{color: 'text.primary'}}/>
        </IconButtonAnimate>
      </Stack>
    </Box>
  );
}