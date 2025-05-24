### RESTful API Weather Application  
## 1. Documentation 
# main concept applied 

1. Centralized State Management Using Zustand
Zustand allows creating a global store that holds both state (e.g., todos) and actions (e.g., addTodo, removeTodo).
You defined a single source of truth for your todo list data.

2. Direct State Access and Updates
Components subscribe to specific state slices using useTodoStore(selector), improving performance.
State updates happen immutably using the set function inside store actions.

3. Modular Component Structure
Built a clean component-based UI:
TodoInput for adding todos
TodoItem for displaying and toggling/removing
TodoList for rendering the list
App.js for composing everything

4. Local Persistence with Middleware
Used Zustand’s persist middleware to save state to localStorage, ensuring todos stay after page reloads.


## 2.Reflection
# Discuss what you learned. 
# What I Learned

1. How Zustand Simplifies State Management
Zustand allows you to create a central store that manages both state and actions in one place.
It eliminates the need for prop drilling and complex Context setups.
You learned how to access and update global state directly in any component using hooks.

2. Creating and Using a Zustand Store
Learned how to use create() to define a store with:

State (todos)
Actions (addTodo, removeTodo, toggleTodo, clearCompleted)
Understood how state updates are handled immutably using the set function.

 3. Component Communication via Global Store
Built reusable components (TodoInput, TodoItem, TodoList) that interact with shared state without needing to pass props around.

Each component subscribes to only the parts of state it needs, improving performance.

 4. Adding Local Storage Persistence
Implemented localStorage persistence using Zustand’s persist middleware.
Learned how state is automatically saved and reloaded across page refreshes.


# Mention any challenges you faced (include screenshots) and how you overcame them.
Challenge:
The toggleTodo and removeTodo actions didn’t update the state correctly, causing buttons to do nothing.

Cause:
I mistakenly used state.todos.map() or filter() without returning the new array properly.

Solution:
Carefully rewrote the actions to update state immutably:

![fiinal](<post/images/Screenshot 2025-05-24 234308.png>)
