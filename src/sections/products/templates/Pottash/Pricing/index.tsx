import {Stack, Button, Typography} from '@mui/material'
import { AddButton } from './AddButton';
import ColorPalette from './ColorPalette';
import Size from './Size';



export default function Pricing () {

    return (
        <Stack spacing={3}>
            {/* <Size /> */}
            <ColorPalette />
            <AddButton />
        </Stack>
    )
}