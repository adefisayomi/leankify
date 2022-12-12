import { Stack, Divider, Typography, Box, Link, Paper, Button, Grid, MenuItem, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {useTheme} from '@mui/material/styles'




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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{flexGrow: 1 }}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={4000}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 400,
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

      <Stack direction='row' alignItems='center' justifyContent='center' spacing={1} mt={5}>
        {images.map((step, index) => (
          <MenuItem key={step.label} sx={{p: .5, border: activeStep === index && `2px solid ${theme.palette.primary.main}`}}>
              <Avatar
                src={step.imgPath}
                alt={step.label}
                variant='rounded'
                sx={{width: 50, height: 50, cursor: 'pointer'}}
                onClick={() => setActiveStep(index)}
              />
          </MenuItem>
        ))}
      </Stack>
    </Box>
  );
}