import { useContext, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AppContext } from "../Context/AppContext";

function ContactCard() {
  const { passengerDetails, setPassengerDetails } = useContext(AppContext);
  const [newContact, setNewContact] = useState({
    contact: "",
    email: "",
    validContact: false,
    validEmail: false,
  });

  const handleNumber = (e) => {
    const newNumber = e.target.value;
    const numberRegex = /^[6-9]\d{9}$/;

    setNewContact((prev) => ({
      ...prev,
      contact: newNumber,
      validContact: numberRegex.test(newNumber),
    }));

    setPassengerDetails((prev) => [
      {
        ...prev[0],
        contact: newNumber,
        validContact: numberRegex.test(newNumber),
      },
    ]);
  };

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setNewContact((prev) => ({
      ...prev,
      email: newEmail,
      validEmail: emailRegex.test(newEmail),
    }));

    setPassengerDetails((prev) => [
      {
        ...prev[0],
        email: newEmail,
        validEmail: emailRegex.test(newEmail),
      },
    ]);
  };

  return (
    <>
      <form className="mt-3 flex items-center gap-8 w-full">
        {/* NUMBER */}
        <div className="flex flex-col w-1/3">
          <label htmlFor="name">Phone Number</label>
          <div className="flex items-center gap-1">
            <select
              className="bg-[#F6F6F6] py-3 px-4 rounded-lg"
              name="phone"
              id=""
            >
              <option value="india">🇮🇳</option>
            </select>
            <div className="flex items-center rounded-lg bg-[#F6F6F6] w-full">
              <input
                className="bg-[#F6F6F6] py-3 px-4 rounded-lg w-full outline-none"
                type="number"
                name="number"
                onChange={handleNumber}
                value={newContact.contact}
                placeholder="Enter Phone Number..."
              />
              {newContact.contact &&
                (newContact.validContact ? (
                  <CheckCircleIcon
                    sx={{
                      backgroundColor: "#F6F6F6",
                      padding: 1,
                      height: "100%",
                      fontSize: 50,
                      borderRadius: "0 0.5rem 0.5rem 0",
                      visibility: newContact.validContact
                        ? "visible"
                        : "hidden",
                      color: "#008C76",
                    }}
                  />
                ) : (
                  <InfoIcon
                    sx={{
                      backgroundColor: "#F6F6F6",
                      padding: 1,
                      height: "100%",
                      fontSize: 50,
                      borderRadius: "0 0.5rem 0.5rem 0",
                      visibility: !newContact.validContact
                        ? "visible"
                        : "hidden",
                      color: "#FF4A4A",
                    }}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* EMAIL */}
        <div className="flex flex-col w-1/3">
          <label htmlFor="dob">Email Address</label>
          <div className="flex items-center rounded-lg bg-[#F6F6F6] w-full">
            <input
              className="bg-[#F6F6F6] py-3 px-4 rounded-lg w-full outline-none"
              type="email"
              name="email"
              onChange={handleEmail}
              value={newContact.email}
              placeholder="Enter Your Email..."
            />
            {newContact.email &&
              (newContact.validEmail ? (
                <CheckCircleIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    visibility: newContact.validEmail ? "visible" : "hidden",
                    color: "#008C76",
                  }}
                />
              ) : (
                <InfoIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    visibility: !newContact.validEmail ? "visible" : "hidden",
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

export default ContactCard;
