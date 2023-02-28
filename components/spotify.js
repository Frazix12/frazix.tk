
import { motion } from 'framer-motion'

const Spotify = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: -100 }}
      transition={{ duration: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
      className="fixed left-6 -bottom-20 w-[14rem] h-[7rem] hidden lg:flex flex-col items-start justify-start bg-[#212329] rounded-xl pt-2 pb-2 pl-2 pr-2 backdrop-blur-md"
    >

    </motion.div>
  )
}

export default Spotify
