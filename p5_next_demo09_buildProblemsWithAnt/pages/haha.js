import React,{useState} from 'react';


function Haha(){

    const [color,setColor]=useState("blue")

    const changeColor=()=>{
         setColor(color=="blue"?"red":"blue")
    }

    return (
        <>
            <div>haha page</div>
            <div><button onClick={changeColor}>click change color</button></div>

            <style jsx>
                {`
                  div {
                      color:${color}
                  }
                `}
            </style>
        </>
    )
}
export default Haha

// function Haha(){
//     return (
//         <>
//             <div>haha page</div>
//             <div className="haha">haha page</div>

//             <style jsx>
//                 {`
//                     div { color:blue;}
//                     .haha {color:red;}
//                 `}
//             </style>
//         </>
//     )
// }