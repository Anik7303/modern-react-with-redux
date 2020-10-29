import { render } from "@testing-library/react";
import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

function ImageList(props) {
    const renderedImages = props.images.map(({ id, description, urls }) => (
        <ImageCard image={{ url: urls.regular, description }} key={id} />
    ));
    return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
