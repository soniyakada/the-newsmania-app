import { useEffect, useState } from 'react'
import axios from 'axios'


function Hindustan() {
  const [articles, setArticles] = useState([])

  useEffect(()=>{
    axios.get("/api/hindustan")
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
      <h1 className="text-xl font-bold  text-white ml-12 mb-4">THE HINDUSTAN TIMES</h1>
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

export default Hindustan 