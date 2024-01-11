import { useSelector } from "react-redux";
import MenuBtn from "./MenuBtn";

const MainContainer = () => {
  const { isActive } = useSelector((state) => state.dashboard);
  return (
    <section
      className={`dashboard-layout-content  py-2 translate-x-0 duration-1000 min-h-screen  bg-yellow-400 ${
        isActive ? "translate-x-[250px]" : ""
      }`}
    >
      <MenuBtn />
    </section>
  );
};

export default MainContainer;
