import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-4">
      <Link className="font-bold text-2xl" href={"/"}>
        Next CRUD MongoDB
      </Link>
      <Link className="bg-green-600 font-bold text-white py-3 px-6 w-fit" href={"/addTopic"}>
        Add topic
      </Link>
    </nav>
  )
}