import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img
        className="rounded-lg"
        alt="video-img"
        src={thumbnails.medium.url}
      ></img>
      <ul className="py-2">
        <li className="font-bold line-clamp-2 ">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount / 1000}k views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
