import DisplayPosts from './DisplayPosts.jsx'
function App() {
  if (!localStorage.getItem('token')) {
    return <>
        <h1 className='text-4xl'>Hello</h1>
        <a href="/login"><button>Login</button></a>
        <a href="/signup"><button>Signup</button></a>
        <DisplayPosts />
      </>
  }
  else {
    return <>
      <nav>
        <h1 className="text-4xl">Hello!</h1>
        <a href="/updateuser"><button>Change Password</button></a>
      </nav>
      <DisplayPosts />
    </>
  }
}

export default App
