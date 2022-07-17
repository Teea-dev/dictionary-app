import React from "react";
import "./photo.css";

const Photo = (props) => {
  
  if (props.photo) {
    return (
      <section className="photo">
        {props.photo.map(function (photos, index) {
          return (
            <div className="col-4 photo" key={index}>
              <a href={photos.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photos.src.landscape}
                  className="img-fluid"
                  alt={photos.src.alt}
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
};
export default Photo;
