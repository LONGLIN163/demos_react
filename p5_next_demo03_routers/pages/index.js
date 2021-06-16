import Link from 'next/link'
import Router from 'next/router'

// const Home = () => (
//   <>
//     <div>Home</div>
//     <div><Link href="/PageA"><a>Go to PageA</a></Link></div>
//     <div><Link href="/PageB"><a>Go to PageB</a></Link></div>
//     <br />
//     <div>
//       <button onClick={()=>{Router.push('/PageA ')}}>Go to PageA</button>
//     </div>

//   </>
// )

const Home = () =>{
  //  const goto = (a) => {
  //    //console.log(somewhere)
  //    //Router.push('/'+somewhere)
  //    Router.push('/PageA')
  //  }

  function goto(){
    Router.push('/PageA')
  }
     
   return  (
      <>
        <div>Home</div>
        <div><Link href="/PageA"><a>Go to PageA</a></Link></div>
        <div><Link href="/PageB"><a>Go to PageB</a></Link></div>
        <br />
        <div>
          <button onClick={goto}>Go to PageA</button>
        </div>

      </>
    )
} 
  
 
export default Home;