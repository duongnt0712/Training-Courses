import './App.css';
import { AuthenticatedProvider } from './shared/Authenticated';
import { RouterProvider } from 'react-router-dom';
import appRouter from './app.route';

function App() {
  return (
    <AuthenticatedProvider>
      <RouterProvider router={appRouter} />
    </AuthenticatedProvider>
  );
}

export default App;
