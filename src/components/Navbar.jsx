import {appleImg, searchImg, bagImg} from "../utils"
import {navLists} from "../constants"

const Navbar = () =>{
    return(
        <header className="w-full py-5 sm:px-10 px-5">
            <nav className="flex w-full justify-between items-center container">
                <img src={appleImg} alt="Apple" width={14} height={18}/>
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav) => (
                        <div key={nav} className="px-5 text-sm cursor-pointer text-gray-300 hover:text-white transition-all duration-300">
                            {nav}
                        </div>
                    ))}
                </div>
                <div className="flex gap-7 items-center max-sm:justify-end max-sm:justify-end">
                    <img src={searchImg} alt="Search" width={18} height={18}/>
                    <img src={bagImg} alt="Bag" width={18} height={18}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar