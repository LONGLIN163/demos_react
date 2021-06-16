import Link from "next/link";

const PageB = () => {
    return ( 
        <div>
            <h2>PageB here</h2>
            <div><Link href="/"><a>Go to Home</a></Link></div>
        </div>
     );
}
 
export default PageB;