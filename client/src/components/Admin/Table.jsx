import { useState } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { useFilters, usePagination, useSortBy, useTable } from "react-table";
import CategoryHeader from "./Category/CategoryHeader";
import { MdDelete } from "react-icons/md";
import StyleHeader from "./Style/StyleHeader";
import ProductHeader from "./Products/ProductHeader";
import OrderHeader from "../Profile/OrderHeader";
import { Link } from "react-router-dom";
import AdminOrderHeader from "./Orders/AdminOrderHeader";

const Table = ({ columns, data, tableFor, handleDeleteItem }) => {
  const options = {
    columns,
    data,
    initialState: {
      pageSize: 6,
    },
  };

  const [showPagination, setShowPagination] = useState(true);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setFilter,
    nextPage,
    pageCount,
    state: { pageIndex },
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(options, useFilters, useSortBy, usePagination);

  const [filterInput, setFilterInput] = useState("");
  const [orderfilterInput, setOrderFilterInput] = useState("");

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("title", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    setFilterInput(value);
  };
  const handleOrderFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("user", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    setFilterInput(value);
  };

  return (
    <div className="flex flex-col gap-4">
      {tableFor === "categories" && (
        <CategoryHeader
          filterInput={filterInput}
          handleFilterChange={handleFilterChange}
        />
      )}
      {tableFor === "styles" && (
        <StyleHeader
          filterInput={filterInput}
          handleFilterChange={handleFilterChange}
        />
      )}
      {tableFor === "products" && (
        <ProductHeader
          filterInput={filterInput}
          handleFilterChange={handleFilterChange}
        />
      )}
      {tableFor === "userorders" && (
        <OrderHeader
          filterInput={filterInput}
          handleFilterChange={handleFilterChange}
        />
      )}
      {tableFor === "adminorders" && (
        <AdminOrderHeader
          filterInput={filterInput}
          handleFilterChange={handleOrderFilterChange}
        />
      )}

      <h2 className="text-3xl font-bold text-[#E11B23] capitalize">
        {tableFor}
      </h2>

      <table {...getTableProps()} className="basis-[80%]">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={index}
                >
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>
                      {" "}
                      {column.isSortedDesc ? (
                        <AiOutlineSortDescending />
                      ) : (
                        <AiOutlineSortAscending />
                      )}
                    </span>
                  )}
                </th>
              ))}
              <th>Edit Info</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => (
                  <td {...cell.getCellProps()} key={index}>
                    {cell.render("Cell")}
                  </td>
                ))}
                <td className="flex gap-2 text-sm">
                  {tableFor !== "userorders" ||
                    (tableFor !== "adminorders" && (
                      <button
                        className="text-red-600"
                        onClick={() => handleDeleteItem(row.cells[0].value)}
                      >
                        <MdDelete />
                      </button>
                    ))}
                  {tableFor === "categories" && (
                    <Link
                      to={`/admin/dashboard/edit-category/${row.cells[0].value}`}
                      className="bg-red-500 text-white px-2 rounded-lg"
                    >
                      Edit
                    </Link>
                  )}
                  {tableFor === "styles" && (
                    <Link
                      to={`/admin/dashboard/edit-style/${row.cells[0].value}`}
                      className="bg-red-500 text-white px-2 rounded-lg"
                    >
                      Edit
                    </Link>
                  )}
                  {tableFor === "adminorders" && (
                    <Link
                      to={`/admin/dashboard/order/${row.cells[0].value}`}
                      className="bg-red-500 text-white px-2 rounded-lg"
                    >
                      View Orders
                    </Link>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showPagination && (
        <div className="flex items-center self-center gap-2">
          <button
            disabled={!canPreviousPage}
            onClick={previousPage}
            className="bg-[#17b987] px-4 py-1 rounded-full text-white disabled:bg-gray-500"
          >
            Prev
          </button>
          <span className="text-xl">{`${pageIndex + 1} of ${pageCount}`}</span>
          <button
            disabled={!canNextPage}
            onClick={nextPage}
            className="bg-[#17b987] px-4 py-1 rounded-full text-white disabled:bg-gray-500"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
