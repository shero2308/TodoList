import { Flex , VStack} from '@chakra-ui/react';

import { useState , useEffect } from 'react';

import { get_todo } from './api/endpoints.jsx';

import Title from './components/Title.jsx';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';

function App() {
  
  const [todo , setTodo]= useState([]);

  useEffect(()=>{
    const fetchtodo = async () =>{
      const todo = await get_todo();
      setTodo(todo)
      console.log(todo)
    }
    fetchtodo();
  },[])

  return (
  
      <Flex minH='100vh' w='100vw' bg='#272727' justifyContent='center'>
        <VStack w='92%' maxW='1000px' mt='60px'>
          <Title />
          <AddTodo/>
          <TodoList todo={todo} />
        </VStack>
      </Flex>
  )
}

export default App
