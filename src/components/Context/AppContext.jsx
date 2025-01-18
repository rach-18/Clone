import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //   const [passengerDetails, setPassengerDetails] = useState({
  //     passengers: [
  //         {
  //             name: "",
  //             dob: "",
  //             gender: "",
  //             validName: false,
  //             validDob: false,
  //             validGender: false
  //         }
  //     ],
  //     contactDetails: {
  //         contact: "",
  //         email: "",
  //         validContact: false,
  //         validEmail: false
  //     }
  //   });
  const [passengerDetails, setPassengerDetails] = useState([{}]);

  return (
    <AppContext.Provider
      value={{
        passengerDetails,
        setPassengerDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
