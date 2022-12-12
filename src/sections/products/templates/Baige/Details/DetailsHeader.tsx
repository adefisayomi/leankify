import React, {useState} from 'react';
import {Box, Typography, Tab, Tabs} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles'



function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DetailsHeader ({value, setValue, detailsContent}) {

    const theme = useTheme()
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant='scrollable' allowScrollButtonsMobile scrollButtons={false}>
            {
                detailsContent && detailsContent.length > 0 &&
                detailsContent.map((item, index) => (
                    <Tab 
                        {...a11yProps(index)}
                        key={index}
                        label={item.name}
                        sx={{
                            typography: 'body2',
                            fontSize: '13px',
                            borderRadius: 1,
                            px: 1,
                            flex: 1,
                            justifyContent: 'center',
                            '&.Mui-selected': { 
                              fontWeight: 600, 
                              bgcolor: theme.palette.mode === 'light' && theme.palette.grey[200],
                              border: theme.palette.mode === 'dark' && `1px solid ${theme.palette.divider}`,
                            },
                          }}
                    />
                ))
            }
        </Tabs>
      </Box>
    </Box>
  );
}
