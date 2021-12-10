import { observer } from "mobx-react-lite";
import TodoStore from "../../store/TodoStore";

const TodoList: React.FC = () => {
  return (
    <div>
      {TodoStore.todos.map(({ name, id }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

export default observer(TodoList);
