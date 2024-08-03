import React from 'react'
import { Link } from 'react-router-dom'



function Nav() {

  return (
    <div className= 'text-white flex justify-end gap-20 mr-10 p-3 font-serif underline'>

        
        <Link to="/newspaper">Newsarticle</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/search">Searchbar</Link>
      
    </div>
  )
}

export default Nav