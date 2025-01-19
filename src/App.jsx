import { BrowserRouter, Route, Routes } from "react-router-dom";
import PassengerDeatils from "./components/Passenger Details/PassengerDetails";
import Sidebar from "./components/Sidebar";
import AdditionalInformation from "./components/Additional Information/AdditionalInformation";
import ReviewAndSubmit from "./components/Review and Submit/ReviewAndSubmit";
import { AppProvider } from "./components/Context/AppContext";
import Submission from "./components/Submission/Submission";
import Loading from "./components/Loading";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

function App() {
  useEffect(() => {
    AOS.init({
      once: true, // Animation triggers only once
    });
  }, []);

  return (
    <>
      <div className="flex relative">
        <Sidebar />
        <div className="w-full xl:ml-[20%] xl:mt-0 mt-14 py-5 px-8">
          <BrowserRouter>
            <AppProvider>
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
                <Route path="/submission" element={<Submission />}></Route>
              </Routes>
            </AppProvider>
          </BrowserRouter>
        </div>
        {/* <Loading /> */}
      </div>

      {/* <BrowserRouter>
        <AppProvider>
          <div className="flex relative">
            <Sidebar />
            <div className="w-full ml-[20%] py-5 px-8">
              <Routes>
                <Route path="/" element={<PassengerDeatils />} />
                <Route
                  path="/additional-information"
                  element={<AdditionalInformation />}
                />
                <Route path="/review-submit" element={<ReviewAndSubmit />} />
                <Route path="/submission" element={<Submission />} />
              </Routes>
            </div>
            
          </div>
        </AppProvider>
      </BrowserRouter> */}
    </>
  );
}

export default App;
