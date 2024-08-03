import { useEffect, useState } from 'react'
import axios from 'axios'


function Times() {
  const [articles, setArticles] = useState([])

  useEffect(()=>{
    axios.get("/api/timesofindia")
    .then((response)=>{
      setArticles(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
   <>
        <div className="App w-72 h-80">
      <h1 className="text-xl font-bold  text-white ml-12 mb-4">TIMES OF INDIA</h1>
      <p className="mb-4"></p>
      <div className="max-h-full overflow-y-auto border rounded-lg p-4 bg-white">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <div className=' p-3 rounded'>
             <li className=''>{article.title}</li>
              <p className="mt-2 text-sm">Published At: {new Date(article.publishedAt).toLocaleString()}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2 block">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
   </>
  )
}

export default Times
{/* <div className="App w-72 h-96">
<h1 className="text-xl text-white ml-12 font-bold mb-4">TIMES OF INDIA</h1>
<p className="mb-4"></p>
<div className="max-h-full overflow-y-auto border rounded-lg p-4 bg-white">
  {articles.map((article, index) => (
    <div key={index} className="article mb-4">
      <div className='p-5 rounded'>
        <h3 className='text-2xl font-semibold'>{article.title}</h3>
        <p className="mt-2">{article.description}</p>
        <p className="mt-2 text-sm">Author: {article.author}</p>
        <p className="mt-2 text-sm">Published At: {new Date(article.publishedAt).toLocaleString()}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2 block">Read more</a>
      </div>
    </div>
  ))}
</div>
</div> */}