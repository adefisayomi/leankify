import PropTypes from 'prop-types';
import {useResponsive} from '../hooks'
import {Grid, Divider} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import Aside from '../sections/Aside'
import {Logo} from '../components'
import { ToolbarStyle } from './header/HeaderToolbarStyle';
// next
import dynamic from 'next/dynamic';
import { Scrollbar } from '../components';
//
const Header = dynamic(() => import('./header/Header'), { ssr: false });
const HeaderSimple = dynamic(() => import('./header/HeaderSimple'), { ssr: false });

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node,
  disabledFooter: PropTypes.bool,
  disabledHeader: PropTypes.bool,
  simpleFooter: PropTypes.bool,
  simpleHeader: PropTypes.bool,
  transparentHeader: PropTypes.bool,
  hideSideBar: PropTypes.bool,
};

export default function Layout({
  children,
  transparentHeader,
  disabledHeader,
  simpleHeader= false,
  hideSideBar= false
}) {

  const isDesktop = useResponsive('up', 'md');
  const theme = useTheme()

  return (
    <>
    <Grid container spacing={2} divider={<Divider orientation='vertical' flexItem />}>
        {isDesktop && 
        <Grid
            item
            xs={12}
            md={2}
            sx= {{
              position: 'sticky',
              top: 0,
              left: 0,
              height: '100vh',
              maxHeight: '100vh',
              overflow: 'hidden',
              borderRight: `solid 1px ${theme.palette.divider}`,
            }}
          >
            <ToolbarStyle sx={{border: 'none'}}>
                <Logo />

                
            </ToolbarStyle>

            <Scrollbar>
                <Aside />
            </Scrollbar>
          </Grid>
        }

        <Grid
          item
          xs={12}
          md={10}
        >
          <>
            {disabledHeader ? null : simpleHeader ? <HeaderSimple /> : <Header transparent={transparentHeader} />}
            {children}
          </>
        </Grid>
    </Grid>
  </>
  );
}
