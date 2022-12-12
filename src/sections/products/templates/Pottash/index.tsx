import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Stack, Button, Grid, Typography, Accordion, AccordionDetails, Box, Link } from '@mui/material';
import MuiAccordionSummary, {
    AccordionSummaryProps,
  } from '@mui/material/AccordionSummary';
import {deepPurple} from '@mui/material/colors'
import { Logo, IconButtonAnimate } from '../../../../components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {ImageGallery} from './ImageGallery'
import SellIcon from '@mui/icons-material/Sell';
import Pricing from './Pricing';



const RootStyle = styled("div")(({theme}) => ({
    display: 'flex',
    overflowX: 'hidden',
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



export default function Pottash () {

    const [expanded, setExpanded] = useState<string>('panel1');
    const handleChange = (panel: string) => () => setExpanded(prev => panel)

    return (
        <RootStyle>
            <ContentStyle>
                {/* Header section */}
            <Stack alignItems="center" justifyContent='space-between' direction='row' mb={5}>
                <Logo small={true}/>
                
                <Stack direction='row' spacing={2} alignItems='center'>
                    <Button variant='outlined'>
                        Contact-Us
                    </Button>
                </Stack>
                
            </Stack>

           <Grid container spacing={3}>
                <Grid item xs={12} md={7.5}>
                    <ImageGallery />
                </Grid>

                <Grid item xs={12} md={4.5}>
                    <Box alignItems='center' display='flex' flexDirection='column'>
                    <Stack pb={3} alignItems='center' spacing={1.5}>
                        <Typography variant='button'>
                            Shoes
                        </Typography>

                        <Typography variant='h3' textAlign='center'>
                            Air Jordan Flyer
                        </Typography>

                        <Typography variant='h3' textAlign='center' color='text.disabled'>
                            <Link underline='always' href='#'>
                            $250:32
                            </Link>
                        </Typography>
                    </Stack>
 
                    {/* <div>
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
                    </div> */}
                        <Pricing />
                    </Box>
                </Grid>
           </Grid>
            </ContentStyle>
        </RootStyle>
    )
}