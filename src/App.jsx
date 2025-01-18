import { BrowserRouter, Route, Routes } from "react-router-dom";
import PassengerDeatils from "./components/Passenger Details/PassengerDetails";
import Sidebar from "./components/Sidebar";
import AdditionalInformation from "./components/Additional Information/AdditionalInformation";
import ReviewAndSubmit from "./components/Review and Submit/ReviewAndSubmit";
import { AppProvider } from "./components/Context/AppContext";

function App() {
  return (
    <>
      <div className="flex relative">
        <Sidebar />
        <div className="w-full ml-[20%] py-5 px-8">
          <AppProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<PassengerDeatils />} />
                <Route
                  path="/additional-information"
                  element={<AdditionalInformation />}
                ></Route>
                <Route
                  path="/review-submit"
                  element={<ReviewAndSubmit />}
                ></Route>
              </Routes>
            </BrowserRouter>
          </AppProvider>
        </div>
      </div>
    </>
  );
}

export default App;
