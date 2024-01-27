import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Categorypage from "./pages/Categorypage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetProfileQuery } from "./redux/api/auth/authapi";
import { setUser, removeUser } from "./redux/slice/authSlice";
import Dashboardpage from "./pages/Admin/Dashboardpage";
import CreateProduct from "./components/Admin/Products/CreateProduct";
import ProductDashboard from "./components/Admin/Products/ProductDashboard";
import CategoryDashboard from "./components/Admin/Category/CategoryDashboard";
import CreateCategory from "./components/Admin/Category/CreateCategory";
import StyleDashboard from "./components/Admin/Style/StyleDashboard";
import CreateStyle from "./components/Admin/Style/CreateStyle";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import PrivateRoute from "./pages/User/PrivateRoute";
import Mainwishlist from "./components/Wishlist/Mainwishlist";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import Loader from "./components/Loader/Loader";
import CheckOutContainer from "./components/Checkout/CheckOutContainer";
import Payment from "./components/Payment/Payment";
import Profile from "./pages/User/Profile";
import OrderDetails from "./components/Profile/OrderInfo/OrderDetails";
import Orders from "./pages/User/Orders";

function App() {
  const dispatch = useDispatch();
  const { userId, section, user } = useSelector((state) => state.auth);

  const {
    data: userinfo,
    error,
    isFetching,
  } = useGetProfileQuery(userId, { pollingInterval: 900000 });

  useEffect(() => {
    if (userinfo) {
      dispatch(setUser(userinfo));
    }
  }, [userinfo, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(removeUser());
    }
  }, [error, dispatch]);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Navigate to="/men" />} />
            <Route path={`/${section}`} element={<Home />} />
            <Route
              path={`/${section}/:subcatname/:productname`}
              element={<ProductDetails />}
            />
            <Route
              path="/auth/:id"
              element={<Authentication isAuthenticated={user ? true : false} />}
            />

            <Route path={`/${section}/:catname`} element={<Categorypage />} />
            <Route
              path="/user"
              element={<PrivateRoute isAuthenticated={user ? true : false} />}
            >
              <Route path="profile" element={<Profile />} />
              <Route path="orders" element={<Orders />} />
              <Route path="order/:orderId" element={<OrderDetails />} />
              <Route path="mywishlist" element={<Mainwishlist />} />
              <Route path="cart" element={<Cart />} />
              <Route path="delivery-address" element={<Address />} />
              <Route path="checkout" element={<CheckOutContainer />} />
              <Route path="success" element={<Payment />} />
              <Route path="cancel" element={<Payment />} />
            </Route>
            <Route path="/admin/dashboard" element={<Dashboardpage />}>
              <Route path="create-product" element={<CreateProduct />} />
              <Route path="products" element={<ProductDashboard />} />
              <Route path="category" element={<CategoryDashboard />} />
              <Route path="create-category" element={<CreateCategory />} />
              <Route path="styles" element={<StyleDashboard />} />
              <Route path="create-style" element={<CreateStyle />} />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}
export default App;
