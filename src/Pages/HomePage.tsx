import TodoLists from "@/components/ToDoLists";

export default function HomePage() {
  return (
    <div className=" mx-auto max-w-screen-sm py-10 space-y-10 ">
      <div className="space-y-4">
        <TodoLists />
      </div>
    </div>
  )
}
