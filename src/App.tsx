import React from "react"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

  return (
    <div id='App' className='flex flex-col w-full'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
