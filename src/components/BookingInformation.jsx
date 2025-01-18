function BookingInformation() {
  return (
    <>
      <div className="w-full">
        <p className="text-2xl font-bold">Booking Information</p>

        {/* STEP NUMBERS */}
        <div className="flex items-center w-[60%] mx-auto mt-5 gap-1">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-lg border-[0.1rem] border-[#D9D9D9] rounded-full h-10 w-10 flex items-center justify-center">
              1
            </p>
          </div>
          <hr className="border-[0.01rem] border-[#D9D9D9] w-full" />
          <div className="flex flex-col items-center">
            <p className="font-semibold text-lg border-[0.1rem] border-[#D9D9D9] rounded-full h-10 w-10 flex items-center justify-center">
              2
            </p>
          </div>
          <hr className="border-[0.01rem] border-[#D9D9D9] w-full" />
          <div className="flex flex-col items-center">
            <p className="font-semibold text-lg border-[0.1rem] border-[#D9D9D9] rounded-full h-10 w-10 flex items-center justify-center">
              3
            </p>
          </div>
        </div>

        {/* STATUS */}
        <div className="flex items-center w-[85%] mx-auto gap-1 justify-between">
          <div className="flex flex-col items-center w-full text-center">
            <p>Passenger Details</p>
            <p className="text-[#A8A8A8] text-sm">Pending</p>
          </div>
          <div className="flex flex-col items-center w-full text-center">
            <p>Additional Information</p>
            <p className="text-[#A8A8A8] text-sm">Pending</p>
          </div>
          <div className="flex flex-col items-center w-full text-center">
            <p>Review and Submit</p>
            <p className="text-[#A8A8A8] text-sm">Pending</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingInformation;
