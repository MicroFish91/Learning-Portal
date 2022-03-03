import { Route, Routes } from "react-router-dom";
import ContentWrapper from "./hoc/contentWrapper";
import Main from "./layouts/Main";
import CourseSearch from "./pages/CourseSearch";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<ContentWrapper Wrapper={Main} Content={Home} />}
        />
        <Route
          path="/courses"
          element={<ContentWrapper Wrapper={Main} Content={CourseSearch} />}
        />
      </Routes>
    </div>
  );
}

export default App;
