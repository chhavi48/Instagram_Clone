import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Post.css"
import axios from 'axios'
import { useState,useRef } from 'react'

import { Avatar} from "@chakra-ui/react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';

const Post = () => {
    // const [data,setdata]=useState({});
    const [feeds,setFeeds]=useState([])
//  const inputfile=useRef();

 useEffect(()=>{
  const userId=localStorage.getItem("userid")
     axios
     .get(`https://protected-island-08310.herokuapp.com/profile/${userId}/feed`)
     .then(({data})=>{
        setFeeds(data)
        console.log(data)
     })
 },[])
//  const nav=useNavigate;
// const [name,value]= useContext(GlobalContext)
// const [name, value] = useContext(GlobalContext);
//  const handleChange=(e)=>{
//   const {name,value}= e.target;
//   setdata({
//     ...data,
//     [name]:value,
//   })
//  }

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     // const {name,value}=e.target;


//     const formdata=new FormData();
//     formdata.append("title",data.title)
//     formdata.append("description",data.description)
//     formdata.append("tags",data.tags)
//     formdata.append("image",inputfile.current.files[0]);
//      const userId=localStorage.getItem("userid")
    
//     axios.post(`http://localhost:8000/profile/${userId}/feed`,formdata,{
//       headers:{"Content-Type":"multipart/form-data"},
      
//     })
// }
  return (
    <div>
  {/* <div className='postform'>
    <h4 style={{marginLeft:"40%"}}>Post Form</h4>

     <form onSubmit={handleSubmit} className="setform">
      <input type="text"  name="title"  onChange={handleChange}  placeholder="enter title"></input>
      <input type="text" name="description"onChange={handleChange} placeholder="description"></input><br/>
      <input type="text" name="tags" onChange={handleChange} placeholder="Tags"></input>
     <input type="file" ref={inputfile}/><br/>
       <input type="submit" value={"new post"}/>
     </form>
     </div>

   */}
  
 
 
  {feeds.map(f=> <div className="feed_display">

         <div className="first">
          <Avatar
           border={"1px solid"}
           borderColor={"#d8d8d8"}
           m={2}
           
           src="https://media-exp1.licdn.com/dms/image/C4D03AQFR333TJ9KRnQ/profile-displayphoto-shrink_200_200/0/1654062582833?e=2147483647&v=beta&t=61We4wnMtGKsK_D5qCRf1r6bc2WU-r5CvqXOSbEGtIE"/>
          
          {/* <Avatar src="https://pbs.twimg.com/profile_images/1534381051732459520/UXLbk1u4_400x400.jpg"/> */}
         <p style={{marginLeft:"2%"}}>{f.title}<br/>
      {f.description}</p>
         </div>
      
    
        <img style={{heigh:"400px",width:"500px"}} src={`https://protected-island-08310.herokuapp.com/static/${f.image}`} alt="" />

        <div className='icons'>
          <FavoriteBorderIcon/>
          <ChatBubbleOutlineIcon/>
          <SendIcon/>
        </div>
               <br/>
        <span className='tags'>{f.tags}</span>
       
      </div>)}
  
  
      </div>

   
  );
  
}

export default Post