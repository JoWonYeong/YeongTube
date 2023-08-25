import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DefaultPage from './pages/DefaultPage';
import Videos from "./pages/Videos";
import VideoDetail from './pages/VideoDetail';
import NotFound from "./pages/NotFound";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(()=>{
    if (location.pathname === '/') navigate('/videos');
  }, [])

  return (
    // 반응형
    // https://tailwindcss.com/docs/responsive-design
    <div className=''>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route path='videos' element={<Videos />} />
          <Route path='videos/:keyword' element={<Videos />} />
          <Route path='videos/watch/:videoId' element={<VideoDetail />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
