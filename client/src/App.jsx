import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Wishlist from "./pages/Wishlist";
import Categorypage from "./pages/Categorypage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetProfileQuery } from "./redux/api/auth/authapi";
import { setUser, removeUser, setUserId } from "./redux/slice/authSlice";
import Dashboardpage from "./pages/Admin/Dashboardpage";
import CreateProduct from "./components/Admin/Products/CreateProduct";
import ProductDashboard from "./components/Admin/Products/ProductDashboard";

function App() {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);

  const {
    data: user,
    error,
    isFetching,
  } = useGetProfileQuery(userId, { pollingInterval: 900000 });

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(removeUser());
      dispatch(setUserId(""));
    }
  }, [error, dispatch]);

  return (
    <>
      {isFetching ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/auth/:id"
              element={<Authentication isAuthenticated={user ? true : false} />}
            />
            <Route path="/mywishlist" element={<Wishlist />} />
            <Route path="/:catname" element={<Categorypage />} />
            <Route path="/admin/dashboard" element={<Dashboardpage />}>
              <Route path="create-product" element={<CreateProduct />} />
              <Route path="products" element={<ProductDashboard />} />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}
export default App;
