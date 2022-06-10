export default function LoginForm({ onLogin }) {
  function handleSubmit(event) {
    event.preventDefault();
    onLogin(event.target.username.value, event.target.password.value)
  }
  return (
    <div className="w-full flex justify-center pt-3 ">
    <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-green-200 rounded shadow-md">
      <h1>Login</h1>
      <div>
        <p className="block mb-2 text-sm font-bold text-gray-700">USERNAME</p>
        <input type="text" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name="username"/>
      </div>
      <div>
        <div>
          <p className="block mb-2 text-sm font-bold text-gray-700">PASSWORD</p>
          <input type="password" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name="password"/>
        </div>
        <button className="px-4 py-2 font-bold text-white bg-green-700 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">LOGIN</button>
      </div>
    </form>
    </div>
  )
}