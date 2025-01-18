import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeIcon from "@mui/icons-material/Home";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ShieldIcon from "@mui/icons-material/Shield";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Sidebar() {
  return (
    <>
      <div className="w-1/5 bg-[#F6F6F6] h-screen fixed top-0 left-0 pt-5">
        {/* LOGO */}
        <div className="flex w-5/6 mx-auto items-center gap-2">
          <img src="Subtract.png" alt="Logo" />
          <p className="font-bold text-xl">Trailbliss</p>
        </div>

        {/* MENU OPTIONS */}
        <div className="mt-10">
          <div className="flex gap-4 border-b-[0.1rem] border-[#1E1E1E] items-end px-6 py-3 bg-[#ECEFFF] hover:cursor-pointer">
            <FlightOutlinedIcon sx={{ fontSize: 30 }} />
            <p className="font-semibold text-lg">Flights</p>
          </div>
          <div className="flex gap-4 border-b-[0.1rem] border-[#D9D9D9] items-end px-6 py-3 hover:cursor-pointer hover:bg-[#ECEFFF] hover:border-[#1E1E1E] transition-all">
            <HotelIcon sx={{ fontSize: 30 }} />
            <p className="font-semibold text-lg">Hotels</p>
          </div>
          <div className="flex gap-4 border-b-[0.1rem] border-[#D9D9D9] items-end px-6 py-3 hover:cursor-pointer hover:bg-[#ECEFFF] hover:border-[#1E1E1E] transition-all">
            <HomeIcon sx={{ fontSize: 30 }} />
            <p className="font-semibold text-lg">Homestays</p>
          </div>
          <div className="flex gap-4 border-b-[0.1rem] border-[#D9D9D9] items-end px-6 py-3 hover:cursor-pointer hover:bg-[#ECEFFF] hover:border-[#1E1E1E] transition-all">
            <BeachAccessIcon sx={{ fontSize: 30 }} />
            <p className="font-semibold text-lg">Holiday Plan</p>
          </div>
          <div className="flex gap-4 border-b-[0.1rem] border-[#D9D9D9] items-end px-6 py-3 hover:cursor-pointer hover:bg-[#ECEFFF] hover:border-[#1E1E1E] transition-all">
            <TrainIcon sx={{ fontSize: 30 }} />
            <p className="font-semibold text-lg">Trains</p>
          </div>
          <div className="flex gap-4 border-b-[0.1rem] border-[#D9D9D9] items-end px-6 py-3 hover:cursor-pointer hover:bg-[#ECEFFF] hover:border-[#1E1E1E] transition-all">
            <DirectionsBusIcon sx={{ fontSize: 30 }} />
            <p className="font-semibold text-lg">Buses</p>
          </div>
          <div className="flex gap-4 border-b-[0.1rem] border-[#D9D9D9] items-end px-6 py-3 hover:cursor-pointer hover:bg-[#ECEFFF] hover:border-[#1E1E1E] transition-all">
            <ShieldIcon sx={{ fontSize: 30 }} />
            <p className="font-semibold text-lg">Travel Insurance</p>
          </div>
          <div className="flex gap-4 border-b-[0.1rem] border-[#D9D9D9] items-end px-6 py-3 hover:cursor-pointer hover:bg-[#ECEFFF] hover:border-[#1E1E1E] transition-all">
            <MoreVertIcon sx={{ fontSize: 30 }} />
            <p className="font-semibold text-lg">More</p>
            <KeyboardArrowDownIcon sx={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
