import ToDoCreateForm from "@/Forms/ToDoForm/ToDoCreateForm";

export default function MainNav() {
  return (
    <div className="flex gap-10">
      <div><ToDoCreateForm/></div>
      <span className="text-blue-200 font-semibold text-1xl hover:text-white cursor-pointer hover:scale-125 transition-all hover:animate-pulse delay-75">About</span>
      <span className="text-blue-200 font-semibold text-1xl hover:text-white cursor-pointer hover:scale-125 transition-all hover:animate-pulse delay-75">Contact Us</span>
    </div>
  )
}
