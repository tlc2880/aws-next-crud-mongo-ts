import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <Link href={"/"}>Next CRUD MongoDB</Link>
      <Link href={'/addTopic'}>Add topic</Link>
    </nav>
  )
}