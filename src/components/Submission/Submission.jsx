import BookingInformation from "../BookingInformation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Ticket from "../Passenger Details/Ticket";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Submission() {
  const { passengerDetails, formatDate, emailDisplay, resetData } =
    useContext(AppContext);

  return (
    <>
      <BookingInformation curStep={4} />
      <div className="flex items-center gap-2 justify-center my-10">
        <CheckCircleIcon sx={{ fontSize: 40, color: "#008C76" }} />
        <h1 className="font-bold text-2xl">Booking Complete</h1>
      </div>
      <Ticket />
      <div className="mt-5">
        <h2 className="font-semibold text-xl">Passenger Details</h2>
        {passengerDetails.passengers.map((passenger, index) => {
          return (
            <div
              key={index}
              className="w-full bg-[#F6F6F6] rounded-lg p-5 mt-2 flex justify-between text-left shadow-md"
            >
              <div className="flex gap-5 items-center w-full">
                <p className="font-semibold text-lg">Name</p>
                <p>{passenger.name}</p>
              </div>
              <div className="flex gap-5 items-center w-full">
                <p className="font-semibold text-lg">Date of Birth</p>
                <p>{formatDate(passenger.dob)}</p>
              </div>
              <div className="flex gap-5 items-center w-full">
                <p className="font-semibold text-lg">Gender</p>
                <p>{passenger.gender}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <h2 className="font-semibold text-xl">Contact Details</h2>
        <div className="w-full bg-[#F6F6F6] rounded-lg p-5 mt-2 flex text-left shadow-md">
          <div className="flex gap-5 items-center w-full">
            <p className="font-semibold text-lg">Contact</p>
            <p>{passengerDetails.contactDetails.contact}</p>
          </div>
          <div className="flex gap-5 items-center w-full">
            <p className="font-semibold text-lg">Email</p>
            <p>{emailDisplay(passengerDetails.contactDetails.email)}</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 flex justify-center">
        <button
          onClick={resetData}
          className="bg-[#2D2D2D] border-[0.1rem] border-black hover:bg-[#F6F6F6] hover:text-black hover:scale-[1.05] text-white px-5 py-3 rounded-lg transition-all shadow-md"
        >
          Start New Booking
        </button>
      </div>
    </>
  );
}

export default Submission;
