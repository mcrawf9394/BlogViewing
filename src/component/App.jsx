import { useState } from 'react'
import DisplayPosts from './DisplayPosts.jsx'
function App() {
  const [user, setUser] = useState(localStorage.getItem('token'))
  if (user === null) {
    return <div className='grid grid-cols-7'>
        <nav className='grid grid-rows-8 h-screen content-center bg-gray-900 justify-center'>
          <h1 className='text-4xl text-white mt-4'>Sam's Blog</h1>
          <a href="/login" className='text-white'><button className=''>Login</button></a>
          <a href="/signup" className='text-white'><button className=''>Signup</button></a>
        </nav>
        <DisplayPosts />
      </div>
  }
  else {
    return <div className='grid grid-cols-7'>
      <nav className='grid grid-rows-8 h-screen content-center bg-gray-900 justify-center'>
        <h1 className="text-4xl text-white mt-4">Sam's Blog</h1>
        <a href="/updateuser" className=''><button className='text-white'>Change Password</button></a>
        <a href=""><button className='text-white' onClick={(click) => {
          click.preventDefault()
          localStorage.clear()
          setUser(null)
        }}>Log off</button></a>
      </nav>
      <DisplayPosts />
    </div>
  }
}

export default App
