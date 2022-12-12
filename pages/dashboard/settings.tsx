import { Page } from "../../src/components";
import Layout from "../../src/layouts";
import {Typography, Stack, Divider, Paper, Grid} from '@mui/material'
import {styled,useTheme} from '@mui/material/styles'
import Profile from "../../src/sections/dashboard/settings/profile";
import { Breadcrumbs2 } from '../../src/components'





const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      overflow: 'hidden',
      minHeight: '100vh',
      width: '100%',
      alignItems: 'flex-start',
      flexDirection: 'column',
      padding: theme.spacing(1, 2)
    },
  }));
  

export default function Settings () {

    const theme = useTheme()
   
    

    return (
        <Page title='Account setting'>
            <RootStyle>
                <Stack spacing= {2} width='100%' mb={5}>
                    <Typography variant='button' fontSize={16}>
                        General settings
                    </Typography>

                    <Breadcrumbs2 />
                </Stack>
                <Profile />
            </RootStyle>
        </Page>
    )
}

Settings.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>