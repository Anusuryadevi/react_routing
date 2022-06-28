import React from "react";
import { UserConsumer } from "../context/usercontext";
export const About = () => {
    console.log("render about")
    return (
        <UserConsumer>{ (username)=>{
           return <>
            <h1>About information</h1> 
            <h4> hello {username} </h4>
            </>  
        } 
        }
        </UserConsumer>
    )
}

export const MemoizedAbout = React.memo(About);