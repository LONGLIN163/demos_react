import Link from "next/link";
import { withRouter } from "next/router";


const Pages = ({router}) => { // when we have withRouter, we can use router to receive queryString
    console.log(router)
    return ( 
        <div>
            <h2>{router.query.name} here</h2>
            <div><Link href="/"><a>Go to Home</a></Link></div>
        </div>
     );
}
 
export default withRouter(Pages);// samilar as connect