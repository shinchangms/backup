import React, { Fragment } from "react";

// import "../app/globals.css";

import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
  RowData,
  Column,
  Table,
  ColumnDef,
} from "@tanstack/react-table";
// import "../app/table.css";
import Selecting from "../components/selecting/Selecting";
import Navbar from "../components/Navbar";

interface Person {
  _id: number;
  product_name: string;
  length: number;
  width: number;
  pick: number;
  reed: number;
  amount: number;
}

const SAMPLE_DATA = [
  {
    _id: "",
    // uuid: "",
    product_name: "product_name 1",
    length: 15,
    width: 25,
    pick: 70,
    reed: 100,
    amount: 200,
  },
  {
    _id: "",
    product_name: "product_name 2",
    length: 25,
    width: 17,
    pick: 80,
    reed: 105,
    amount: 150,
  },
  {
    _id: "",
    product_name: "product_name 3",
    length: 49,
    width: 34,
    pick: 75,
    reed: 120,
    amount: 250,
  },
  {
    _id: "",
    product_name: "product_name 4",
    length: 55,
    width: 10,
    pick: 60,
    reed: 95,
    amount: 300,
  },
  {
    _id: "",
    product_name: "product_name 5",
    length: 75,
    width: 50,
    pick: 100,
    reed: 130,
    amount: 280,
  },
];

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    addingRow: (data: any) => void;
    removeRow: (rowIndex: number, data: any) => void;
    total: (data: any) => void;
  }
}

const defaultColumn: Partial<ColumnDef<Person>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue();
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue);

    React.useEffect(() => {
      setValue(initialValue);
      table.options.meta?.updateData(index, id, value);
    }, [initialValue]);

    return (
      <input
        className=" text-base  py-2 w-32 bg-transparent text-center outline-none focus:border"
        value={value as number}
        onChange={(e) => {
          setValue(e.target.value);
          // console.log({ value });
        }}
        onKeyUp={() => {
          table.options.meta?.updateData(index, id, value);
        }}
      />
    );
  },
};

function UserTable() {
  const COLUMNS = [
    {
      accessorKey: "_id",
      header: "id",
    },

    {
      accessorKey: "product_name",
      header: "product_name",
      cell: <Selecting />,
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

    {
      accessorKey: "amount",
      header: "Amount",
    },
  ];

  const columns = COLUMNS;

  const [data, setData] = React.useState(SAMPLE_DATA);

  const table = useReactTable({
    data,

    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData((old: any) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              let pick = Number(row["pick"]) || 0;
              let reed = Number(row["reed"]) || 0;

              return {
                ...old[rowIndex]!,
                [columnId]: value,
                ["amount"]: pick * reed,
                ["_id"]: rowIndex + 1,
              };
            }
            // console.log("uuid added", data);
            return row;
          })
        );
      },

      addingRow: (data) => {
        const emptyObject = {
          _id: "",
          // ["uuid"]: uuid(),
          product_name: "product name",
          length: 1,
          width: 1,
          pick: 1,
          reed: 1,
          amount: 1,
        };

        setData([...data, emptyObject]);
      },
      removeRow: (row: any, data) => {
        const selectedId = row.original._id;
        const filteredData = data.filter((d) => d._id !== selectedId);
        setData(filteredData);
      },
      total: (data) => {
        const totalAmount = data
          .map((item) => item.amount)
          .reduce((prev, curr) => prev + curr, 0);

        // console.log("total amount", totalAmount);
        return totalAmount;
      },
    },

    debugTable: true,
  });

  return (

    <div className='flex min-h-screen max-h-screen '>
      <div className=' w-1/5'> <Navbar /> </div>
     

      <div className=' w-4/5  bg-slate-700 h-screen '>
    <div className=" bg-teal-100 h-screen pl-5 pt-5">
      <div className="red-border">
        <div className="selecting pb-5">
          <p className="  text-2xl font-bold pb-3">USER :</p>
          <Selecting />
        </div>
        <div className=" bg-teal-500 inline-block p-5 rounded-xl">
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        className="border border-slate-600 p-4 bg-slate-800 text-white uppercase"
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
                  <th className="p-4 px-6 text-white uppercase"></th>
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <Fragment key={row.id}>
                    <tr>
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            className=" border border-slate-600 text-md p-0 w-32 "
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                      <td className=" text-center  border-slate-500 ">
                        <button
                          className=" text-lg font-bold text-white hover:scale-150 transition "
                          onClick={() =>
                            table.options.meta?.removeRow(row, data)
                          }
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
              <tr className="items-center">
                <td className="total-row"></td>
                <td className="total-row"></td>
                <td className="total-row"></td>
                <td className="total-row"></td>
                <td className="total-row"></td>
                <td className="border border-slate-600 py-4 font-bold text-right ">
                  Total :
                </td>
                <td className="border border-slate-600 py-4 font-bold text-center w-40 ">
                  Rs. {table.options.meta?.total(data)} {"/-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="red-border">
        <button
          className=" bg-slate-900 rounded-md px-6 py-2 text-white hover:bg-teal-500 hover:scale-110 transition"
          onClick={() => table.options.meta?.addingRow(data)}
        >
          <span> Add Product</span>
        </button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default UserTable;
