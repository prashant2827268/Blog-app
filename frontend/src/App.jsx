import React ,{useState}from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  return (
    <>
      <Navbar />
      <div className='text-center mt-30'>
        <button onClick = {()=>setIsSidebarOpen(!isSidebarOpen)} className="bg-blue-400 px-5 rounded-sm py-2 shadow-2xl">Open</button>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
  );
}

export default App
