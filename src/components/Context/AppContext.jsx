import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [passengerDetails, setPassengerDetails] = useState(() => {
    const storedData = localStorage.getItem("passengerDetails");
  
    if (storedData) {
      const parsedData = JSON.parse(storedData);
  
      // Ensure `dob` is converted back to Date objects
      parsedData.passengers = parsedData.passengers.map((passenger) => ({
        ...passenger,
        dob: passenger.dob ? new Date(passenger.dob) : null,
      }));
  
      return parsedData;
    }
  
    // Default state
    return {
      passengers: [
        {
          name: "",
          dob: null,
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
    };
  });
  
  const [submissionError, setSubmissionError] = useState(false);
  const [secureTrip, setSecureTrip] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("passengerDetails", JSON.stringify(passengerDetails));
  }, [passengerDetails]);

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
    const resetDetails = {
      passengers: [
        {
          name: "",
          dob: null,
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
    };
    setPassengerDetails(resetDetails);
    localStorage.setItem("passengerDetails", JSON.stringify(resetDetails))
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
