import { useSelector } from 'react-redux'
import TodoListsCard from './TodoListsCard';


const TodoLists = () => {
    
  const toDos = useSelector((state) => state.toDos);

  const sortedToDos = [...toDos].sort((a , b) => b.priority - a.priority);

    return (
      <div>
        {
          toDos.length > 0 ? (
            <div className='space-y-5'>
              {
                sortedToDos.map((todo) =>(
                  <TodoListsCard key={todo.id} data={todo} />
                ))
              }
            </div>
          ) : (
            <div className='container text-center text-3xl text-blue-900 font-semibold'>
              <h2>No ToDos are available</h2>
            </div>
          )
        }
      </div>
    )
}

export default TodoLists
