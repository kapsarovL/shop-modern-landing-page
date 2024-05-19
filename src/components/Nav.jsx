import {hamburger } from "../assets/icons";
import {headerLogo} from "../assets/images";
import { navLinks } from "../constants";


const Nav = () => {
    return (
      <header className="absolute z-10 w-full py-8 padding-x">
        <nav className="flex items-center justify-between max-container">
<a href="/">
            <img src={headerLogo} 
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]" />
</a>
            <ul className="flex items-center justify-center gap-16 flex-l max-lg:hidden">
                {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href} className="text-lg leading-normal text-gray-500 hover:text-black">
                    {item.label}
                    </a>
                </li>
                ))}
            </ul>
          <div className="flex gap-2 text-lg font-medium leading-normal max-lg:hidden wide:mr-24">
            <a href="/">Sign In</a>
            <span></span>
            <a href="/">Explore now</a>
          </div>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger" width={25} height={25}
            onClick={open}/>
          </div>
        </nav>
      </header>
    );
}

export default Nav;
