import Layout from '../src/layouts';
import { Page } from '../src/components';

// ----------------------------------------------------------------------

export default function Home() {

  return (
    <Page title="">
      <div>This is home</div>

    </Page>
  );
}

// ----------------------------------------------------------------------

Home.getLayout = (page) => <Layout simpleFooter>{page}</Layout>;
