import Image from "next/image"
import {
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline"
import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid"

const Header = () => {
  return (
    <div className="shadow-sm sticky border-b bg-white top-0">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24  cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            alt="image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10  flex-shrink-0 cursor-pointer  lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            alt="image"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - Search input field */}
        <div className="max-w-xs">
          <div className="relative p-3 mt-1 ">
            <div className="absolute flex items-center inset-y-0 pl-3 pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="search"
              className="bg-gray-50 w-full pl-10 sm:text-sm border-gray-300  focus:ring-black focus:border-black rounded-md"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 justify-end">
          <HomeIcon className="btn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative btn">
            <PaperAirplaneIcon className="btn  rotate-45" />
            <div className="absolute -top-1 -right-2 bg-red-500 w-5 h-5 flex items-center justify-center rounded-full animate-pulse text-white">
              5
            </div>
          </div>
          <PlusCircleIcon className="btn" />
          <UserCircleIcon className="btn" />
          <HeartIcon className="btn" />
          <img
            src="https://avatars.githubusercontent.com/u/78728323?v=4"
            alt="profile"
            className="h-10 rounded-full hover:scale-125 duration-150 cursor-pointer ease-out "
          />
        </div>
      </div>
    </div>
  )
}

export default Header
