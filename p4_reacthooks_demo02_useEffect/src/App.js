import React, { useState,useEffect } from 'react';

// ***use hooks***
function App(){
    const [count, setCount]=useState(0);

    useEffect(()=>{
        console.log(`useEffect=>you clicked ${count} times`)
    })
 
    return(
        <div>
            <p>click {count} times</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>add</button>
        </div>
    )
}
 
export default App;

// ***use class***
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             count:0
//         }
//         this.add=this.add.bind(this)
//     }

//     add(){
//       this.setState({
//         count:this.state.count+1
//       })
//     } 


//     render() { 
//         return ( 
//             <div>
//                 <p>click {this.state.count} times</p>
//                 <button onClick={this.add}>add</button>
//             </div>
//          );
//     }
//}