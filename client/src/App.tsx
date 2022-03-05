import { Route, Routes } from "react-router-dom";
import ContentWrapper from "./hoc/contentWrapper";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import MyCourses from "./pages/MyCourses";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<ContentWrapper Wrapper={Main} Content={Home} />}
        />
        <Route
          path="/my-courses"
          element={<ContentWrapper Wrapper={Main} Content={MyCourses} />}
        />
      </Routes>
    </div>
  );
}

export default App;
