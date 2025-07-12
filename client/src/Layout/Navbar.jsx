import { FaBell, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="w-full h-14 bg-white border-b shadow-sm flex items-center justify-between px-6">
      <div className="text-xl font-bold">StackIt</div>

      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-[300px] px-3 py-1 border rounded-md shadow-sm"
        />
      </div>

      <div className="flex gap-4 text-xl items-center">
        <FaBell className="cursor-pointer" />
        <FaUserCircle className="cursor-pointer" />
      </div>
    </nav>
  );
}
