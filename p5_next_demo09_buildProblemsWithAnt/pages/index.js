import Link from 'next/link'
import Router from 'next/router'


const Home = () => {

  Router.events.on('routeChangeStart',(...args)=>{
      console.log("routeChangeStart--->args--->",...args)
  })
  Router.events.on('routeChangeComplete',(...args)=>{
      console.log("routeChangeComplete--->args--->",...args)
  })
  Router.events.on('beforeHistoryChange',(...args)=>{
      console.log("beforeHistoryChange--->args--->",...args)
  })

  Router.events.on('routeChangeError',(...args)=>{
    console.log("routeChangeError--404 not judged here, only logic error here->args--->",...args)
  })

  Router.events.on('hashChangeStart',(...args)=>{
    console.log('hashChangeStart->hash switch start:',...args)
  })

  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('hashChangeComplete->complete hash switch:',...args)
  })



  const goto = () => {
    Router.push({
      pathname:"/Pages",
      query:{name:"PageA"}
    })
  }
   
  return  (
      <>
        <div>Home</div>
        <div>
          <Link href={{pathname:"/Pages",query:{name:"PageA"}}}><a>Go to PageA</a></Link>
          <br />
          <Link href={{pathname:"/Pages",query:{name:"PageB"}}}><a>Go to PageB</a></Link>
        </div>
        <br />
        <div>
          <button onClick={goto}>Go to </button>
        </div>
        <br />
        <div>
            <Link href="#haha"><a>haha</a></Link>
        </div>
      </>
    )
}
export default Home;