import MyHeader from "../public/MyHeader";
import { Button } from 'antd';

const Header = () => {
        return ( 
        <div>
            {/* method1: set header for every page */}
            {/* <Head>
                <title>haha</title>    
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />  
            </Head> */}
            <MyHeader />
            <h1><Button>header</Button></h1>
        </div>
     );
}
 
export default Header;