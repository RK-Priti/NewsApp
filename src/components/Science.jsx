import React, { useEffect,useState } from 'react'

const Science = () => {
  const [sceinceApi, setsceinceApi] = useState([]);
  const fetchscienceApi=async()=>{
    let scienceapi = await fetch('https://newsapi.org/v2/everything?q=science&apiKey=abff21afee354d05bbe255947b2dd62e')
    let sciencedata = await scienceapi.json();
    setsceinceApi(sciencedata.articles);
  }
  useEffect(()=>{
    fetchscienceApi();
  },[])
  return (
    <div className='row'>
      {
        sceinceApi.map((e) => {
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

export default Science