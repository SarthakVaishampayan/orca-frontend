
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function SalesHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState("orderId")
  const [sortDirection, setSortDirection] = useState("asc")
  const [dateRange, setDateRange] = useState({ start: null, end: null })
  const [selectedProduct, setSelectedProduct] = useState("")
  const [selectedCustomer, setSelectedCustomer] = useState("")
  const sales = [
    {
      orderId: "ORD001",
      customerName: "John Doe",
      product: "Electric Scooter",
      quantity: 1,
      price: 499.99,
      date: "2023-05-01",
    },
    {
      orderId: "ORD002",
      customerName: "Jane Smith",
      product: "Electric Scooter",
      quantity: 2,
      price: 499.99,
      date: "2023-06-15",
    },
    {
      orderId: "ORD003",
      customerName: "Bob Johnson",
      product: "Electric Scooter",
      quantity: 1,
      price: 499.99,
      date: "2023-07-20",
    },
    {
      orderId: "ORD004",
      customerName: "Sarah Lee",
      product: "Electric Scooter",
      quantity: 3,
      price: 499.99,
      date: "2023-08-01",
    },
    {
      orderId: "ORD005",
      customerName: "Tom Wilson",
      product: "Electric Scooter",
      quantity: 1,
      price: 499.99,
      date: "2023-09-01",
    },
    {
      orderId: "ORD006",
      customerName: "Emily Chen",
      product: "Electric Scooter",
      quantity: 2,
      price: 499.99,
      date: "2023-10-01",
    },
    {
      orderId: "ORD007",
      customerName: "Michael Lee",
      product: "Electric Scooter",
      quantity: 1,
      price: 499.99,
      date: "2023-11-01",
    },
    {
      orderId: "ORD008",
      customerName: "Jessica Patel",
      product: "Electric Scooter",
      quantity: 3,
      price: 499.99,
      date: "2023-12-01",
    },
  ]
  const filteredSales = useMemo(() => {
    let filtered = sales
    if (searchTerm) {
      filtered = filtered.filter(
        (sale) =>
          sale.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sale.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sale.product.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }
    if (dateRange.start && dateRange.end) {
      filtered = filtered.filter((sale) => {
        const saleDate = new Date(sale.date)
        return saleDate >= new Date(dateRange.start) && saleDate <= new Date(dateRange.end)
      })
    }
    if (selectedProduct) {
      filtered = filtered.filter((sale) => sale.product === selectedProduct)
    }
    if (selectedCustomer) {
      filtered = filtered.filter((sale) => sale.customerName === selectedCustomer)
    }
    return filtered.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
      return 0
    })
  }, [searchTerm, sortColumn, sortDirection, dateRange.start, dateRange.end, selectedProduct, selectedCustomer])
  const totalSales = filteredSales.length
  const totalRevenue = filteredSales.reduce((acc, sale) => acc + sale.price, 0)
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }
  const handleDateRangeChange = (start, end) => {
    setDateRange({ start, end })
  }
  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value)
  }
  const handleCustomerChange = (e) => {
    setSelectedCustomer(e.target.value)
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Sales History</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="search" className="block font-medium mb-2">
              Search
            </label>
            <Input
              id="search"
              type="text"
              placeholder="Search by order ID, customer, or product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="sort-by" className="block font-medium mb-2">
              Sort By
            </label>
            <Select
              id="sort-by"
              value={sortColumn}
              className="w-full"
              onValueChange={(e) => handleSort(e.target.value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select sort option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="orderId">Order ID</SelectItem>
                <SelectItem value="customerName">Customer Name</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="quantity">Quantity</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="date">Date</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="filter-by" className="block font-medium mb-2">
              Filter By
            </label>
            <Select id="filter-by" value={selectedProduct} className="w-full" onValueChange={handleProductChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Products">All Products</SelectItem>
                <SelectItem value="Electric Scooter">Electric Scooter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-gray-500 font-medium">Total Sales</p>
              <p className="text-2xl font-bold">{totalSales}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Total Revenue</p>
              <p className="text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Orders</p>
              <p className="text-2xl font-bold">{totalSales}</p>
            </div>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer" onClick={() => handleSort("orderId")}>
                Order ID{" "}
                {sortColumn === "orderId" && (
                  <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("customerName")}>
                Customer Name{" "}
                {sortColumn === "customerName" && (
                  <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("product")}>
                Product{" "}
                {sortColumn === "product" && (
                  <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>
                )}
              </TableHead>
              <TableHead className="cursor-pointer text-right" onClick={() => handleSort("quantity")}>
                Quantity{" "}
                {sortColumn === "quantity" && (
                  <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>
                )}
              </TableHead>
              <TableHead className="cursor-pointer text-right" onClick={() => handleSort("price")}>
                Price{" "}
                {sortColumn === "price" && (
                  <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("date")}>
                Date{" "}
                {sortColumn === "date" && <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSales.map((sale) => (
              <TableRow key={sale.orderId}>
                <TableCell>{sale.orderId}</TableCell>
                <TableCell>{sale.customerName}</TableCell>
                <TableCell>{sale.product}</TableCell>
                <TableCell className="text-right">{sale.quantity}</TableCell>
                <TableCell className="text-right">${sale.price.toFixed(2)}</TableCell>
                <TableCell>{sale.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}