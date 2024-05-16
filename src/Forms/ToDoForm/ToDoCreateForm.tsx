import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { addToDo } from "@/Redux/todoSlice";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const priority = [
    {
      id: 3,
      label: "High",
    },
    {
      id: 2,
      label: "Medium",
    },
    {
      id: 1,
      label: "Low",
    },
  ];
  

const formSchema = z.object({
  title: z.string().min(1, "Todo Title is required"),
  description: z.string().min(1, "ToDo Description is required"),
  priority: z.coerce.number().min(1, 'Select priority'),
  status: z.boolean(),
});

type toDoFormData = z.infer<typeof formSchema>;

const ToDoCreateForm = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  const form = useForm<toDoFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: 1,
      status: false,
    },
  });

  const onSubmit = (formData: toDoFormData) => {
    dispatch(
      addToDo({
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        status: false,
      })
    );
    setOpen(false);
  };

  return (
    <>
      {/* <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline bg-blue-400 mb-3 rounded-lg px-4">Create New ToDo</AccordionTrigger>
            <AccordionContent>
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)} 
                        className="space-y-4 bg-blue-50 p-5 rounded-lg"
                    >
                        <div >
                            <h2 className="text-2xl font-bold">Create ToDO</h2>
                            <FormDescription>
                                Enter the detail about your todo
                            </FormDescription>
                        </div>
                        <FormField 
                            control={form.control}
                            name="title"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="bg-white" />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                         />
                         <FormField 
                            control={form.control}
                            name="description"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="bg-white" />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                         />
                         <div className="flex items-center justify-end">
                            <Button type="submit">Submit</Button>
                         </div>
                    </form>
                </Form>
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
      <Popover open={isOpen}>
        <PopoverTrigger
          onClick={() => setOpen(true)}
          className="font-bold text-blue-200 hover:animate-pulse hover:scale-110 delay-75 transition-all"
        >
          Create ToDo
        </PopoverTrigger>
        <PopoverContent style={{ width: "300px", height: "200px" }}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 bg-blue-50 p-5 rounded-lg"
            >
              <div>
                <h2 className="text-2xl font-bold ">Create ToDO</h2>
                <FormDescription>
                  Enter the detail about your todo
                </FormDescription>
              </div>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Priority</FormLabel>
                      <FormDescription>
                        Select the priority of your ToDo
                      </FormDescription>
                    </div>
                    {priority.map((item) => (
                      <FormItem
                        key={item.id}
                        className="flex items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value === item.id}
                            onCheckedChange={(checked: boolean) => {
                              if (checked) {
                                field.onChange(item.id);
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                    <FormMessage>
                      {form.formState.errors.priority?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between">
                <Button className="bg-green-500 hover:bg-green-700" type="submit">Create</Button>
                <Button className="bg-red-500 hover:bg-red-700" onClick={() => setOpen(false)}>Cancel</Button>
              </div>
            </form>
          </Form>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ToDoCreateForm;
