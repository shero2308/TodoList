import { Flex , HStack , Text , IconButton , Icon , Button , Input} from "@chakra-ui/react";

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

    const [clientTodoName , setClietTodoName] = useState(todo_name)

    const handleComplete = async () => {
        await update_todo(id, {'completed':!completed})
    }
    
    const handleDelete = async () => {
        await deleteTodo(id);
    }

    const handleUpdate = async (name) => {
      await update_todo(id, {'todo_name':name})
      setClietTodoName(name);
  }
    
    return(
        <Flex bg='#383737' w='100%' border='1px solid' borderRadius='8px' borderColor='#A7A2A2' p='20px 20px'>
            <HStack w='100%' justifyContent='space-between' gap='20px'>
                <Checkbox onChange={handleComplete} defaultChecked={completed} varient='outline' bg='#B2AFAF' size='lg'/>
                <Text>
                    {clientTodoName}
                </Text> 
                <HStack gap='18px'>
                    <TodoUpdate todo_name={clientTodoName} handleUpdate={handleUpdate}/>
                    <IconButton onClick={handleDelete} size='md'><RiDeleteBinLine /></IconButton>
                </HStack>  
            </HStack>
        </Flex>
    );
}

const TodoUpdate = ({todo_name , handleUpdate}) => {

    const [InputName , setInputName] = useState(todo_name)
    const [open, setOpen] = useState(false)
    return (
      <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DialogTrigger asChild>
            <IconButton size='md'> <FaEdit /></IconButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Todo</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Input value={InputName} onChange={(e)=>setInputName(e.target.value)}/>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline" borderRadius='8px'>Cancel</Button>
            </DialogActionTrigger>
            <Button onClick={(name)=>handleUpdate(InputName)} border='1px solid' borderRadius='8px' bg='#0A0079' borderColor='#A7A2A2' p='20px 20px' color='white'_hover={{bg:'#1000C0'}}>Save</Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    )
  }

export default Todo;