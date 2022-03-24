import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import HomePage from "./pages/HomePage";
import LeavePage from "./pages/LeavePage";
import Page404 from "./pages/Page404";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="gradient-bg-welcome min-h-screen">
        <NavBar />
        <div className="pt-12 flex justify-center items-center ">
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="leave" element={<LeavePage />} />
            <Route path="announcements" element={<AnnouncementsPage />}/>
              <Route
                path="*"
                element={<Page404/>}
              >
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
