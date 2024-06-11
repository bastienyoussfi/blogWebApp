import Layout from './Components/Layout';
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element= { <Layout /> }>
          <Route index element= { <Homepage /> } />
          <Route path="/login" element= { <LoginPage /> } />
          <Route path="/register" element= { <RegisterPage /> } />
          <Route path="/create" element= { <CreatePost /> } />
          <Route path="/post/:id" element= { <PostPage /> } />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
