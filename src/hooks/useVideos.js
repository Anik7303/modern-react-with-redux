import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (searchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(searchTerm);
    }, [searchTerm]);

    const search = async (term) => {
        const response = await youtube.get("/search", { params: { q: term } });
        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;
