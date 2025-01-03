import { VStack } from "@chakra-ui/react";
import Todo from "./Todo";

function TodoList({todo}){
    return(
        <VStack mt='30px' w='100%' gap='14px'>
            {
                todo.map((todo)=>{
                    return(
                        <Todo key={todo.id} todo_name={todo.todo_name} />
                    )
                }
            )  
            }
        </VStack>

    );

}

export default TodoList;