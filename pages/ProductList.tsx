import * as React from "react";
// import "../app/table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import Navbar from "../components/Navbar";
import Textarea from "../components/textarea/Textarea";

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
    accessorKey: "description",
    header: "Description",
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
    description: "",
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

const ProductList = () => {
  const columns = COLUMNS;
  const data: any = [...SAMPLE_DATA];
  

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='flex min-h-screen max-h-screen '>
      <div className=' w-1/5'> <Navbar /></div>
     

      <div className=' w-4/5  bg-slate-700 h-screen '>
        
    <div className="m-5 bg-teal-500 inline-block p-5 rounded-xl">
      {data && (
        <table className="">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border border-slate-600 p-4 bg-slate-800 text-white uppercase">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border border-slate-600 text-md p-5 w-32 ">
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
                  <td key={cell.id} className="border  border-slate-600 text-md p-5 w-32 text-center ">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          
          </tbody>
        </table>
      )}
    </div>
    </div>
    </div>
  );
};

export default ProductList;
