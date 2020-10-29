import React from "react";

export const VideoSelectContext = React.createContext(null);

export const withVideoSelectProp = (Component) => (props) => (
    <VideoSelectContext.Consumer>
        {(onVideoSelect) => <Component {...props} onVideoSelect={onVideoSelect} />}
    </VideoSelectContext.Consumer>
);
