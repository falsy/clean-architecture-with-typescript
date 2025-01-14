import { Link } from "react-router"

export default function SideMenu() {
  return (
    <nav className="px-4 py-8 text-sm">
      <ul className="border-t border-gray">
        <li className="py-3 border-b border-gray">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="py-3 border-b border-gray">About us</li>
        <li className="py-3 border-b border-gray">Settings</li>
      </ul>
    </nav>
  )
}
