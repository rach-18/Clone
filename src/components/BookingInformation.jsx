import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function BookingInformation({ curStep }) {
  const stepStatus = (step) => {
    if (step === 1) {
      if (curStep > 1) {
        return <CheckCircleIcon sx={{ fontSize: 40 }} />;
      } else {
        return (
          <p className="font-semibold sm:text-lg border-[0.1rem] border-[#D9D9D9] rounded-full h-10 w-10 flex items-center justify-center">
            1
          </p>
        );
      }
    } else if (step === 2) {
      if (curStep < 2) {
        return (
          <p className="font-semibold sm:text-lg text-[#A8A8A8] border-[0.1rem] border-[#D9D9D9] rounded-full h-10 w-10 flex items-center justify-center">
            2
          </p>
        );
      } else if (curStep === 2) {
        return (
          <p className="font-semibold sm:text-lg border-[0.1rem] border-[#D9D9D9] rounded-full h-10 w-10 flex items-center justify-center">
            2
          </p>
        );
      } else {
        return <CheckCircleIcon sx={{ fontSize: 40 }} />;
      }
    } else {
      if (curStep < 3) {
        return (
          <p className="font-semibold sm:text-lg text-[#A8A8A8] border-[0.1rem] border-[#D9D9D9] rounded-full h-10 w-10 flex items-center justify-center">
            3
          </p>
        );
      } else if (curStep === 3) {
        return (
          <p className="font-semibold sm:text-lg border-[0.1rem] border-[#D9D9D9] rounded-full h-10 w-10 flex items-center justify-center">
            3
          </p>
        );
      } else {
        return <CheckCircleIcon sx={{ fontSize: 40 }} />;
      }
    }
  };

  const status = (step) => {
    if (step === 1) {
      if (curStep > 1) {
        return <p className="text-[#008C76] text-sm">Completed</p>;
      } else if (curStep === step) {
        return <p className="text-[#0368C8] text-sm">In Progress</p>;
      }
    } else if (step === 2) {
      if (curStep < 2) {
        return <p className="text-[#A8A8A8] text-sm">Pending</p>;
      } else if (curStep === 2) {
        return <p className="text-[#0368C8] text-sm">In Progress</p>;
      } else {
        return <p className="text-[#008C76] text-sm">Completed</p>;
      }
    } else {
      if (curStep < 3) {
        return <p className="text-[#A8A8A8] text-sm">Pending</p>;
      } else if (curStep === 3) {
        return <p className="text-[#0368C8] text-sm">In Progress</p>;
      } else {
        return <p className="text-[#008C76] text-sm">Completed</p>;
      }
    }
  };

  return (
    <>
      <div className="w-full">
        <p className="sm:text-2xl text-xl font-bold">Booking Information</p>

        {/* STEP NUMBERS */}
        <div className="flex items-center lg:w-[60%] w-[75%] mx-auto mt-5 gap-1">
          <div className="flex flex-col items-center">{stepStatus(1)}</div>
          <hr
            className={`border-[0.01rem] ${
              curStep > 1 ? "border-black" : "border-[#D9D9D9]"
            } w-full`}
          />
          <div className="flex flex-col items-center">{stepStatus(2)}</div>
          <hr
            className={`border-[0.01rem] ${
              curStep > 3 ? "border-black" : "border-[#D9D9D9]"
            } w-full`}
          />
          <div className="flex flex-col items-center">{stepStatus(3)}</div>
        </div>

        {/* STATUS */}
        <div className="flex items-center lg:w-[85%] w-full mx-auto gap-1 justify-between">
          <div className="flex flex-col items-center w-full text-center">
            <p>Passenger Details</p>
            {status(1)}
          </div>
          <div className="flex flex-col items-center w-full text-center">
            <p>Additional Information</p>
            {status(2)}
          </div>
          <div className="flex flex-col items-center w-full text-center">
            <p>Review and Submit</p>
            {status(3)}
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingInformation;
