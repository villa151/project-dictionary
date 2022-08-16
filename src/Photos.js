import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return <img src={photo.src.tiny} key={index} alt="Search result" />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
