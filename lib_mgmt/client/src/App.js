
import React,{useState,useEffect} from 'react'



const Books = ()=>{
  const axios = require('axios');
  const[books,setbooks]=useState([]);
 
const getbookdata = async()=>{
  try{
    const data = await axios.get("http://localhost:5002/Booktable");
console.log(data.data);
setbooks(data.data);
}catch(e){
  console.log(e);
}
};
useEffect(()=>{
  getbookdata();
},[]);
  
 
  return(
 <div className="Books">
     <h2>Book details</h2>
 
     {books.map((item)=>{
       return(
         
          
         
         <p key={item.book_id}>{item.book_id}  {item.title} {item.author} {item.edition} {item.publishers} {item.summary} {item.genre} {item.url}</p>
         
         
       );
     })}
    
     </div>
  );

  
    
     
    };

 

export default Books;