import React, { useEffect,useState } from 'react'

const Entertainment = () => {

  const [entertainApi, setentertainApi] = useState([]);

  const fetchEntertainApi = async()=>{
    let api = await fetch('https://newsapi.org/v2/everything?q=entertainment&apiKey=abff21afee354d05bbe255947b2dd62e');
    let parse = await api.json();
    setentertainApi(parse.articles);
  }
  useEffect(()=>{
    fetchEntertainApi();
  },[])

  return (
    <div className='row'>
      {
        entertainApi.map((e) => {
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

export default Entertainment