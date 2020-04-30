import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/writings">
        <a>Writings</a>
      </Link>
    </div>
  );
}
