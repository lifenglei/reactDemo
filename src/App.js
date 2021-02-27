/*
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2021-02-26 10:30:37
 */
import logo from './logo.svg';
import './App.css';
import Editor from './editor'
import Xxk from './xxk.js'
import ToDoList from './functionTodo'
import OtherToDo from './todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>这是采用类组件开发的toDoList</p>
        <OtherToDo />
        <img src={logo} className="App-logo" alt="logo" />
        <p>这是采用reactHooks开发的函数式toDoList</p>
        <ToDoList />
        <p>这是一个选项卡组件</p>

        <Xxk></Xxk>
      </header>
      <p>这是一个编辑器组件</p>
      <Editor ref={(c) => {
      }}></Editor>
    </div>
  );
}

export default App;
