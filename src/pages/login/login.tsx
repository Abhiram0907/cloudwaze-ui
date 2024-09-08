import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircleUserRound, Eye, EyeOff } from 'lucide-react'

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const resetButtonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await getRole(username, password);
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    resetButtonRef.current?.blur();
  };

  const getRole = async (username: string, password: string) => {
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json: Post[] = await resp.json();

      const userRole = json[0]?.body.includes('quia et suscipit') ? 'client' : 'admin';
      setRole(userRole);

      console.log(`Role: ${role} - Username: ${username} - Password: ${password}`);
      navigate(`/${userRole}`);
    } catch (err: any) {
      console.error('Failed to fetch role:', err);
    }
  };

  // const validateLogin = (username: String, password: String) => {
  //   getRole();
  //   return console.log(role)
  //   // if(role === 'client') {
  //   //   return navigate('/client');
  //   // } else {
  //   //   return console.log('no client exist', username, password);
  //   // }
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-full">
              <CircleUserRound size={48} strokeWidth="1.5px"/>
            </div>
          </div>
          <h2 className="text-2xl font-alef text-center text-gray-900">c l o u d w a z e</h2>
          <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                           focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  autoComplete="off"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                             focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="reset"
              ref={resetButtonRef}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Reset
            </button>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}