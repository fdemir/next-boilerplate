import TodoList from "../components/shared/TodoList";
import TodoForm from "../components/shared/TodoForm";
import TodoStore from "../store/TodoStore";

const Page: React.FC = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Page;
