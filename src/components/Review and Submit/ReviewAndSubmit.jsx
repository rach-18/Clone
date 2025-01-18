import Baggage from "../Additional Information/Baggage";
import BookingInformation from "../BookingInformation";
import Navigation from "../Navigation";
import AirlineDetails from "./AirlineDetails";
import Passengers from "./Passengers";

function ReviewAndSubmit() {
  return (
    <>
      <BookingInformation />
      <p className="mt-5 text-sm text-[#626262]">3/3 STEP</p>
      <p className="font-bold text-xl">Review and Submit</p>
      <AirlineDetails />
      <Passengers />
      <Baggage type="review" />
      <Navigation />
    </>
  );
}

export default ReviewAndSubmit;
