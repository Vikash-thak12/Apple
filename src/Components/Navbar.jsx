import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"
const Navbar = () => {
    return (
        <header className="w-full p-5 md:px-10 flex justify-between items-center">
            <nav className="flex items-center w-full screen-max-width">
                <div>
                    <img src={appleImg} alt="Apple" width={32} height={32} />
                </div>
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {
                        navLists.map((nav) => (
                            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                                {nav}
                            </div>
                        ))
                    }
                </div>
                <div className="flex items-center gap-5 cursor-pointer max-sm:flex-1 max-sm:justify-end">
                    <img src={searchImg} alt="Search" width={20} height={20} />
                    <img src={bagImg} alt="Bag" width={20} height={20} />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;