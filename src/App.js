import "./index.css";

function App() {
  return (
    <div className="container">
      <Background />
      <Todo />
    </div>
  );
}

function Background() {
  return (
    <div className="background">
      <div className="bg-desktop-light"></div>
    </div>
  );
}

function Todo() {
  return (
    <div className="todo">
      <Header />
      <CreateTask />
      <CreatedTask />
      <Status />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <div className="header__title">Todo</div>
      <HeaderToggle />
    </div>
  );
}

function HeaderToggle() {
  return (
    <div className="header__toggle--light">
      <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px">
        <path
          fill="#FFF"
          fill-rule="evenodd"
          d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
        />
      </svg>
    </div>
  );
}

function CreateTask() {
  return (
    <div className="task-create">
      <input type="radio" className="todo__radio-button" id="create" />
      <label for="create" className="task-create__input">
        Create a new todo...
      </label>
    </div>
  );
}

function CreatedTask() {
  return (
    <div>
      <TaskCreated />
      <TaskCreated />
      <TaskCreated />
      <TaskCreated />
      <TaskCreated />
      <TaskCreated />
    </div>
  );
}

function TaskCreated() {
  return (
    <div className="task-created">
      <input type="radio" className="todo__radio-button" id="create" />
      <label for="create" className="task-create__input">
        Create a new todo...
      </label>
    </div>
  );
}

function Status() {
  return (
    <div className="status">
      <div className="items-left">
        <p className="items-left-info">5 items left</p>
      </div>
      <div className="sort">
        <div className="all">All</div>
        <div className="Active">Active</div>
        <div className="Completed">Completed</div>
      </div>
      <div className="clear">Clear Completed</div>
    </div>
  );
}

export default App;
