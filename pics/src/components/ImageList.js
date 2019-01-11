import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
    const images = props.images.map( (image) => {
        return (
            // <div key={image.id}></div>   //put the "key" property in root tag if there's one
            <img key={image.id} src={image.urls.regular} alt={image.description} />
            );
        })
        //avoid referencing "image" repeatedly "image.id, image.urls, image.desc.." to clean up code format by destructuring the "image" object
        //refactoring version:  
        // const images = props.images.map( ({description, id, urls}) => {
        //     return (
        //         // <div key={image.id}></div>
        //         <img key={id} src={urls.regular} alt={description} />
        //     );
        // })
    return(
        <div className="image-list">{images}</div>
    )
};
export default ImageList;