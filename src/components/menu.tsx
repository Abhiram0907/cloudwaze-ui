import { useState } from 'react'
import { ChevronDown, ChevronRight, LogIn, HelpCircle, LogOut, Clock, CheckSquare, User, MessageSquare } from 'lucide-react'

export default function Menu() {
  const [openSections, setOpenSections] = useState({
    workspace: true,
    help: false
  })

  const toggleSection = (section: 'workspace' | 'help') => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="w-64 h-screen text-gray-800 p-4">
      <nav className="space-y-2">
        <div className="px-4 py-2 text-lg font-semibold">Menu</div>
        <div>
          <button
            onClick={() => toggleSection('workspace')}
            className="w-full px-4 py-2 hover:bg-gray-200 rounded-md flex items-center justify-between"
          >
            <span className="flex items-center space-x-2">
              <User size={18} />
              <span>Workspace</span>
            </span>
            {openSections.workspace ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          {openSections.workspace && (
            <ul className="ml-6 mt-2 space-y-2">
              <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded-md">
                <Clock size={16} />
                <span>Time Entry</span>
              </li>
              <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded-md">
                <CheckSquare size={16} />
                <span>TO DO</span>
              </li>
              <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded-md">
                <User size={16} />
                <span>Profile</span>
              </li>
            </ul>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection('help')}
            className="w-full px-4 py-2 hover:bg-gray-200 rounded-md flex items-center justify-between"
          >
            <span className="flex items-center space-x-2">
              <HelpCircle size={18} />
              <span>Help</span>
            </span>
            {openSections.help ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          {openSections.help && (
            <ul className="ml-6 mt-2 space-y-2">
              <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded-md">
                <LogOut size={16} />
                <span>Logout</span>
              </li>
              <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded-md">
                <MessageSquare size={16} />
                <span>SUPPORT</span>
              </li>
              <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded-md">
                <HelpCircle size={16} />
                <span>FAQ</span>
              </li>
            </ul>
          )}
        </div>
        <div className="px-4 py-2 hover:bg-gray-200 rounded-md flex items-center space-x-2">
          <LogIn size={18} />
          <span>Logout</span>
        </div>
      </nav>
    </div>
  )
}