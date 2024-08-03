import React from 'react'
import Nav from './Nav'
import Covid from './Covid'
import Hindustan from "./Hindustan"
import Bbc from "./Bbc"
import Times from "./Times"

function Newspaper() {
  return (
    <>
<div>
 <Nav/>
 <Covid/>
<div className=" bg-zinc-800 flex items-center justify-evenly mt-5 ">
<Hindustan/>
<Bbc/>
<Times/>  
 </div>

</div>
    </>
    
  )
}

export default Newspaper