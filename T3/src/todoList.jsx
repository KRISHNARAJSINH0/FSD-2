import React, { useState } from "react";

function Todo() {
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);

    function addTask() {

        setTodoList([
            ...todoList,
            { id: Date.now(), name: task }
        ]);

        setTask("");
    }

    function deleteTask(id) {
        setTodoList(todoList.filter((item) => item.id !== id));
    }

    return (
        <>
            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTask}>Add</button>

            {todoList.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <button onClick={() => deleteTask(item.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </>
    );
}

export default Todo;