import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [passengerDetails, setPassengerDetails] = useState({
    passengers: [
      {
        name: "",
        dob: "",
        gender: "",
        validName: false,
        validDob: false,
        validGender: false,
      },
    ],
    contactDetails: {
      contact: "",
      email: "",
      validContact: false,
      validEmail: false,
    },
  });
  const [submissionError, setSubmissionError] = useState(false);
  const [secureTrip, setSecureTrip] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const emailDisplay = (email) => {
    const sub = email.slice(0, email.indexOf("@"));
    const ind = Math.ceil(sub.length / 3);

    return sub.slice(0, ind) + "****@****.com";
  };

  const resetData = () => {
    navigate("/");
    setPassengerDetails({
      passengers: [
        {
          name: "",
          dob: "",
          gender: "",
          validName: false,
          validDob: false,
          validGender: false,
        },
      ],
      contactDetails: {
        contact: "",
        email: "",
        validContact: false,
        validEmail: false,
      },
    });
  };
  // const [passengerDetails, setPassengerDetails] = useState([{}]);

  return (
    <AppContext.Provider
      value={{
        passengerDetails,
        setPassengerDetails,
        submissionError,
        setSubmissionError,
        secureTrip,
        setSecureTrip,
        loading,
        setLoading,
        formatDate,
        emailDisplay,
        resetData,
        navigate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
