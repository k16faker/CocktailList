import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import RootPage from './pages/RootPage';
import FullBoardPage from './pages/FullBoardPage';
import DetailPostPage from './pages/DetailPostPage';
import CategoryPage from './pages/CategoryPage';

function App() {

  const BrowserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      children:[
        {
          path: '/',
          element:<FullBoardPage />,
        },
        {
          path: 'category',
          element:<CategoryPage />,
        },
        {
          path: 'detail',
          element: <DetailPostPage />
        }
      ],
      errorElement: <div>Not Found</div>
    }
  ]);


  return (
    <div className="App">
      <RouterProvider router={BrowserRouter}></RouterProvider>
    </div>
  );
}

export default App;
