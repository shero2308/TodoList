import { HStack , Input  } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function AddTodo(){
    return(
        <HStack w='100%' mt='40px' gap='0'>
            <Input bg='#383737' border='1px solid' borderRadius='8px' borderColor='#A7A2A2' p='20px 20px' />
            <Button></Button>
        </HStack>
    )
}

export default AddTodo;