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
    accessorKey: "id",
    header: "id",
  },

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
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "postal_code",
    header: "Postal Code",
  },
  {
    accessorKey: "mobile_no",
    header: "Mobile No",
  },
  {
    accessorKey: "email_id",
    header: "Email Id",
  },
];

const SAMPLE_DATA = [
  {
    id: 1,
    name: "joseph",
    street: "Vivekanda street",
    city: "salem",
    state: "Tamil Nadu",
    postal_code: "600028",
    mobile_no: "1234567890",
    email_id:"abc@xyz.com"
  },
  {
    id: 2,
    name: "joseph",
    street: "",
    city: "15",
    state: "1",
    postal_code: "70",
    mobile_no: "100",
    email_id:""
  },
  {
    id: 3,
    name: "joseph",
    street: "",
    city: "15",
    state: "1",
    postal_code: "70",
    mobile_no: "100",
    email_id:""
  },
  
];

const UserList = () => {
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
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border border-slate-600 p-4 bg-slate-800 text-white uppercase">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border border-slate-600 text-md p-2 w-32">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
                <th className="border border-slate-600 text-md p-2 w-32"></th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border  border-slate-600 text-md p-0 w-32 text-center ">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}

                <td className="border border-slate-600 p-4 ">
                    <div>
                      <button
                       className=" w-20  bg-slate-900 hover:bg-slate-900/60 hover:scale-110 transition ease-in-out text-white font-bold py-2 mx-10 rounded-lg float-right "
                        // onClick={() => openModal({ row })}
                      >
                        View
                      </button>
                      
                    </div>
                  </td>  
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

export default UserList;
