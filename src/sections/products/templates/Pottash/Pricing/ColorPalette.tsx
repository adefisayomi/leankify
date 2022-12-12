import { IconButtonAnimate } from "../../../../../components"
import {Stack, Paper, Box,Typography} from '@mui/material'
import {blue, red, green, orange, purple, grey} from '@mui/material/colors'
import { useState } from "react"




export default function ColorPalette ({sx}) {


    const [activeColor, setActiveColor] = useState('')

    const handleClick= (color, index) => {
        setActiveColor(index)
    }


    return (
        <Box alignItems='center' display='flex' flexDirection='column'>
        <Typography variant='body2' fontWeight={600}>
            Pick your Color
        </Typography>
        <Stack 
            direction= 'row' 
            flexWrap='wrap'
            spacing= {.5} alignItems= 'center' justifyContent={'flex-start'} 
            sx= {{...sx,py: .5}}
        >
        {colorPalets.map((color, index) => (
          <IconButtonAnimate key= {index} size= 'small' onClick= {() => handleClick(color, index)}>
            <Paper
                variant= 'elevation'
                elevation= {5}
                sx= {{
                    borderRadius: '50%',
                    height: 28,
                    width: 28,
                    bgcolor: color && color[600],
                    border: !color && '2px solid grey',
                    '&:hover': {
                        opacity: 0.6
                    }
                }}
            />
            {
                 activeColor === index &&
                <Box 
                sx= {{
                    background: 'none',
                    border: `2px solid ${color[200]}`,
                    borderRadius: '100%', 
                    height: 40,
                    width: 40,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />}
          </IconButtonAnimate>
        ))}
        </Stack>
        </Box>
    )
}
const colorPalets = ['', blue, red, grey, purple]