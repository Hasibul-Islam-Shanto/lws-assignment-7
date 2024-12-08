export async function getVideos() {
  try {
    const data = await import("../data/videos.json");
    return data.default;
  } catch (error) {
    console.error("Error importing local json data.", error);
    return [];
  }
}

export async function getVideo(id) {
  try {
    const data = await import("../data/videos.json");
    const videos = data.default;
    const video = videos.find((video) => video.videoId === id.toString());

    if (!video) {
      return null;
    }
    return video;
  } catch (error) {
    console.error("Error importing local json data.", error);
    return null;
  }
}
