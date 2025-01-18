function Passengers() {
  return (
    <>
      <h2 className="text-lg font-semibold mt-5">Passenger Details</h2>
      <div className="w-full bg-[#F6F6F6] rounded-lg p-5 mt-2 flex flex-wrap gap-5">
        <div className="w-[26%] flex itmes-center justify-between mx-8">
          <p className="text-[#626262]">Full Name</p>
          <p className="font-semibold">Rachita Pradhan</p>
        </div>
        <div className="w-[26%] flex itmes-center justify-between mx-8">
          <p className="text-[#626262]">Date of Birth</p>
          <p className="font-semibold">14-10-2000</p>
        </div>
        <div className="w-[26%] flex itmes-center justify-between mx-8">
          <p className="text-[#626262]">Gender</p>
          <p className="font-semibold">Female</p>
        </div>
        <div className="w-[26%] flex itmes-center justify-between mx-8">
          <p className="text-[#626262]">Phone No.</p>
          <p className="font-semibold">9073622140</p>
        </div>
        <div className="w-[26%] flex itmes-center justify-between mx-8">
          <p className="text-[#626262]">Email Address</p>
          <p className="font-semibold">rach***@****.com</p>
        </div>
      </div>
    </>
  );
}

export default Passengers;
