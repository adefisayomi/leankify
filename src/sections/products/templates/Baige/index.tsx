import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Stack, Button, Grid, Typography, Accordion, AccordionDetails } from '@mui/material';
import MuiAccordionSummary, {
    AccordionSummaryProps,
  } from '@mui/material/AccordionSummary';
import {deepPurple} from '@mui/material/colors'
import { Logo, IconButtonAnimate } from '../../../../components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {ImageGallery} from './ImageGallery'
import SellIcon from '@mui/icons-material/Sell';
import Cart from './Cart';
import Pricing from './Pricing';
import Details from './Details'



const RootStyle = styled("div")(({theme}) => ({
    display: 'flex',
    overflow: 'hidden',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: deepPurple[50],
}))

const ContentStyle = styled("div")(({theme}) => ({
    width: '100%',
    maxWidth: 1200,
    background: 'white',
    padding: theme.spacing(2, 1),
    borderRadius: 10,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4, 3)
    },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={
        <IconButtonAnimate>
          <ChevronRightIcon fontSize='small' />
        </IconButtonAnimate>
    }
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
      marginLeft: theme.spacing(1),
    },
  }));



export default function Baige () {

    const [expanded, setExpanded] = useState<string>('panel1');
    const handleChange = (panel: string) => () => setExpanded(prev => panel)

    return (
        <RootStyle>
            <ContentStyle>
                {/* Header section */}
            <Stack alignItems="center" justifyContent='space-between' direction='row'>
                <Logo small={true}/>
                
                <Stack direction='row' spacing={2} alignItems='center'>
                    <Button variant='outlined'>
                        Contact-Us
                    </Button>
                    <Cart />
                </Stack>
                
            </Stack>

            {/*  */}
            <Grid container mt={5} spacing={3}>
                <Grid item xs={12} md={7}>
                    <ImageGallery />
                </Grid>

                <Grid item xs={12} md={5}>
                    <Stack pb={3}>
                        <Typography variant='h4' sx={{fontWeight: 100}}>
                            Nike <strong style={{color: 'lilac'}}> Lebron </strong> 16 Low
                        </Typography>
                    </Stack>
 
                    <div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <SellIcon fontSize='small' />
                            </AccordionSummary>
                            <AccordionDetails>
                                <Pricing />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography variant='caption' sx={{fontWeight: 600}}>
                                    Extra Details
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Details />
                            </AccordionDetails> 
                        </Accordion>
                    </div>
                </Grid>
            </Grid>
            </ContentStyle>
        </RootStyle>
    )
}