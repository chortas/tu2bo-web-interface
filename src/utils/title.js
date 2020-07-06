export const getTitle = (numVideos, caption) => {
  return numVideos === 1 ? `El video más ${caption}` : `Los ${numVideos} videos más ${caption}s`;
};
