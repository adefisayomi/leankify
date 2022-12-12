import PropTypes from 'prop-types';
// icons
import chevronRight from '@iconify/icons-carbon/chevron-right';
// next
import NextLink from 'next/link';
// @mui
import { Box, Link, Typography, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
//
import Iconify from './Iconify';
import { useRouter } from 'next/router'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ----------------------------------------------------------------------

type PropsBreadcrumbs2 = {
  activeLast?: boolean,
  onDark?: boolean,
};

export default function Breadcrumbs2({ activeLast = false, onDark = false, ...other }: PropsBreadcrumbs2) {

  const router = useRouter()
  const links = router.route.split('/')
  const currentLink = links[links.length - 1];

  const listDefault = links.map((link, index) => <LinkItem key={index} id={index} link={link} onDark={onDark} />);

  const listActiveLast = links.map((link, index) => (
    <div key={index}>
      {link !== currentLink ? (
        <LinkItem link={link} onDark={onDark} key={index} id={index} />
      ) : (
        <Typography
          noWrap
          variant="caption"
            sx={{
            display: 'flex',
            textTransform: 'capitalize',
            alignItems: 'center',
            color: 'text.disabled',
            '& > div': { display: 'inherit' },
            ...(onDark && {
                opacity: 0.48,
                color: 'common.white',
                alignItems: 'center'
              }),
            }}
        >
          {currentLink || ''}
        </Typography>
      )}
    </div>
  ));

  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      separator={
        <FiberManualRecordIcon
          sx={{
            width: 11,
            height: 11,
            ...(onDark && {
              opacity: 0.48,
              color: 'common.white',
            }),
          }}
        />
      }
      {...other}
    >
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  );
}

// ----------------------------------------------------------------------

function LinkItem({ link, onDark, key, id }) {

    const router = useRouter()
    const path = router.route.split('/').slice(0, id+1).join('/')

  return (
    <NextLink key={key} href={path} passHref>
      <Link
        variant="caption"
        sx={{
          display: 'flex',
          fontWeight: 500,
          textTransform: 'capitalize',
          alignItems: 'center',
          color: 'text.primary',
          '& > div': { display: 'inherit' },
          ...(onDark && {
            color: 'common.white',
          }),
        }}
      >
        {link}
      </Link>
    </NextLink>
  );
}
