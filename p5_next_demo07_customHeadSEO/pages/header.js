import Head from "next/head"
import MyHeader from "../public/MyHeader";
const Header = () => {
        return ( 
        <div>
            {/* method1: set header for every page */}
            {/* <Head>
                <title>haha</title>    
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />  
            </Head> */}
            <MyHeader />
            <h1>header</h1>
        </div>
     );
}
 
export default Header;