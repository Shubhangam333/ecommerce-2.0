import { Link } from "react-router-dom";

const SubMenu = ({ subMenuItem, subMenu }) => {
  return (
    <ul className={`${subMenu ? "block" : "hidden"}`}>
      {subMenuItem.map((item, index) => (
        <li key={index}>
          <Link to={`${item.path}`}>{item.title} </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
