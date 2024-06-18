function App() {
  if (!localStorage.getItem('token')) {
    return (
      <>
        <h1 className='text-4xl'>Hello</h1>
        <a href="/login"><button>Login</button></a>
        <a href="/signup"><button>Signup</button></a>
      </>
    )
  }
  else {
    return <>
      <a href="/updateuser"><button>Change Password</button></a>
    </>
  }
}

export default App
