import React, { useEffect,useState } from 'react'

const Health = () => {
const [healthApi, sethealthApi] = useState([])

  const getHalthApi = async()=>{
    let api =await fetch('https://newsapi.org/v2/everything?q=health&apiKey=abff21afee354d05bbe255947b2dd62e');
    let parse =await api.json();
    sethealthApi(parse.articles);
  }
  useEffect(()=>{
    getHalthApi();
  },[])
  return (
    <div className='row'>
      {
        healthApi.map((e) => {
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

export default Health