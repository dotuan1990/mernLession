import React from "react";
export default class Application extends React.Component{

    render(){
        let myName = "abc "
        let nameList = ["a","v","d"]
        let nameListWorking = ["b",'r']
        return(
            <>
                <h2>first page</h2>
                <h2>with data {myName}</h2>
                <h3>Done</h3>
                {   nameList && nameList.map((name)=>{
                    return <b><hr/>{name}</b>})
                }
            
                <h3>Still Working</h3>
                {   nameListWorking && nameListWorking.map((name)=>{
                    return <b><hr/>{name}</b>})
                }
            </>
        )
    }
}