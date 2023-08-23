import { Navigate, Route, Routes } from "react-router-dom";
import SearchHeader from './components/SearchHeader'
import Videos from "./pages/Videos";
import VideoDetail from './pages/VideoDetail';
import NotFound from "./pages/NotFound";

function App() {
  return (
    // 반응형
    // https://tailwindcss.com/docs/responsive-design
    <div className='m-auto w-full xl:w-10/12'>
      <SearchHeader />
      <Routes>
        <Route path='/' element={<Navigate to='/videos' replace />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/videos/:keyword' element={<Videos />} />
        <Route path='/videos/watch/:videoId' element={<VideoDetail />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
