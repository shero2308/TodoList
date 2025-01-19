import { Flex , HStack , Text , IconButton , Icon , Button} from "@chakra-ui/react";

import { Checkbox } from "./ui/checkbox";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

import { useState } from "react";

import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { update_todo } from "../api/endpoints";

function Todo({id,todo_name , completed , deleteTodo}){

    const handleComplete = async () => {
        await update_todo(id, {'completed':!completed})
    }
    
    const handleDelete = async () => {
        await deleteTodo(id);
    }
    
    return(
        <Flex bg='#383737' w='100%' border='1px solid' borderRadius='8px' borderColor='#A7A2A2' p='20px 20px'>
            <HStack w='100%' justifyContent='space-between' gap='20px'>
                <Checkbox onChange={handleComplete} defaultChecked={completed} varient='outline' bg='#B2AFAF' size='lg'/>
                <Text>
                    {todo_name}
                </Text> 
                <HStack gap='18px'>
                    <TodoUpdate />
                    <IconButton onClick={handleDelete} size='md'><RiDeleteBinLine /></IconButton>
                </HStack>  
            </HStack>
        </Flex>
    );
}

const TodoUpdate = () => {
    const [open, setOpen] = useState(false)
    return (
      <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DialogTrigger asChild>
            <IconButton size='md'> <FaEdit /></IconButton>
        </DialogTrigger>
  
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogBody>

          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
            <Button>Save</Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    )
  }

export default Todo;