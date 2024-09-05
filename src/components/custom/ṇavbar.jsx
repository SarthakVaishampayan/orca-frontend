import { Link, useNavigate } from "react-router-dom";
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
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between bg-background px-4 py-3 shadow-sm sm:px-6 md:px-8">
      <div className="flex items-center gap-4">
        <Link to="#" className="text-lg font-bold">
          Dashboard
        </Link>
        <span className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString()} -{" "}
          {new Date().toLocaleDateString("en-US", { weekday: "long" })}
        </span>
      </div>
      <div className="relative flex-1 max-w-md">
        <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-md bg-muted pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <div className="relative flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <BellIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[360px] p-0">
            <Card className="shadow-none border-0">
              <CardHeader className="border-b">
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">
                      Your call has been confirmed.
                    </p>
                    <p className="text-sm text-muted-foreground">5 min ago</p>
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">
                      You have a new message!
                    </p>
                    <p className="text-sm text-muted-foreground">1 min ago</p>
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">
                      Your subscription is expiring soon!
                    </p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="font-medium mx-2"> Rainbow Coders</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="User Avatar"
                className="rounded-full"
                style={{ aspectRatio: "36/36", objectFit: "cover" }}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Logged in as</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}
