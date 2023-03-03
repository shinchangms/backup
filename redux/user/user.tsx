"use client";

import React from "react";
import { useState } from "react";

import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
} from "@tanstack/react-table";
// import "../../app/table.css";

// import { DEFAULTCOLUMN } from "../../app/Columns/transactColumns";

import { selectUserDetails } from "./usersSlice";
import { useAppSelector } from "../store/hook";

import SingleReceiver from "./SingleReceiver";
import SampleTable from "./SampleTable";

export const DEFAULTCOLUMN = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "receiver",
    header: "Receiver",
  },

  {
    accessorKey: "net_amount",
    header: () => "Net Amount",
  },
];


const User = () => {
  const data: any = useAppSelector(selectUserDetails);

  const columns = React.useMemo(() => [...DEFAULTCOLUMN], []);

  const table = useReactTable({
    data,
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [tags, setTags] = useState([<div></div>]);

  const openModal = ({ row }: any) => {
    setIsOpen(true);
    let dataObj = Object.assign({}, row.original);
    const singleData = [];
    singleData.push(dataObj);
    const productDetails = singleData[0].product;
    console.log("ROW DETAILS", singleData);
    console.log("product details", productDetails);

    setTags([
      ...tags,
      <div className=" bg-red-300 shadow-xl p-10 rounded-xl">
        <p className="font-bold">RECEIVER DETAILS</p>
        <SingleReceiver singleData={singleData} />
        {/* <p className="bold">ORDER DETAILS:</p>
        <SampleTable productDetails={productDetails} /> */}
      </div>,
    ]);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTags([]);
  };

  return (
    <div className=" flex justify-center items-center px-24  border-slate-800 ">
      <div className=" bg-teal-400 p-9 rounded-xl">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      className="border border-slate-600 p-4 bg-slate-800 text-white"
                      key={header.id}
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

                <th className="border border-slate-600 p-4 bg-slate-800 text-white">
                  actions
                </th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className="border border-slate-600 p-4 "
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}

                  <td className="border border-slate-600 p-4 ">
                    <div>
                      <button
                        className="outline-none  bg-red-500 text-white mx-4 shadow-md rounded-md px-4 hover:bg-teal-300 hover:text-red-500 "
                        onClick={() => openModal({ row })}
                      >
                        View
                      </button>
                      {isOpen && (
                        <div className="modal">
                          <div className="modal-content">
                            <button
                              onClick={closeModal}
                              className=" text-2xl float-right p-3 hover:rotate-90 transition"
                            >
                              ✖
                            </button>
                            {/* <OpenModal singleData={singleData} /> */}

                            {tags}
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
