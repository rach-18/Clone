import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./Context/AppContext";

function Navigation() {
  const { passengerDetails } = useContext(AppContext);

  const validateFields = () => {
    const { validName, validDob, validGender, validContact, validEmail } =
      passengerDetails[0];

    console.log(passengerDetails);

    if (
      !validName ||
      !validDob ||
      !validGender ||
      !validContact ||
      !validEmail
    ) {
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateFields()) {
      console.log("Proceeding to next Step");
    } else {
      console.log("Please enter valid details");
    }

    // console.log(passengerDetails);
  };

  return (
    <>
      <div className="mt-5 flex items-center justify-between">
        <Link className="underline" to="#">
          Cancel
        </Link>
        <button
          onClick={handleNext}
          className="bg-[#2D2D2D] text-white px-5 py-3 rounded-lg"
          to="#"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Navigation;
