// import * as React, { useState } from "react"
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function PreviousOrder() {
  const [orders, setOrders] = useState([
    {
      id: "ORD123",
      bikeModel: "Mountain Bike",
      bikeCompany: "Acme Bikes",
      price: 599.99,
      quantity: 2,
      orderDate: "2023-06-01",
      deliveryDate: "2023-06-15",
    },
    {
      id: "ORD456",
      bikeModel: "Road Bike",
      bikeCompany: "Velocity Cycles",
      price: 899.99,
      quantity: 1,
      orderDate: "2023-07-01",
      deliveryDate: "2023-07-15",
    },
    {
      id: "ORD789",
      bikeModel: "Electric Bike",
      bikeCompany: "Eco Rides",
      price: 1499.99,
      quantity: 1,
      orderDate: "2023-08-01",
      deliveryDate: "2023-08-15",
    },
  ]);
  const [editingOrder, setEditingOrder] = useState(null);
  const handleEdit = (order) => {
    setEditingOrder(order);
  };
  const handleSave = (updatedOrder) => {
    setOrders(
      orders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
    setEditingOrder(null);
  };
  const handleCancel = () => {
    setEditingOrder(null);
  };
  const handleDelete = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="border shadow-sm rounded-lg p-2">
        <Table>
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead>Bike Model</TableHead>
              <TableHead>Bike Company</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Quantity</TableHead>
              <TableHead className="hidden md:table-cell">Order Date</TableHead>
              <TableHead className="hidden md:table-cell">
                Delivery Date
              </TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                {editingOrder?.id === order.id ? (
                  <>
                    <TableCell className="font-medium">
                      <Input
                        type="text"
                        defaultValue={order.id}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        defaultValue={order.bikeModel}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        defaultValue={order.bikeCompany}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Input
                        type="number"
                        defaultValue={order.price}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Input
                        type="number"
                        defaultValue={order.quantity}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Input
                        type="text"
                        defaultValue={order.orderDate}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Input
                        type="text"
                        defaultValue={order.deliveryDate}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSave(editingOrder)}
                        >
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                      </div>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.bikeModel}</TableCell>
                    <TableCell>{order.bikeCompany}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      ${order.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {order.quantity}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {order.orderDate}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {order.deliveryDate}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(order)}
                        >
                          <PencilIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(order.id)}
                          className="text-red-500"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
