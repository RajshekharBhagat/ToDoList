import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <div className=" bg-blue-950 py-4 border-b-2 border-b-blue-600">
      <div className="container flex items-center justify-between">
        <div className="text-3xl cursor-pointer font-bold text-blue-200">
          ToDoList
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
      </div>
  );
}
