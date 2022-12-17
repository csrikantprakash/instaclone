import React, { useEffect, useState } from "react";
import '../css/card.css'
import axios from 'axios';
const Card = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://instacloneapi-z5ae.onrender.com/blog')
        .then((response) => {  
          setData(response.data.posts);
          console.log(response.data.posts);
        });
    }, [])
    console.log(data);
    return (
        <>  
            { data.map((blog, i)=>(
                <section key={i} className="card">
                    <section className="card-header">
                        <div className="card-name-place">
                            <div className="card-header_name">{blog.name}</div>
                            <div className="card-header_place">{blog.location}</div>
                        </div>
                        <span>
                            <img src={require("../images/more_icon.png")} alt="3dots"></img>
                        </span>
                    </section>
                    <section className="card-image">
                        <img src={blog.image} alt="place"></img>
                    </section>
                    <section className="card-actions">
                        <span>
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </span>
                        <span>
                            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </span>
                        <span>
                            {blog.date}
                        </span>
                    </section>
                    <section className="likes">
                        <span >
                            {blog.likes} likes
                        </span>
                    </section>
                    <section className="description">
                        {blog.description}
                    </section>
                </section>
            ))
            }
        </>
    )
}

export default Card;