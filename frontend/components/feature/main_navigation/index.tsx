
interface IProps {
  languages?: string[];
}

export function MainNav({ languages = [] }: IProps) {
  return (
    <header className="h-15 bg-gray-800 text-white flex items-center justify-between px-4">
      <div className="flex space-x-3 items-center">
        <div className="text-lg font-bold">My App</div>
        <nav>
          <a href="#" className="px-4 py-2 hover:bg-gray-700">Dashboard</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-700">Variant</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        {languages.length > 0 && (
          <select className="text-white py-2 px-4">
            {languages.map((lang) => (
              <option key={lang}>{lang}</option>
            ))}
          </select>
        )}

        <div className="relative">
          <button className="py-2 px-3">Account</button>
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow hidden group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
          </div>
        </div>

        <button className="text-white py-2 px-3 ">Logout</button>
      </div>
    </header >);
}

