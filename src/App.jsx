import AddTodo from "./AddTodo";

const App = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-center py-3">
        Welcome to TODO !
      </h1>
      
      <AddTodo />
    </div>
  );
};

export default App;
