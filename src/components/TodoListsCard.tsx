import { useDispatch } from "react-redux";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { toggleComplete } from "@/Redux/todoSlice";
import { deleteToDo } from "@/Redux/todoSlice";
type Props = {
    data: {
        id: number,
        title: string,
        description: string,
        priority: number,
        status: boolean,
    }
}

const priority = [
    {
      id: 3,
      label: "High",
      color: 'red'
    },
    {
      id: 2,
      label: "Medium",
      color: 'yellow'
    },
    {
      id: 1,
      label: "Low",
      color: 'lightgreen'
    },
];

const TodoListsCard = ({data}: Props) => {

    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(toggleComplete({id:data.id, status: !data.status}));
    }
    
    const handleDelete = () => {
        dispatch(deleteToDo(data.id))
    }

    const priorityObj = priority.find(item => item.id === data.priority);

    const priorityStyle = {
        color: priorityObj ? priorityObj.color: 'white',
    }

  return (
    <div>
      <Card className="bg-blue-900 shadow-2xl transition-all">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-200 text-2xl">
                        {data.title}  
                    </span>
                    <span  className="font-bold text-blue-200">
                    Priority: <span style={priorityStyle}>{priorityObj ? priorityObj.label : "Unknown Priority"}</span>  
                    </span>  
                </div>
                
            <Accordion type="single" collapsible >
                <AccordionItem value="item-1">
                  <AccordionTrigger  className="hover:no-underline">
                    <CardDescription className="text-blue-100">
                        Description
                    </CardDescription>
                  </AccordionTrigger>
                  <AccordionContent className="text-blue-200">
                      {data.description}
                  </AccordionContent>
                </AccordionItem>
            </Accordion>
            </CardHeader>
            <CardFooter>
                {
                    
                    data.status ? (
                        <div className="flex items-center flex-1 justify-end">
                            <Button onClick={handleDelete} className="hover:bg-red-500 hover:scale-105 hover:animate-pulse">
                                Delete
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center flex-1 justify-end">
                            <Button onClick={handleCompleteClick} className="hover:bg-green-500 hover:scale-105 hover:animate-pulse">
                                Complete
                            </Button>
                        </div>
                    )
                }
            </CardFooter>
        </Card>
    </div>
    
  )
}

export default TodoListsCard
