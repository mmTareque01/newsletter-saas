import { Text } from "../typography";
import Pagination from "./Pagination";

interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  className?: string;
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T extends Record<string, unknown>> {
  data?: T[];
  columns: Array<TableColumn<T>>;
}

export default function Table<T extends Record<string, unknown>>({
  data = [],
  columns
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key.toString()}
                className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
              >
                <Text className="text-blue-800">{column.header}</Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex % 2 === 0
                    ? "bg-white"
                    : "bg-[#F0FFFF] hover:bg-gray-100"
                }
              >
                {columns.map((column) => {
                  // Safely get the cell value
                  const cellValue = column.render 
                    ? column.render(row)
                    : column.key in row
                    ? (row[column.key as keyof T] as React.ReactNode)
                    : null;

                  return (
                    <td
                      key={column.key.toString()}
                      className="px-2 py-1 whitespace-nowrap border border-gray-100"
                    >
                      <Text className={column?.className}>
                        {cellValue}
                      </Text>
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-4 text-center text-sm text-gray-500"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination
        from={1}
        to={data.length}
        total={data.length}
        handleClick={(page: number) => console.log("Page clicked: ", page)}
      />
    </div>
  );
}