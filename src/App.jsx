import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl'>Hello</h1>
      <a href="/login"><button>Login</button></a>
      <a href="/signup"><button>Signup</button></a>
    </>
  )
}

export default App
