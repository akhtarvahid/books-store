import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Dashboard />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
  </Route>
))
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
