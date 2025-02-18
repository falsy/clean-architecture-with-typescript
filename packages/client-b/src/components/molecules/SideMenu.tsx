import Link from "next/link"

export default function SideMenu() {
  return (
    <nav className="px-4 py-8 text-sm">
      <ul className="border-t border-gray">
        <li className="py-3 border-b border-gray text-black">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="py-3 border-b border-gray text-black/50">About us</li>
        <li className="py-3 border-b border-gray text-black/50">Settings</li>
      </ul>
    </nav>
  )
}
