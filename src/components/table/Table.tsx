import { Text } from "../typography";
import Pagination from "./Pagination";

export default function Table({ data = [], columns }: any) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-100">
          <tr>
            {columns.map((column: any) => (
              <th
                key={column.key}
                className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
              >
                <Text className="text-blue-800">{column.header}</Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((row: any, rowIndex: number) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex % 2 === 0
                    ? "bg-white"
                    : "bg-[#F0FFFF] hover:bg-gray-100"
                }
              >
                {columns.map((column: any) => (
                  <td
                    key={column.key}
                    className="px-2 py-1 whitespace-nowrap border border-gray-100"
                  >
                    <Text className={column?.className}>
                      {column.render ? column.render(row) : row[column.key]}
                    </Text>
                  </td>
                ))}
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
        links={[
          { label: "1", url: "#" },
          { label: "1", url: "#" },
          { label: "1", url: "#" },
          { label: "1", url: "#" },
          { label: "1", url: "#" },
        ]}
        handleClick={(e: any) => {
          console.log("Page clicked: ", e);
        }}
      />
    </div>
  );
}
