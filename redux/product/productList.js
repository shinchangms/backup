import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import {} from "./productSlice";

import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { COLUMNS } from "../../app/column";
//import { SAMPLE_DATA } from "../app/SAMPLE_DATA.json";

const SAMPLE_DATA = [
  {
    id: 1,
    name: "Aubrie",
    length: "15",
    width: "1",
    pick: "70",
    reed: "100",
  },
  {
    id: 2,
    name: "Lurleen",
    length: "25",
    width: "17",
    pick: "80",
    reed: "105",
  },
  {
    id: 3,
    name: "Cassandra",
    length: "49",
    width: "34",
    pick: "75",
    reed: "120",
  },
  {
    id: 4,
    name: "Cherry",
    length: "55",
    width: "10",
    pick: "60",
    reed: "95",
  },
  {
    id: 5,
    name: "Crissie",
    length: "75",
    width: "50",
    pick: "100",
    reed: "130",
  },
];

const ProductList = () => {
  const columns = COLUMNS;
  const data = [...SAMPLE_DATA];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
