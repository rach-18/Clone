import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35%",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  textAlign: "center",
};

function Navigation({ step }) {
  const [open, setOpen] = useState(false);
  const {
    passengerDetails,
    setPassengerDetails,
    setSubmissionError,
    secureTrip,
    setSecureTrip,
    setLoading,
    resetData,
    navigate,
  } = useContext(AppContext);
  // const navigate = useNavigate();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const validateContact = () => {
    const { validContact, validEmail } = passengerDetails.contactDetails;

    if (!validContact || !validEmail) {
      return false;
    }

    return true;
  };

  const validatePassengers = () => {
    const passengers = passengerDetails.passengers;

    // Check if any passenger is invalid
    return passengers.every(
      (passenger) =>
        passenger.validName && passenger.validDob && passenger.gender
    );
  };

  const handleNext = () => {
    if (step === 1) {
      console.log(validateContact());
      console.log(validatePassengers());
      if (validateContact() && validatePassengers()) {
        console.log("Proceeding to next Step");
        setSubmissionError(false);
        navigate("/additional-information");
      } else {
        setSubmissionError(true);
        console.log("Please enter valid details");
      }
    } else if (step === 2) {
      if (!secureTrip || secureTrip === "no value") {
        setSecureTrip("no value");
      } else {
        setSecureTrip("");
        navigate("/review-submit");
      }
    } else if (step === 3) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        navigate("/submission");
      }, 5000);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      navigate("/");
    } else {
      navigate("/additional-information");
    }
  };

  const handleCancel = () => {
    setOpen(false);
    resetData();
  };

  return (
    <>
      <div className="mt-5 flex items-center justify-between">
        <button onClick={handleOpen} className="underline" to="#">
          Cancel
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to cancel the booking?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              All your data will be lost!
            </Typography>
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={handleClose}
                className="bg-[#2D2D2D] text-white px-5 py-3 rounded-lg"
              >
                No, I don't want to cancel
              </button>
              <button
                onClick={handleCancel}
                className="bg-[#F6F6F6] text-black px-5 py-3 rounded-lg"
              >
                Yes, I want to cancel
              </button>
            </div>
          </Box>
        </Modal>
        <div className="flex items-center gap-4">
          {step !== 1 && (
            <button
              onClick={handleBack}
              className="bg-[#F6F6F6] border-[0.1rem] border-[#F6F6F6] hover:border-black transition-all text-black px-5 py-3 rounded-lg"
            >
              <ArrowBackIosIcon /> Go Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="bg-[#2D2D2D] text-white px-5 py-3 rounded-lg border-[0.1rem] border-black hover:bg-[#F6F6F6] hover:text-black"
          >
            {step === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navigation;
