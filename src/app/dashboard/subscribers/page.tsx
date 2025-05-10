"use client";
import { Table } from "@/components/table/index";
import { Title } from "@/components/typography";
import { useState } from "react";

export default function SubscribersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Example data
  const subscribers = [
    { id: 1, name: "John Doe", status: "active", email: "user1@example.com" },
    { id: 2, email: "user2@example.com", name: "Jane Smith", status: "active" },
    {
      id: 3,
      email: "user3@example.com",
      name: "Jane Smith",
      status: "blocked",
    },
    // ... more data
  ];

  const columns = [
    { key: "email", header: "Email", className: "text-center" },
    { key: "name", header: "Name", className: "text-center" },
    {
      key: "status",
      header: "Status",
      className: "text-center",
      render: (row: any) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            row.status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
      {/* <h1 className="text-2xl font-bold text-black mb-6">Subscribers</h1> */}
      <Title className="mb-4">Subscribers List</Title>

      <Table data={subscribers} columns={columns} />

      {/* {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      )} */}
    </div>
  );
}
