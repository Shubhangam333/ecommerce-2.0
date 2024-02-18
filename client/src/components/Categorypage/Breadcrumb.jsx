import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  console.log("p", pathnames);
  return (
    <nav className="my-4 mb-6">
      <ul className="flex gap-2 text-sm flex-wrap">
        <li>
          <Link to="/" className="hover:text-[#018DCB]  text-gray-600">
            Home /
          </Link>
        </li>
        {pathnames.map((path, index) => (
          <li key={index}>
            {index === pathnames.length - 1 && (
              <span>{path.charAt(0).toUpperCase() + path.slice(1)}</span>
            )}
            {index === 0 && (
              <Link
                to={`/${path}`}
                className="hover:text-[#018DCB]  text-gray-600"
              >
                {path.charAt(0).toUpperCase() + path.slice(1)} /
              </Link>
            )}
            {index >= 1 && index < pathnames.length - 1 && (
              <Link
                to={`/${pathnames[index - 1]}/${path}`}
                className="hover:text-[#018DCB]  text-gray-600"
              >
                {path.charAt(0).toUpperCase() + path.slice(1)} /
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
