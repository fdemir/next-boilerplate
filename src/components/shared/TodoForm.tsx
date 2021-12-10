import { useState } from "react";

import TodoStore from "../../store/TodoStore";

const TodoList: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <button
        onClick={() => {
          TodoStore.add(value);
          setValue("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoList;
