import { Link, Routes, Route } from 'react-router-dom';
import TodosPage from './Component/TodosPage';
import UserPage from './Component/UserPage';

function App() {
  return (
    <div className="App">
      <div>
        <Link to={'/users'}>Users</Link>
        <Link to={'/todo'}>Todo</Link>
      </div>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todo" element={<TodosPage />} />
      </Routes>
    </div>
  );
}

export default App;
