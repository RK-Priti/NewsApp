import React, { useEffect,useState } from 'react'

const Technology = () => {

  const [teshApi, setteshApi] = useState([]);

  const TeachApi =async ()=>{
    let api = await fetch('https://newsapi.org/v2/everything?q=technology&apiKey=abff21afee354d05bbe255947b2dd62e');
    let parse = await api.json();
    setteshApi(parse.articles);
  }
  useEffect(()=>{
    TeachApi();
  },[])

  return (
    <div className='row'>
      {
        teshApi.map((e) => {
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

export default Technology