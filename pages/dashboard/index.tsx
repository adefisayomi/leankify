import { Page } from "../../src/components"
import Layout from "../../src/layouts"
import Routes from "../../src/routes"


export default function Dashboard () {

    return (
        <Page>
            hello there
        </Page>
    )
}

export async function getServerSideProps () {

    return ({
        redirect: {
            destination: Routes.dashboard.settings,
            permanent: false
        }
    })
}

Dashboard.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>