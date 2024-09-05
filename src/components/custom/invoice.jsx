/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D3FMDdjBdKE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Invoice() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-card rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Product Invoice</h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Name
                </label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
                  Phone
                </label>
                <Input id="phone" placeholder="+1 (123) 456-7890" />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-muted-foreground mb-1">
                  Address
                </label>
                <Textarea id="address" placeholder="123 Main St, Anytown USA" />
              </div>
              <div>
                <label htmlFor="invoice-number" className="block text-sm font-medium text-muted-foreground mb-1">
                  Invoice Number
                </label>
                <Input id="invoice-number" placeholder="INV-001" />
              </div>
              <div>
                <label htmlFor="invoice-date" className="block text-sm font-medium text-muted-foreground mb-1">
                  Invoice Date
                </label>
                <Input id="invoice-date" type="date" />
              </div>
              <div>
                <label htmlFor="place-of-supply" className="block text-sm font-medium text-muted-foreground mb-1">
                  Place of Supply
                </label>
                <Input id="place-of-supply" placeholder="Anytown, USA" />
              </div>
              <div>
                <label htmlFor="po-number" className="block text-sm font-medium text-muted-foreground mb-1">
                  Purchase Order Number
                </label>
                <Input id="po-number" placeholder="PO-001" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="order-id" className="block text-sm font-medium text-muted-foreground mb-1">
                  Order ID
                </label>
                <Input id="order-id" placeholder="ORD-001" />
              </div>
              <div>
                <label htmlFor="customer-name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Customer Name
                </label>
                <Input id="customer-name" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="product-model" className="block text-sm font-medium text-muted-foreground mb-1">
                  Product Model
                </label>
                <Input id="product-model" placeholder="Product XYZ" />
              </div>
              <div>
                <label htmlFor="product-id" className="block text-sm font-medium text-muted-foreground mb-1">
                  Product ID
                </label>
                <Input id="product-id" placeholder="PROD-001" />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-muted-foreground mb-1">
                  Price
                </label>
                <Input id="price" type="number" placeholder="99.99" />
              </div>
              <div>
                <label htmlFor="discount" className="block text-sm font-medium text-muted-foreground mb-1">
                  Discount
                </label>
                <Input id="discount" type="number" placeholder="10" />
              </div>
              <div>
                <label htmlFor="final-price" className="block text-sm font-medium text-muted-foreground mb-1">
                  Final Price
                </label>
                <Input id="final-price" type="number" placeholder="89.99" />
              </div>
              <div>
                <label htmlFor="gst" className="block text-sm font-medium text-muted-foreground mb-1">
                  5% GST
                </label>
                <Input id="gst" type="number" placeholder="4.50" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            Save Invoice
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Print</Button>
        </div>
      </div>
    </div>
  )
}