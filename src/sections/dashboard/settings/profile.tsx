import {Stack, Typography, Grid, Paper, Divider, Box, Avatar, TextField, Button, Switch, FormControlLabel,FormGroup} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import {grey, green} from '@mui/material/colors'
import { LoadingButton } from '@mui/lab';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {GetSingleImage} from '../../../hooks/useImages'
import {useSettings, useResponsive, useAlert} from '../../../hooks'
import {useState} from 'react'
import {Label} from '../../../components'
import { useRouter } from 'next/router';
import ProfileForm from './ProfileForm'


export default function Profile () {

    const {setAlert} = useAlert()
    const {user} = useSettings()


    const [logo, setLogo] = useState(null)
    const getLogo = async (e) => {
        let img = await GetSingleImage(e)
        if (!img.success) {
            return setAlert(img?.message, 'error')
        } 
        setLogo(URL.createObjectURL(img.data))
    }


    return (
        <Grid spacing= {4} container>
            <Grid
                item xs= {12} md= {4}>
                <Paper variant= 'outlined' sx= {{p: 2}}>
                    <Stack
                        spacing={3}
                    >
                        <Box alignSelf='flex-end'>
                            <Label color='success'  >Active</Label>
                        </Box>
                        
                        <Box
                            component='span'
                            alignSelf='center'
                            sx= {{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                border: `1px dashed ${grey[400]}`,
                                borderRadius: '50%',
                                width: 155,
                                height: 155,
                                cursor: 'pointer',
                                marginBottom: 2
                            }}
                        >
                            <Avatar
                                src={logo || ''}
                                alt='Logo'
                                sx={{ width: 130, height: 130}}
                            />
                            <Box
                                component= 'label'
                                htmlFor='user_image'
                                sx= {{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    width: 130,
                                    height: 130,
                                    borderRadius: '100%',
                                    backgroundColor: 'black',
                                    opacity: 0,
                                    cursor: 'pointer',
                                    '&:hover': {
                                        opacity: 0.5, 
                                    }
                                }}
                            >
                                <input 
                                    style= {{width: '100%', height: '100%', position: 'absolute', borderRadius: '50%', opacity: 0, cursor: 'pointer'}}
                                    type="file" name="company_logo" id="company_logo"
                                    onChange= {getLogo}
                                />
                                <AddAPhotoIcon sx= {{color: 'white'}} />
                                <Typography variant='button' sx= {{textAlign: 'center', color: 'white', fontSize: '11px'}}>
                                    {logo ? 'Change logo' : 'Upload a logo'}
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant='body3' sx= {{textAlign: 'center', color: '#808080', fontSize: '11px'}}>
                        Allowed *.jpeg, *.jpg, *.png, *.gif
                        <br/>
                            max size of 3 MB
                        </Typography>


                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Typography variant='body2'>
                                Email verified
                            </Typography>
                            <FormGroup color='green'>
                                <FormControlLabel control={<Switch defaultChecked />} label= 'verified' />
                            </FormGroup>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>

            {/* Profile informations */}
            <Grid
                item xs= {12} md= {8}>
                <Paper variant= 'outlined' sx= {{p: 2}}>
                    <ProfileForm />
                </Paper>
            </Grid>
        </Grid>
    )
}