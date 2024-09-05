
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
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

export default function Customer() {
  return (
    <div className="my-6 flex flex-col items-center justify-center flex-1 bg-background scale-120">
      <h1 className="text-3xl font-bold mb-8">Customer Data</h1>
      <div className="w-full max-w-4xl bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="bg-muted p-4 flex items-center justify-between">
          <Input
            type="text"
            placeholder="Search by Name"
            className="bg-background text-foreground flex-1 mr-4"
          />
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <ListOrderedIcon className="w-4 h-4" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="name">
                  <DropdownMenuRadioItem value="name">
                    Name
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="id">
                    Customer ID
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="phone">
                    Phone Number
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="w-4 h-4" />
                  Filter by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>Customer ID</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Customer Name
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Phone No</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Address</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Identification No
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer ID</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Phone No</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Identification No</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>CUS001</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>+1 (555) 123-4567</TableCell>
              <TableCell>123 Main St, Anytown USA</TableCell>
              <TableCell>123-45-6789</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CUS002</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>+1 (555) 987-6543</TableCell>
              <TableCell>456 Oak Rd, Somewhere CA</TableCell>
              <TableCell>987-65-4321</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CUS003</TableCell>
              <TableCell>Michael Johnson</TableCell>
              <TableCell>+1 (555) 456-7890</TableCell>
              <TableCell>789 Elm St, Elsewhere NY</TableCell>
              <TableCell>456-78-9012</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CUS004</TableCell>
              <TableCell>Emily Davis</TableCell>
              <TableCell>+1 (555) 321-7890</TableCell>
              <TableCell>321 Pine St, Somewhere Else FL</TableCell>
              <TableCell>321-54-6789</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CUS005</TableCell>
              <TableCell>David Lee</TableCell>
              <TableCell>+1 (555) 789-1234</TableCell>
              <TableCell>654 Oak Rd, Anytown CA</TableCell>
              <TableCell>654-98-7654</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CUS006</TableCell>
              <TableCell>Sarah Wilson</TableCell>
              <TableCell>+1 (555) 987-6543</TableCell>
              <TableCell>987 Elm St, Elsewhere NY</TableCell>
              <TableCell>987-65-4321</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CUS007</TableCell>
              <TableCell>Tom Garcia</TableCell>
              <TableCell>+1 (555) 456-7890</TableCell>
              <TableCell>456 Pine St, Somewhere Else FL</TableCell>
              <TableCell>456-78-9012</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex justify-end p-4">
          <Button className="hover:bg-primary-hover focus:bg-primary-focus hover:bg-[#4CAF50] focus:bg-[#388E3C]">
            Save Details
          </Button>
        </div>
      </div>
    </div>
  );
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ListOrderedIcon(props) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
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

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
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
