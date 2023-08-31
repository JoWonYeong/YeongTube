import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import DefaultPage from './pages/DefaultPage';
import Videos from "./pages/Videos";
import VideoDetail from './pages/VideoDetail';
import NotFound from "./pages/NotFound";
import { DarkModeContext } from './context/DarkModeContext';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const {darkMode} = useContext(DarkModeContext)
  console.log(darkMode);
  

  useEffect(()=>{
    if (location.pathname === '/') navigate('/videos');
  }, [location.pathname, navigate])

  return (
    <div className={`${darkMode ? 'bg-dark-bg text-dark-text-color' : ''}`}>
      <div className='m-auto w-full xl:w-10/12 box-border '>
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route path='videos' element={<Videos />} />
            <Route path='videos/:keyword' element={<Videos />} />
            <Route path='videos/watch/:videoId' element={<VideoDetail />} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
