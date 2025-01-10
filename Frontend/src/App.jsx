import { Flex , VStack} from '@chakra-ui/react';

import { useState , useEffect } from 'react';

import { get_todo , create_todo , delete_todo } from './api/endpoints.jsx';

import Title from './components/Title.jsx';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';

function App() {
  
  const [todos , setTodos]= useState([]);

  useEffect(()=>{
    const fetchtodo = async () =>{
      const todos = await get_todo();
      setTodos(todos)
    }
    fetchtodo();
  },[])

  const addTodo = async (todo_name)=>{
    const todo = await create_todo(todo_name)
    setTodos([todo, ...todos])
  }

  const deleteTodo = async (id) =>{
    await delete_todo(id);
    setTodos(todos.filter((todos)=>todos.id !== id))
  }

  return (
  
      <Flex minH='100vh' w='100vw' bg='#272727' justifyContent='center'>
        <VStack w='92%' maxW='1000px' mt='60px'>
          <Title />
          <AddTodo addTodo={addTodo}/>
          <TodoList todo={todos} deleteTodo={deleteTodo}/>
        </VStack>
      </Flex>
  )
}

export default App
