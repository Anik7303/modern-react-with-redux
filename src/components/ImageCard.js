import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef(null);
        this.setSpans = this.setSpans.bind(this);
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    componentWillUnmount() {
        this.imageRef.current.removeEventListener("load", this.setSpans);
    }

    setSpans() {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }

    render() {
        const { description, url } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img src={url} alt={description} ref={this.imageRef} />
            </div>
        );
    }
}

export default ImageCard;
