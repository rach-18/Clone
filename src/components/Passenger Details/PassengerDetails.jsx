import { useContext } from "react";
import BookingInformation from "../BookingInformation";
import Navigation from "../Navigation";
import ContactCard from "./ContactCard";
import PassengerCard from "./Passengercard";
import Ticket from "./Ticket";
import { AppContext } from "../Context/AppContext";

function PassengerDeatils() {
  const { passengerDetails } = useContext(AppContext);

  const handleClick = () => {
    console.log(passengerDetails);
  };

  return (
    <>
      <BookingInformation />
      <div className="mt-10">
        <Ticket />
        <p className="mt-5 text-sm text-[#626262]">1/3 STEP</p>
        <p className="font-bold text-xl">Passenger Details</p>
        <p className="mt-5 text-lg font-semibold">Passenger 1 Details</p>
        <PassengerCard />
        <button
          onClick={handleClick}
          className="mt-2 text-[#6B6B6B] font-semibold hover:cursor-pointer"
        >
          + Add a Passenger
        </button>
        <p className="mt-5 text-lg font-semibold">Contact Details</p>
        <ContactCard />
        <Navigation />
      </div>
    </>
  );
}

export default PassengerDeatils;
