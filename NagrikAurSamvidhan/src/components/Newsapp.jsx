import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../css/news.css';


const Newsapp = () => {
    const [search, setSearch] = useState("indian constitution");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "fb54aac5975b42b9bc38a70340796c9f";

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0,10)
        setNewsData(dt)
        
    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)
        
    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div>
        <nav-news>
            <div>
                <h2>Stay Update with TrendyNews</h2>
            </div>
            <div className='searchBar-news'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav-news>

        <div>
        {newsData?  <Card data={newsData}/> : null}
            
        </div>
    </div>
  )
}

export default Newsapp