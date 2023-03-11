import './App.css';
import { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import axios from 'axios';



function App() {
  // variable for storing data
  const [titles,setTitles]=useState(null);

  // fetching data from api only one time
  useEffect(()=>{
    axios.get("https://dummyjson.com/posts").then(response=>{
      setTitles(response.data.posts)
    }).catch(err=>{
      setTitles(false);
    })
  },[])


  return (
    <div className="App">
    {/* 
      applying condition 
      if data not fetched then showing skeleton
      if error occurs then showing error alerts 
      if data fetched then showing Titles
    */}
      {
        titles===null?
        <Skeleton className={`loading-skeleton`} animation={"wave"} variant="rounded" width={"90%"} height={50} />:
        titles===false?
        <Alert className={`error-alert`} severity="error">This is an Server or API error — check it out!</Alert>:
        titles.map((items,index)=>{
          return(
          <div className='titles' key={items.id}>
            {items.title}
          </div>)
        })
      }
    </div>
  );
}

export default App;
