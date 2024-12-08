import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ video, lang }) => {
  return (
    <>
      <Link
        href={`/${lang}/videos/${video?.videoId}`}
        className="rounded-lg overflow-hidden bg-color-gray"
      >
        <Image
          src={video?.thumbnail}
          height={150}
          width={150}
          alt="Stream 1"
          className="w-full h-40 object-cover"
        />
        <div className="p-2">
          <p className="font-semibold">{video?.title}</p>
          <p className="text-sm text-gray-400">{video?.channelTitle}</p>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
