import { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new TODO"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button title="sumbit">Submit</Button>
      </form>
    </div>
  );
}

export default TodoForm;
