import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/dashboard" className="text-xl font-semibold text-gray-900">
            AzulRafaV
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link
              to="/login"
              className="bg-[#00BCD4] text-white px-4 py-2 rounded-md hover:bg-[#00ACC1] transition-colors"
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

