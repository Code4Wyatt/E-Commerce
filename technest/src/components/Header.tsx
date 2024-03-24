import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { Search } from "lucide-react"
function Header() {
  return (
    <header className="flex bg-customBlue">
      <Link href="/" className="">
        <Image
          src="https://links.papareact.com/yur"
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>

      <form className="flex items-center bg-white rounded-full w-full flex-1">
        <input type="text" placeholder="Search Everything..." className="flex-1 px-4 rouded-l-full outline:none placeholder:text-sm" />
        <button>
          <Search className="rounded-full h-10 px-2 w-10" />
        </button>
      </form>
    </header>
  )
}

export default Header