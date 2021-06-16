import Link from "next/link";

const PageA = () => {
    return ( 
        <div>
            <h2>PageA here</h2>
            <div><Link href="/"><a>Go to Home</a></Link></div>
        </div>
     );
}
 
export default PageA;