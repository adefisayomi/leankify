import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles'
import DescriptionIcon from '@mui/icons-material/Description';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DetailsHeader from './DetailsHeader'
import Reviews from './Reviews'
import Description from './Description'


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ overflowX: 'hidden' }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Details () {
    const theme = useTheme()
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index: number) => {
      setValue(index);
    };

//
  return (
    <Box sx={{ width: '100%' }}>
      <DetailsHeader 
        detailsContent={detailsContent}
        value={value}
        setValue={setValue}
      />

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Description />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Reviews />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}



const detailsContent = [
    {name: 'description', icon: <DescriptionIcon fontSize= 'small' />},
    {name: 'reviews', icon: <ReviewsIcon fontSize='small' />},
    {name: "shipping", icon: <LocalShippingIcon fontSize='small' />},
  ]
