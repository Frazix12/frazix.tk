
import { motion } from 'framer-motion'

import useSWR from "swr";
import { SiSpotify } from "react-icons/si";



const on = true;
const Spotify = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);
  const SongName = data?.isPlaying ? data.title : "Not Listening";
  const SortSongName = SongName.split(' ');
  const firstThreeWords = SortSongName.slice(0, 3).join(' ');
  const FinalSongName = `${firstThreeWords}...`;

  if (on) {

    return (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
        className="fixed left-6 -bottom-20 w-[14rem] h-[7rem] hidden lg:flex flex-col items-start justify-start bg-[#212329] rounded-xl pt-2 pb-2 pl-2 pr-2 backdrop-blur-md"
      >
        <div className="SpotifyCard flex justify-between text-center items-center">
          <div >
            {data?.isPlaying ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data?.albumImageUrl}
                className="rounded-xl w-24 h-24"
                alt={data?.album}
              />
            ) : (
              <SiSpotify
                size={96}
                color={"#1ED760"}
              />
            )}
          </div>

          <div className="text-box m-2">
            <p className="SongName">
              {

              }
              {data?.isPlaying ? FinalSongName : "Not Listening"}

            </p>

            <a className="text-gray-400 font-mono text-xs" target="_blank" href={data?.songUrl} rel="noreferrer">
              {data?.isPlaying ? "View on Spotify" : "Open Spotify"}
            </a>
          </div>
          {/* <div className="SpotifyIcon">
            <SiSpotify size={64} color={"#1ED760"} />
          </div> */}
        </div>
      </motion.div>
    )
  } else return null;
}

export default Spotify



