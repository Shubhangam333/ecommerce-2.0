import { useState } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { useFilters, usePagination, useSortBy, useTable } from "react-table";
import OrderHeader from "./OrderHeader";
import { Link } from "react-router-dom";

const UserOrderTable = ({ columns, data, tableFor }) => {
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

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("totalAmount", value);
    setFilterInput(value);
  };

  return (
    <div className="flex flex-col gap-4">
      {tableFor === "userorders" && (
        <OrderHeader
          filterInput={filterInput}
          handleFilterChange={handleFilterChange}
        />
      )}

      <h2 className="text-lg font-bold text-[#E11B23] capitalize">
        {tableFor}
      </h2>

      <table {...getTableProps()}>
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
              <th>View Order</th>
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
                <td>
                  <Link
                    to={`/user/order/${row.cells[0].value}`}
                    className="text-red-600"
                  >
                    View Order Details
                  </Link>
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

export default UserOrderTable;
