import React, { Component } from 'react';

import {connect} from 'dva'

const IndexPage=(props)=>{ 

    //console.log("props---",props)

    let {msg}=props

    const HandlerSetName=()=>{
        console.log("props---",props)
        props.dispatch({
            type:'haha/setName',
            data:{
                name:"xixixi"
            }
        })
    }


    return (
        <div>
            <h1>Here is home:{msg}</h1>
            <button onClick={HandlerSetName}>SetName</button>
        </div>
    );

}

const mapStateToProps= (state) => {
    console.log("stateMap---",state)
    return {
       msg:state.haha.name
    }
}


export default connect(mapStateToProps)(IndexPage);
