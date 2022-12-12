import {Stack, Typography, Button, Dialog, DialogActions, DialogContent,DialogTitle,Slide, DialogContentText} from '@mui/material'
import { IconButtonAnimate } from '../../../../../components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, {useState} from 'react';
import { TransitionProps } from '@mui/material/transitions';



export default function Size () {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true)

    return (
        <Stack spacing={.5}>
            <Stack direction='row' alignItems='center' spacing={3}>
                <Typography variant='caption'>
                    Size guide
                </Typography>
                <IconButtonAnimate onClick={handleClickOpen}>
                    <ArrowForwardIcon fontSize='small' />
                </IconButtonAnimate>
                <SizeGuide open={open} setOpen={setOpen} />
            </Stack>
            {/* <ProductSize /> */}
        </Stack>
    )
}





// 
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SizeGuide ({open, setOpen}) {
  
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
            <Typography variant='button'>
                Us Size Guide
            </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <embed src="https://shop.alz.org/App_Themes/ALZ_Public_Responsive/docs/SizeChart.pdf" type="text/pdf" width='100%' height='100%' />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}