import { VStack } from "@chakra-ui/react";
import Todo from "./Todo";

function TodoList(){
    return(
        <VStack mt='30px' w='100%' gap='14px'>
            <Todo todo_name='Hello world'/>
            <Todo todo_name='Hello'/>
            <Todo todo_name='Hello world'/>
            <Todo todo_name='Hello'/>
        </VStack>

    );

}

export default TodoList;