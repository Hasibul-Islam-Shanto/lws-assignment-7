import VideoCard from "./VideoCard";

const Videos = ({ videos, lang }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} lang={lang} />
        ))}
      </div>
    </>
  );
};

export default Videos;
