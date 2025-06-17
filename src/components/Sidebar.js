import { useSelector } from "react-redux";
import { Link } from "react-router";
import {
  FaHome,
  FaShoppingBag,
  FaGamepad,
  FaCog,
  FaHistory,
  FaNewspaper,
  FaThumbsUp,
  FaMusic,
  FaChalkboardTeacher,
  FaFire,
  FaPodcast,
  FaQuestionCircle,
} from "react-icons/fa";
import {
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdPlaylistPlay,
  MdOndemandVideo,
  MdWatchLater,
  MdMovie,
  MdLiveTv,
  MdSportsSoccer,
  MdOutlineReport,
  MdFeedback,
} from "react-icons/md";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg    p-5 ">
      <div className="flex flex-col ">
        <Link to={"/"}>
          <div className="flex m-2  cursor-pointer bg-gray-100 rounded-lg px-2 py-1 hover:bg-gray-200 ">
            <FaHome className="text-xl cursor-pointer text-[20px]" />{" "}
            &nbsp;&nbsp;Home
          </div>
        </Link>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer">
          <MdOutlineSlowMotionVideo className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Shorts
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer">
          <MdSubscriptions className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Subscriptions
        </div>
      </div>
      <hr className="my-2 mb-2"></hr>

      <div className="flex flex-col ">
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <FaHistory className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;History
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <MdPlaylistPlay className="text-xl cursor-pointer text-[25px]" />{" "}
          &nbsp;&nbsp;Playlist
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <MdOndemandVideo className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Your videos
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <FaChalkboardTeacher className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Your Courses
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <MdWatchLater className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Watch later
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <FaThumbsUp className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Liked videos
        </div>
      </div>

      <hr className="my-2 mb-2"></hr>
      <h2 className="font-bold mb-2">Explore</h2>

      <div className="flex flex-col">
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <FaFire className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Trending
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <FaShoppingBag className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Shopping
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <FaMusic className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Music
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <MdMovie className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Movies
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <MdLiveTv className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Live
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <FaGamepad className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Gaming
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <FaNewspaper className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;News
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <MdSportsSoccer className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Sports
        </div>
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <FaChalkboardTeacher className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Courses
        </div>
        {/* <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer w-full">< FaTshirt  className="text-xl cursor-pointer text-[20px]" /> &nbsp;&nbsp;Fashion & Beauty</div> */}
        <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
          <FaPodcast className="text-xl cursor-pointer text-[20px]" />{" "}
          &nbsp;&nbsp;Podcasts
        </div>
        <hr className="my-2 mb-2"></hr>

        <div className="flex flex-col">
          <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
            <FaCog className="text-xl cursor-pointer text-[20px]" />{" "}
            &nbsp;&nbsp;Settings
          </div>
          <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer w-full">
            <MdOutlineReport className="text-xl cursor-pointer text-[20px]" />{" "}
            &nbsp;&nbsp;Report history
          </div>
          <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer ">
            <FaQuestionCircle className="text-xl cursor-pointer text-[20px]" />{" "}
            &nbsp;&nbsp;Help
          </div>
          <div className="flex m-2 px-2 py-1 rounded-lg hover:bg-gray-100  cursor-pointer w-full">
            <MdFeedback className="text-xl cursor-pointer text-[20px]" />{" "}
            &nbsp;&nbsp;Send feddback
          </div>
        </div>

        <hr className="my-2 mb-2"></hr>

        <div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;