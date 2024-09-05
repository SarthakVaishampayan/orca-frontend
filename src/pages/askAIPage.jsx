import AskAI from "@/components/custom/aicomponent";
import Sidebar from "@/components/custom/sidebar";
import Navbar from "@/components/custom/ṇavbar";

export default function AIRecomend(params) {
  return (
    <>
      <div className="ml-12">
        <Navbar className="" />
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="ml-12">
        <AskAI />
      </div>
    </>
  );
}
