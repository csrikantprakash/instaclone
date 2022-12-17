import axios from 'axios';
import React, { useState } from 'react';
import Header from '../../PostView/js/header';
import { useNavigate } from 'react-router-dom';
import "../css/form.css"
const Form = () => {

    const [previewSource, setPreviewSource] = useState();
    const navigate = useNavigate();
    const [data, setData] = useState({author:"", location:"", description:"",img:""})
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }
    const previewFile = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setPreviewSource(reader.result);
        }
    }
    const handleSubmitFile = async (e) =>{
        e.preventDefault();
        if(!previewSource) return;
        // const result = await axios.post('http://localhost:3000/blogAxios',{
        //     image:previewSource
        // })
        setData({...data, img:previewSource});
        await axios.post("https://instacloneapi-z5ae.onrender.com/blog", data);
        navigate('/postview');
     
    }
   
    return(
        <>  
            <Header/>
            <form onSubmit={handleSubmitFile} className="form" action='/upload' encType='multipart/form-data'>
                <input type="file" name="image" onChange={handleFileInputChange}></input>
                {previewSource && (
                    <img src={previewSource} alt="chosen" style={{height:"30px"}}></img>
                )}
                <br></br>
                <input className="author" type="text" placeholder="Author" onBlur={(e)=>{setData({...data, author: e.target.value})}} required></input>
                <input type="test" placeholder='Location' className="location" onBlur={(e)=>{setData({...data, location: e.target.value})}}></input>
                <br></br>
                <input type="text" placeholder="Description" className='form-description' onBlur={(e)=>{setData({...data, description: e.target.value})}}></input>
                <br></br>
                <input type="submit" value="POST"></input>
            </form>
        </>
    )
}

export default Form;