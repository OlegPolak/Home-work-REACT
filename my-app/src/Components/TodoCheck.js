import React, { useState } from 'react';

function TodoCheck() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (input.length < 3 || input.length > 50) {
      alert('Довжина тексту повинна бути від 3 до 50 символів.');
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodoCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return true;
    }
  }).filter((todo) => {
    return todo.text.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todo-input">Нове завдання:</label>
        <input
          type="text"
          id="todo-input"
          value={input}
          onChange={handleInputChange}
          minLength={3}
          maxLength={50}
          required
        />
        <button type="submit">Додати</button>
      </form>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Всі</option>
        <option value="active">Активні</option>
        <option value="completed">Завершені</option>
      </select>
      <input
        type="text"
        placeholder="Пошук..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodoCompletion(todo.id)}
          >
            <input type="checkbox" checked={todo.completed} onChange={() => {}} />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoCheck;

