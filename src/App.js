import './App.css';
import Todo from './components/todos/Todo';



import { useEffect } from 'react';
import { useState } from 'react';


function App({}) {

  const [todos, setTodos] = useState([]); //устанавливаем сотояние

  console.log(todos);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos') //отправляем запрос по url
    .then(answer => answer.json()) // преобразуем ответ в json
    .then(json => setTodos(json)) // обновляем состояние 
    // .then(json => console.log(json))
  } , [])

  
  return (
    <div className="App">
      
     {todos.map(item => <Todo item={item}/>)} //проходимся map по массиву и рендерим 
    
    </div>
  );
}

export default App;
