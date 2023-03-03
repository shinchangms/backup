import React, { Fragment } from "react";
import { useState } from "react";

import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
} from "@tanstack/react-table";

// import "../app/table.css";

// import { USERCOLUMN1 } from "../app/Columns/userColumn1";

const USERCOLUMN1 = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "street",
    header: "Street",
  },

  {
    accessorKey: "city",
    header: () => "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "zipcode",
    header: "Zip Code",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];


const SingleReceiver = ({ singleData }) => {
  const columns = React.useMemo(() => [...USERCOLUMN1], []);
  //const [data] = React.useState(() => makeData(1));

  //important
  // const wWidth = singleData[0].product[0].pick;
  // const rReed = singleData[0].product[0].reed;

  // console.log("single receiver data", wWidth, rReed);

  // console.log(wWidth * rReed);

  const data = [...singleData];

  // const reed = data[0].product[0].reed;
  // const pick = data[0].product[0].pick; // let entries = Object.entries(data[0]);

  // const amount = reed * pick;

  // console.log("reed", reed);
  // console.log("pick", pick);
  // console.log("amount", amount);

  const table = useReactTable({
    data,
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="p-2">
      <div className="h-2" />

      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className="border border-slate-600 p-4 bg-slate-800 text-white"
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="border border-slate-600 p-4 ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SingleReceiver;
