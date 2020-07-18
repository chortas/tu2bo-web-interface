export const filterVideos = (videos, searchQuery) => {
  return videos.filter((video) => video.title.toLowerCase().includes(searchQuery.toLowerCase()));
};
