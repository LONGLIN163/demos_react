
import React, { useEffect } from 'react';
//import * as apis from '../services/example'
import {connect} from 'dva'

const IndexPage=(props)=>{ 
    //console.log("props---",props)
    let {msg,topicsData}=props
    const HandlerSetName=()=>{
        //console.log("props---",props)
        props.dispatch({
            type:'haha/setName',
            data:{
                name:"xixixi"
            }
        })
    }
    
    const HandlerSetNameAsync=() => {
        //console.log("props---",props)
        props.dispatch({
            type:'haha/setNameAsync',
            data:{
                name:"aaaaa"
            }
        })
    }
    
    //componentDidMount //functional compo doesnt have this hook func
    useEffect(() => { // instead we use useEffect
        // apis.getTopics().then( res => {
            //     console.log(res.data)
            // })  
    },[]);

    const HandlerGetTopics=() => {
        //console.log("props---",props)
        props.dispatch({
            type:'haha/getTopics',
        })
    }

    return (
        <div>
            <h1>Here is home:{msg}</h1>
            <button onClick={HandlerSetName}>SetName</button>
            <button onClick={HandlerSetNameAsync}>SetNameAsync</button>
            <button onClick={HandlerGetTopics}>getTopicsAsync</button>
            <div>asyncData:</div>
            <div>
                {
                    topicsData.map((item,index) => {
                        return <p key={index}>{item.title}</p>
                    })
                }
            </div>
        </div>
    );

}

const mapStateToProps= (state) => {
    console.log("stateMap---",state)
    return {
       msg:state.haha.name,
       topicsData:state.haha.topicsData
    }
}


export default connect(mapStateToProps)(IndexPage);
