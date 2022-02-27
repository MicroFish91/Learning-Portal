import { Route, Routes } from "react-router-dom";
import ContentWrapper from "./hoc/contentWrapper";
import Main from "./layouts/Main";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<ContentWrapper Wrapper={Main} Content={Dashboard} />}
        />
      </Routes>
    </div>
  );
}

export default App;
