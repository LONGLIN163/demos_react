import React, { useState } from 'react';

function App(){
    const [count, setCount]=useState(0);

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