import Inventory from "@/components/custom/inventory";
import Sidebar from "@/components/custom/sidebar";
import Navbar from "@/components/custom/ṇavbar";

export default function Products(params) {
  return (
    <>
      <div className="ml-12">
        <Navbar className="" />
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="ml-12">
        <Inventory />
      </div>
    </>
  );
}
