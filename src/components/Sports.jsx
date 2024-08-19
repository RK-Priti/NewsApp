import React, { useEffect,useState } from 'react'

const Sports = () => {

  const [sportApi, setsportApi] = useState([]);
  const getSportApi = async()=>{
    let api =await fetch('https://newsapi.org/v2/everything?q=sports&apiKey=abff21afee354d05bbe255947b2dd62e');
    let parse =await api.json();
    setsportApi(parse.articles);
  }
  useEffect(()=>{
    getSportApi();
  },[])
  return (
    <div className='row'>
      {
        sportApi.map((e) => {
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

export default Sports