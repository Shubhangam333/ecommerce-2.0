import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Wishlist from "./pages/Wishlist";
import Categorypage from "./pages/Categorypage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetProfileQuery } from "./redux/api/auth/authapi";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { setUser, removeUser } from "./redux/slice/authSlice";

function App() {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);

  console.log(userId);

  const {
    data: user,
    error,
    isFetching,
  } = useGetProfileQuery(userId, { pollingInterval: 20000 });

  console.log(isFetching);

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(removeUser());
    }
  }, [error, dispatch]);

  return (
    <>
      {isFetching ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/:id" element={<Authentication />} />
            <Route path="/mywishlist" element={<Wishlist />} />
            <Route path="/:catname" element={<Categorypage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
export default App;
