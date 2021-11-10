import React from 'react'

export const GifGridItem = ( {title,url} ) => {
    console.log(123123123);
    console.log("asd",title,url);
    return (
        <div className="card animate__animated animate__fadeInDown">
           <img src={url}  alt={title} />
           <p> { title } </p>
        </div>
    )
}