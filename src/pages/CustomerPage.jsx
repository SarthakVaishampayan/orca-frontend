import Customer from "@/components/custom/Customer";
import Sidebar from "@/components/custom/sidebar";
import Navbar from "@/components/custom/ṇavbar";

export default function CustomerPage(params) {
  return (
    <>
      <div className="ml-12">
        <Navbar className="" />
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="ml-12">
        <Customer />
      </div>
    </>
  );
}
