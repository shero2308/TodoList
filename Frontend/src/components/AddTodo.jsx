import { HStack , Input  } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

function AddTodo({addTodo}){

    const[todo_name , setTodoName] = useState('');

    const handleAddTodo = () => {
        addTodo(todo_name)
    }

    return(
        <HStack w='100%' mt='40px' gap='0'>
            <Input onChange={(e) => setTodoName(e.target.value)} placeholder='Add TODO here...' bg='#383737' border='1px solid' borderRadius='8px 0 0 8px' borderColor='#A7A2A2' p='20px 20px' />
            <Button onClick={handleAddTodo} border='1px solid' borderRadius='0 8px 8px 0' bg='#0A0079' borderColor='#A7A2A2' p='20px 20px' color='white'_hover={{bg:'#1000C0'}}>Add</Button>
        </HStack>
    )
}

export default AddTodo;