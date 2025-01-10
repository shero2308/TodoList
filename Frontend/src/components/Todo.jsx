import { Flex , HStack , Text , IconButton , Icon} from "@chakra-ui/react";
import { Checkbox } from "./ui/checkbox";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";


function Todo({id,todo_name , completed , deleteTodo}){
    
    const handleDelete = async () => {
        await deleteTodo(id);
    }
    return(
        <Flex bg='#383737' w='100%' border='1px solid' borderRadius='8px' borderColor='#A7A2A2' p='20px 20px'>
            <HStack w='100%' justifyContent='space-between' gap='20px'>
                <Checkbox varient='outline' bg='#B2AFAF' size='lg'/>
                <Text>
                    {todo_name}
                </Text> 
                <HStack gap='18px'>
                    <IconButton size='md'> <FaEdit /></IconButton>
                    <IconButton onClick={handleDelete} size='md'><RiDeleteBinLine /></IconButton>
                </HStack>  
            </HStack>
        </Flex>
    );
}

export default Todo;