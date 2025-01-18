import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SouthEastRoundedIcon from "@mui/icons-material/SouthEastRounded";
import AirplanemodeActiveRoundedIcon from "@mui/icons-material/AirplanemodeActiveRounded";

function Ticket() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-[#B5C1FF] to-[#D9D9D9] p-[1px] rounded-lg">
        <div className="relative w-full bg-gradient-to-r from-[#6575C6] via-[#D0D8FF] to-[#FAFAFA] rounded-lg flex items-center py-5">
          {/* LEFT SEMI CIRCLE */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-r-[2px] border-r-[#B5C1FF]"></div>

          {/* CONTENT AREA */}
          <div className="flex-grow p-6">
            {/* <!-- Add your content here --> */}
            <img
              className="absolute top-0 left-0 w-full h-full"
              src="Cloud.png"
              alt="cloud"
            />
            <img
              className="transform scale-x-[-1] scale-y-[-1] absolute w-full bottom-0 left-0 h-full"
              src="Cloud.png"
              alt="cloud"
            />
            <div className="flex items-center justify-between pr-10 z-10 relative">
              <img src="Plane.png" alt="Plane" />
              <div className="flex gap-5 items-start border-r-[1px] border-[#A4A4A4] border-dashed w-[25%]">
                <img src="Indigo-logo.png" alt="Indigo Logo" />
                <div>
                  <p className="text-xl font-semibold mb-1">Indigo Airline</p>
                  <p className="text-[#626262] text-sm mb-1">Airbus A350-900</p>
                  <p className="text-xs text-[#626262]">
                    <FlightTakeoffIcon /> 2h 20m
                  </p>
                </div>
              </div>
              <div>
                <p className="text-2xl font-semibold">12:15</p>
                <hr className="border-[#A4A4A4] my-2" />
                <p className="text-[#2D2D2D] text-sm">
                  <SouthEastRoundedIcon />
                  DEL (Delhi)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <AirplanemodeActiveRoundedIcon className="transform rotate-90" />
                <p className="text-sm text-[#626262]">Non-stop</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">6:00</p>
                <hr className="border-[#A4A4A4] my-2" />
                <p className="text-[#2D2D2D] text-sm">
                  <SouthEastRoundedIcon />
                  BOM (Mumbai)
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SEMI CIRCLE */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-l-[2px] border-l-[#D9D9D9]"></div>
        </div>
      </div>
    </>
  );
}

export default Ticket;
