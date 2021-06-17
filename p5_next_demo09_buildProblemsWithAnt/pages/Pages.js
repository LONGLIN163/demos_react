import Link from "next/link";
import { withRouter } from "next/router";
import axios from 'axios'



const Pages = ({router,list}) => { // when we have withRouter, we can use router to receive queryString
    //console.log(router)
    return ( 
        <div>
            <h2>{list}</h2>
            <h2>{router.query.name} here</h2>
            <div><Link href="/"><a>Go to Home</a></Link></div>
        </div>
     );
}

Pages.getInitialProps=async()=>{
    const promise=new Promise((resolve)=>{
        axios.get("https://mocki.io/v1/049f7f55-5058-482f-ab80-cdb5f1ea21eb").then(
            (res)=>{
                console.log(res)
                resolve(res.data.data)
            }
        )
    })
    return await promise;
}
 
export default withRouter(Pages);// samilar as connect