import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecommededVideoCard = ({ video, lang }) => {
  return (
    <>
      <Link
        href={`/${lang}/videos/${video?.videoId}`}
        className="flex items-start space-x-4"
      >
        <Image
          src={video?.thumbnail}
          height={150}
          width={150}
          alt="Fallout Shelter PC Thumbnail"
          className="w-30 h-20 rounded object-cover"
        />
        <div>
          <h3 className="font-semibold">{video?.title}</h3>
          <p className="text-sm text-gray-400">{video?.channelTitle}</p>
          <p className="text-sm text-gray-400">
            {Math.floor(Math.random() * 100)}M
          </p>
        </div>
      </Link>
    </>
  );
};

export default RecommededVideoCard;
