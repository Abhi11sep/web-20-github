import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './styleall.css'

const Html = () => {
    const [data, setData] = useState([])
    const [loading,setLoading]=useState(false)
    const [page,setPage]=useState(1)

    const getData = async (page) => {
        return fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:html&sort:stargazers_count-desc&page=${page}&per_page=10`)
        .then((res) => {return res.json()})
    }

 
    useEffect(() => {
        setLoading(true)
        getData(page)
        .then((res)=>setData(res.items))
        setLoading(false)
    }, [page])

    const handleClick=(url)=>{
        window.location.replace(url);
      console.log(url)
      return null;
    }
    
    console.log(data)
    if(loading){
        return <h1>...Loading</h1>
    }

  return (
    <div style={{width:"100%"}}>
    <h1>All HTML Repositories</h1>
    <div className='main'>
       {data.map((item) => (
        <div key={item.id} className='cards' onClick={()=>handleClick(item.owner.html_url)}>
        <img src={item.owner.avatar_url} alt="avatar_url" width="200px" />
            <h4>{item.name}</h4>
            <p>Forks : {item.forks}</p>
        </div>
    ))}</div>
    <div style={{marginTop:'50px',marginBottom:'50px'}}>
     <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
     <button>{page}</button>
     <button onClick={()=>setPage(page+1)}>NEXT</button></div>
</div>

  )
}

export default Html