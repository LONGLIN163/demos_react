import MyHeader from "../public/MyHeader";
import { Button } from 'antd';

const Header = () => {
        return ( 
        <div>
            <MyHeader />
            <h1><Button>header</Button></h1>
        </div>
     );
}
 
export default Header;