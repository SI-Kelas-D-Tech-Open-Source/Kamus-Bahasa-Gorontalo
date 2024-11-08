import Link from 'next/link';

const Nav = () => {
    return(
       <div className="w-1/5 bg-purple-900 h-full p-4">
        <div className="flex flex-col items-center">
          <span className="text-white font-bold">ADMIN</span>
        </div>
  <nav className="mt-10">
          <ul className="space-y-4">
            <li className="flex items-center text-white">
              <i className="fas fa-home mr-2"></i>
              <a href="dashboard" className="text-white font-medium">Dashboard</a>
            </li>
            <li className="flex items-center text-white">
              <i className="fas fa-book mr-2"></i>
              <a href="ubahkata" className="text-white font-medium">Mengelola Kata</a>
            </li>
            <li className="flex items-center text-white">
              <i className="fas fa-user-edit mr-2"></i>
              <a href="#" className="text-white font-medium">Mengelola Editor</a>
            </li>
            <li className="flex items-center text-white">
              <i className="fas fa-user-check mr-2"></i>
              <a href="#" className="text-white font-medium">Verifikasi Editor</a>
            </li>
            <li className="flex items-center text-white">
              <i className="fas fa-history mr-2"></i>
              <a href="history" className="text-white font-medium">Log History</a>
            </li>
            <li className="flex items-center text-white">
              <i className="fas fa-sign-out-alt mr-2"></i>
              <span>Log Out</span>
            </li>
          </ul>
        </nav>
        </div>
    );
}
export default Nav