import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const [url, setUrl] = useState();

  useEffect(() => {
    setUrl(
      pathname
        .split("/")
        .filter((p) => p != "")
        .slice(1)
    );
  }, [pathname]);
  return (
    <div className="py-4 px-4">
      {url &&
        url.map((p, index) =>
          index < url.length - 1 ? (
            <>
              <Link
                key={index}
                to={`/admin/${p}`}
                className="capitalize p-2 underline text-slate-500"
              >
                {p}
              </Link>
              <span>/</span>
            </>
          ) : (
            <span key={index} className="capitalize p-2 text-slate-500">
              {p}
            </span>
          )
        )}
    </div>
  );
};

export default Breadcrumb;
