import React from "react";

import "./SeasonDetail.css";

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun",
    },
    winter: {
        text: "Burr! it is chilly!",
        iconName: "snowflake",
    },
};

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? "summer" : "winter";
    } else {
        return latitude > 0 ? "winter" : "summer";
    }
};

const SeasonDetail = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-detail ${season}`}>
            <i className={`massive icon ${iconName} icon-left`} />
            <h1>{text}</h1>
            <i className={`massive icon ${iconName} icon-right`} />
        </div>
    );
};

export default SeasonDetail;
