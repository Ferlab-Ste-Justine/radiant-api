import * as React from "react";
import {
  ColumnDef,
  flexRender,
  useReactTable,
  getCoreRowModel,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { cn } from "@/lib/utils";

import { DoubleLeftOutlinedIcon, LeftOutlinedIcon, RightOutlinedIcon } from './icons';
import { Button } from './button';

type TableProps<TData> = {
  className?: string;
  total: number;
  columns: ColumnDef<TData, any>[];
  data: TData[];
};

const Table = React.forwardRef<HTMLTableElement, TableProps<any>>(
  ({ className, columns, total, data }, ref) => {
    const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 1,
      pageSize: 20,
    });
    const table = useReactTable({
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: setPagination,
      state: { pagination },
    });

    return (
      <div>
        <div className={cn("w-full min-w-max text-left")}>
          Results 1-10 of 4

        </div>
        <table
          className={cn("w-full min-w-max table-auto text-left", className)}
          ref={ref}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border bg-gray-100 border-gray-150 p-2 font-normal text-left"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              console.log("rows", row); //TODO: to remove
              const trClassName = row.index % 2 != 0 ? "bg-gray-50" : "";

              return (
                <tr key={row.id} className={cn(trClassName)}>
                  {row.getVisibleCells().map((cell) => {
                    console.log("cell", cell); //TODO: to remove

                    return (
                      <td
                        key={cell.id}
                        className="border border-gray-100 p-2 font-normal text-left"
                      >
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
        <div className="flex justify-end items-center gap-2">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <Button
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <DoubleLeftOutlinedIcon /> First
          </Button>
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <LeftOutlinedIcon />
             Prev.
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
             Next <RightOutlinedIcon />
          </Button>
        </div>
      </div>
    );
  }
);

Table.displayName = "Table";

export { Table };
