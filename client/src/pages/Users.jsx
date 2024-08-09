import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import data from "../api/MOCK_DATA.json";

function Users() {
  const columns = [
    {
      header: "ID",
      accessorkey: 'id',
    },
    {
      header: "Prueba",
      accessorkey: "exam",
    },
    {
      header: "precio",
      accessorkey: "pricec",
    },
    {
      header: "condiciones",
      accessorkey: "preanalitic",
    },
    {
      header: "Tiempo",
      accessorkey: "time",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  
  console.log(table.getState()) //access the entire internal state
console.log(table.getState().rowSelection) //access just the row selection state
  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
        {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

