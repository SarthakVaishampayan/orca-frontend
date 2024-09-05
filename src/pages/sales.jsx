import SalesHistory from "@/components/custom/salesHistory";
import Sidebar from "@/components/custom/sidebar";
import Navbar from "@/components/custom/ṇavbar";

export default function Sales(params) {
  return (
    <>
      <div className="ml-12">
        <Navbar className="" />
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="ml-12">
        <SalesHistory />
      </div>
    </>
  );
}
