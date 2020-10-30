export const formatVideoObj = (video) => {
    const id = video.id.videoId;
    const { title, description, thumbnails } = video.snippet;
    return { id, title, description, thumbnails };
};
