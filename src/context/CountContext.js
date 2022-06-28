import React from "react"



const CountContext = React.createContext({count : 0 , dispatch : ()=>0 })
const CountProvider = CountContext.Provider
const CountConsumer = CountContext.Consumer

export { CountConsumer, CountContext, CountProvider }