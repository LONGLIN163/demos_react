import Link from 'next/link'
import Router from 'next/router'

/* const Home = () => (
  <>
    <div>Home</div>
    <div>
      <Link href="/Pages?name=PageA"><a>Go to PageA</a></Link>
      <br />
      <Link href="/Pages?name=PageB"><a>Go to PageB</a></Link>
    </div>
  </>
) */

const Home = () => {

  const goto = () => {
    Router.push({
      pathname:"/Pages",
      query:{name:"PageA"}
    })
  }
   
  return  (
      <>
        <div>Home</div>
        {/* <div>
          <Link href="/Pages?name=PageA"><a>Go to PageA</a></Link>
          <br />
          <Link href="/Pages?name=PageB"><a>Go to PageB</a></Link>
        </div> */}
        <div>
          <Link href={{pathname:"/Pages",query:{name:"PageA"}}}><a>Go to PageA</a></Link>
          <br />
          <Link href={{pathname:"/Pages",query:{name:"PageB"}}}><a>Go to PageB</a></Link>
        </div>
        <br />
        <div>
          <button onClick={goto}>Go to </button>
        </div>
      </>
    )
}
export default Home;