import Head from 'next/head';
import React, { forwardRef, Ref } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------
type PropsPage = {
  children: JSX.Element,
  meta?: React.ReactNode,
  title: string,
};

const Page = forwardRef(({ children, meta, title, ...other }: PropsPage, ref: Ref) => (
  <>
    <Head>
      <title>{ title ? `${title} | Leankify` : 'Leankify' }</title>
      {meta}
    </Head>

    <Box ref={ref} {...other} >
      {children}
    </Box>
  </>
));

Page.displayName = 'Page'
export default Page;
