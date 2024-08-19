import React, { useEffect, useState } from 'react'

function Main() {
  const getAPI = async () => {
    let api = await fetch('https://newsapi.org/v2/everything?q=general&apiKey=abff21afee354d05bbe255947b2dd62e');
    let jsonData = await api.json();
    setnews(jsonData.articles)
    console.log(jsonData.articles)
  }
  useEffect(() => {
    getAPI();
  }, [])

  const [news, setnews] = useState([]);

  return (
    <div className='row'>
      {
        news.map((e) => {
          return (
            <div>
              <div className='container'><img src={e.urlToImage} alt="" /></div>
              <div className="content">
                <h3>{e.title}</h3>
                <button><a href={e.url}>Read</a></button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default Main