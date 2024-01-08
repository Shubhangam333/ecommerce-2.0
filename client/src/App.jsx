import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Wishlist from "./pages/Wishlist";
import Categorypage from "./pages/Categorypage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/:id" element={<Authentication />} />
      <Route path="/mywishlist" element={<Wishlist />} />
      <Route path="/:catname" element={<Categorypage />} />
    </Routes>
  );
}
export default App;
