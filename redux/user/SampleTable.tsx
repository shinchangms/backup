import * as React from "react";
import "../app/table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

export const COLUMNS = [
  {
    accessorKey: "_id",
    header: "id",
  },

  {
    accessorKey: "product_name",
    header: "product_name",
  },
  {
    accessorKey: "length",
    header: "Length",
  },
  {
    accessorKey: "width",
    header: "width",
  },
  {
    accessorKey: "pick",
    header: "Pick",
  },
  {
    accessorKey: "reed",
    header: "Reed",
  },
];

const SAMPLE_DATA = [
  {
    id: 1,
    product_name: "product_name 1",
    length: "15",
    width: "1",
    pick: "70",
    reed: "100",
  },
  {
    id: 2,
    product_name: "product_name 2",
    length: "25",
    width: "17",
    pick: "80",
    reed: "105",
  },
  {
    id: 3,
    product_name: "product_name 3",
    length: "49",
    width: "34",
    pick: "75",
    reed: "120",
  },
  {
    id: 4,
    product_name: "product_name 4",
    length: "55",
    width: "10",
    pick: "60",
    reed: "95",
  },
  {
    id: 5,
    product_name: "product_name 5",
    length: "75",
    width: "50",
    pick: "100",
    reed: "130",
  },
];

const SampleTable = ({ productDetails }: any) => {
  const columns = COLUMNS;
  const data: any = [...SAMPLE_DATA];
  // const data = productDetails;

  // console.log("sample data", data);
  // console.log("single product details", productDetails);

  //console.log("sample data", singleData);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {data && (
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
            <tr>Total Row:</tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SampleTable;
