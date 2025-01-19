import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Passengers() {
  const { passengerDetails, formatDate, emailDisplay } = useContext(AppContext);

  console.log(passengerDetails);

  return (
    <>
      <h2 className="text-lg font-semibold mt-5">Passenger Details</h2>
      <div className="w-full bg-[#F6F6F6] rounded-lg p-5 mt-2 shadow-md">
        {passengerDetails.passengers.map((passenger, index) => {
          return (
            <div key={index} className="flex justify-between items-center">
              <div className="w-full flex itmes-center justify-between mx-8">
                <p className="text-[#626262]">Full Name</p>
                <p className="font-semibold">{passenger.name}</p>
              </div>
              <div className="w-full flex itmes-center justify-between mx-8">
                <p className="text-[#626262]">Date of Birth</p>
                <p className="font-semibold">{formatDate(passenger.dob)}</p>
              </div>
              <div className="w-full flex itmes-center justify-between mx-8">
                <p className="text-[#626262]">Gender</p>
                <p className="font-semibold">{passenger.gender}</p>
              </div>
            </div>
          );
        })}
        <div className="flex items-center mt-4">
          <div className="w-1/3 flex itmes-center justify-between mx-8">
            <p className="text-[#626262]">Phone No.</p>
            <p className="font-semibold">
              {passengerDetails.contactDetails.contact}
            </p>
          </div>
          <div className="w-1/3 flex itmes-center justify-between mx-8">
            <p className="text-[#626262]">Email Address</p>
            <p className="font-semibold">
              {emailDisplay(passengerDetails.contactDetails.email)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Passengers;
