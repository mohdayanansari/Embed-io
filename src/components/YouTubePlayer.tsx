'use client';
import ReactPlayer from 'react-player';

const YouTubePlayer = ({ link }: any) => {
  return (
    <div className="w-full p-2 mt-10 bg-rose-800">
      <ReactPlayer
        url={link ? link : 'https://www.youtube.com/watch?v=3S0ScHuMv4E'}
        controls={true}
        loop={false}
        width={'100%'}
        height={600}
      />
    </div>
  );
};

export default YouTubePlayer;
