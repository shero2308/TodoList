import { VStack } from "@chakra-ui/react";
import Todo from "./Todo";

function TodoList({todo , deleteTodo}){
    return(
        <VStack mt='30px' w='100%' gap='14px'>
            {
                todo.map((todo)=>{
                    return(
                        <Todo key={todo.id} id={todo.id} todo_name={todo.todo_name} completed={todo.completed} deleteTodo={deleteTodo}/>
                    )
                }
            )  
            }
        </VStack>

    );

}

export default TodoList;