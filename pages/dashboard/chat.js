import Layout from '../../src/layouts'
import {Page} from '../../src/components'


export default function Chat () {

    return (
        <Page title= 'Chat '>
            hello chat
        </Page>
    )
}


Chat.getLayout = (page) => <Layout>{page}</Layout>