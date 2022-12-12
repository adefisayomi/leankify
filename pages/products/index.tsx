import { useRouter } from "next/router";
import { Page } from "../../src/components";
import { Baige, Pottash } from "../../src/sections/products";


export default function Products () {

    const router = useRouter()
    const type = router.query.theme
    return (
        <Page title='Products'>
           {
              type === 'beige' ? <Baige /> : type === 'pottash' ? <Pottash /> : <Baige />
           }
        </Page>
    )
}