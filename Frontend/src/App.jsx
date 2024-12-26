import { Flex , VStack} from '@chakra-ui/react';
import Title from './components/Title.jsx'
import TodoList from './components/TodoList.jsx';

function App() {

  return (
  
      <Flex minH='100vh' w='100vw' bg='#272727' justifyContent='center'>
        <VStack w='92%' maxW='1000px' mt='60px'>
          <Title />
          <TodoList />
        </VStack>
      </Flex>

  )
}

export default App
