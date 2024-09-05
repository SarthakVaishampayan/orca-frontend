/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vEQSfjuJrOY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
 import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
 import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
 import { Badge } from "@/components/ui/badge"
 
 export default function Inventory() {
   const products = [
     {
       orderId: "ORD001",
       productId: "BIKE001",
       name: "Mountain Bike X",
       company: "Acme Bikes",
       costPrice: 500,
       sellingPrice: 799,
       inventory: 25,
     },
     {
       orderId: "ORD002",
       productId: "BIKE002",
       name: "Road Bike Y",
       company: "Velocity Cycles",
       costPrice: 600,
       sellingPrice: 899,
       inventory: 18,
     },
     {
       orderId: "ORD003",
       productId: "BIKE003",
       name: "Hybrid Bike Z",
       company: "Fusion Gear",
       costPrice: 450,
       sellingPrice: 699,
       inventory: 32,
     },
     {
       orderId: "ORD004",
       productId: "BIKE004",
       name: "Electric Bike A",
       company: "Volt Riders",
       costPrice: 800,
       sellingPrice: 1099,
       inventory: 12,
     },
     {
       orderId: "ORD005",
       productId: "BIKE005",
       name: "BMX Bike B",
       company: "Ramp Riders",
       costPrice: 350,
       sellingPrice: 549,
       inventory: 20,
     },
   ]
   return (
     <div className="max-w-[1440px] mx-auto">
       <Card>
         <CardHeader>
           <CardTitle>Product Inventory</CardTitle>
           <CardDescription>View and manage the inventory of your bike products.</CardDescription>
         </CardHeader>
         <CardContent>
           <Table>
             <TableHeader>
               <TableRow>
                 <TableHead>Order ID</TableHead>
                 <TableHead>Product ID</TableHead>
                 <TableHead>Bike Model</TableHead>
                 <TableHead>Bike Company</TableHead>
                 <TableHead>Cost Price</TableHead>
                 <TableHead>Selling Price</TableHead>
                 <TableHead>Quantity</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
               {products.map((product) => (
                 <TableRow key={product.orderId}>
                   <TableCell>{product.orderId}</TableCell>
                   <TableCell>{product.productId}</TableCell>
                   <TableCell>{product.name}</TableCell>
                   <TableCell>{product.company}</TableCell>
                   <TableCell>${product.costPrice}</TableCell>
                   <TableCell>${product.sellingPrice}</TableCell>
                   <TableCell>
                     <Badge variant={product.inventory > 10 ? "secondary" : "outline"}>{product.inventory}</Badge>
                   </TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
         </CardContent>
       </Card>
     </div>
   )
 }