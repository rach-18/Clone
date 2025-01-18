import BookingInformation from "../BookingInformation";
import Navigation from "../Navigation";
import Baggage from "./Baggage";
import SecureTrip from "./SecureTrip";

function AdditionalInformation() {
  return (
    <>
      <BookingInformation />
      <p className="mt-5 text-sm text-[#626262]">2/3 STEP</p>
      <p className="font-bold text-xl">Additional Information</p>
      <Baggage type="additional" />
      <SecureTrip />
      <div className="flex items-center gap-2 mt-4">
        <input type="radio" name="secure" />
        <label htmlFor="secure">
          <span className="font-semibold">Yes, </span>secure my trip.
        </label>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <input type="radio" name="not-secure" />
        <label htmlFor="not-secure">
          <span className="font-semibold">No, </span>I will book without trip
          secure.
        </label>
      </div>
      <Navigation />
    </>
  );
}

export default AdditionalInformation;
