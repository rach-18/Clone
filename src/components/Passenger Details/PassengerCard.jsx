import { useContext, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { AppContext } from "../Context/AppContext";

function PassengerCard() {
  const { passengerDetails, setPassengerDetails } = useContext(AppContext);
  const [newPassenger, setNewPassenger] = useState({
    name: "",
    dob: "",
    gender: "",
    validName: false,
    validDob: false,
    validGender: false,
  });

  const handleName = (e) => {
    const newName = e.target.value;

    setNewPassenger((prev) => ({
      ...prev,
      name: newName,
      validName: newName.length > 3 ? true : false,
    }));

    setPassengerDetails((prev) => [
      {
        ...prev[0],
        name: newName,
        validName: newName.length > 3 ? true : false,
      },
    ]);
  };

  const handleDob = (date) => {
    const currentDate = new Date();
    const maxAgeDate = new Date(
      currentDate.setFullYear(currentDate.getFullYear() + 90)
    );

    // console.log("Current date: ", currentDate);
    // console.log("Date: ", date);
    // console.log("MaxAge: ", maxAgeDate);
    // console.log(date > maxAgeDate);

    setNewPassenger((prev) => ({
      ...prev,
      dob: date,
      validDob: !date || date > new Date() || date > maxAgeDate ? false : true,
    }));

    setPassengerDetails((prev) => [
      {
        ...prev[0],
        dob: date,
        validDob:
          !date || date > new Date() || date > maxAgeDate ? false : true,
      },
    ]);
  };

  const handleGender = (e) => {
    const newGender = e.target.value;

    setNewPassenger((prev) => ({
      ...prev,
      gender: newGender,
      validGender: true,
    }));

    setPassengerDetails((prev) => [
      {
        ...prev[0],
        gender: newGender,
        validGender: true,
      },
    ]);
  };

  return (
    <>
      <form className="mt-3 flex items-center justify-between gap-8 w-full relative z-20">
        {/* NAME */}
        <div className="flex flex-col w-1/3">
          <label htmlFor="name">Full Name</label>
          <div className="flex items-center rounded-lg bg-[#F6F6F6]">
            <input
              className="bg-[#F6F6F6] py-3 px-4 w-full outline-none rounded-lg"
              type="text"
              name="name"
              value={newPassenger.name}
              onChange={handleName}
              placeholder="Enter Full Name..."
            />
            {newPassenger.name &&
              (!newPassenger.validName ? (
                <InfoIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    visibility: !newPassenger.validName ? "visible" : "hidden",
                    color: "#FF4A4A",
                  }}
                />
              ) : (
                <CheckCircleIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    visibility: newPassenger.validName ? "visible" : "hidden",
                    color: "#008C76",
                  }}
                />
              ))}
          </div>
          <p className="text-xs mt-1 text-[#A8A8A8]">
            Name should have more than 3 characters
          </p>
        </div>

        {/* DATE OF BIRTH */}
        <div className="flex flex-col w-1/3">
          <label htmlFor="dob">Date of Birth</label>
          <div className="flex items-center rounded-lg bg-[#F6F6F6] justify-between">
            <DatePicker
              dateFormat="dd-MM-yyyy"
              className="bg-[#F6F6F6] py-3 px-4 w-full outline-none rounded-l-lg"
              placeholderText="dd/mm/yy"
              selected={newPassenger.dob}
              value={newPassenger.dob}
              onChange={handleDob}
              showYearDropdown
              scrollableYearDropdown
              scrollableMonthYearDropdown
            />
            {newPassenger.dob &&
              (!newPassenger.validDob ? (
                <InfoIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    visibility: !newPassenger.validDob ? "visible" : "hidden",
                    color: "#FF4A4A",
                  }}
                />
              ) : (
                <CheckCircleIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    visibility: newPassenger.validDob ? "visible" : "hidden",
                    color: "#008C76",
                  }}
                />
              ))}
          </div>
          <p className="text-xs mt-1 text-[#A8A8A8]">
            Age cannot be more than 90 years
          </p>
        </div>

        {/* GENDER */}
        <div className="w-1/3">
          <label htmlFor="gender">Gender</label>
          <div className="flex items-center gap-5 mt-2">
            <div className="flex gap-2">
              <input
                onChange={handleGender}
                type="radio"
                name="male"
                value="male"
              />
              <p>Male</p>
            </div>
            <div className="flex gap-2">
              <input
                onChange={handleGender}
                type="radio"
                name="male"
                value="female"
              />
              <p>Female</p>
            </div>
            <div className="flex gap-2">
              <input
                onChange={handleGender}
                type="radio"
                name="male"
                value="others"
              />
              <p>Others</p>
            </div>
            {newPassenger.gender &&
              (newPassenger.validGender ? (
                <CheckCircleIcon
                  sx={{
                    fontSize: 30,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    visibility: newPassenger.validGender ? "visible" : "hidden",
                    color: "#008C76",
                  }}
                />
              ) : (
                <InfoIcon
                  sx={{
                    fontSize: 30,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    visibility: !newPassenger.validGender
                      ? "visible"
                      : "hidden",
                    color: "#FF4A4A",
                  }}
                />
              ))}
          </div>
        </div>
      </form>
    </>
  );
}

export default PassengerCard;
