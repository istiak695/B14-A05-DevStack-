import textlogo from '../assets/logo-text.png'


const Nav = () => {
    return (
            
            <nav className='container mx-auto px-10 md:px-5 sticky top-0 z-50 bg-white p-4 shadow'>
        <div className=' container mx-auto flex justify-between'>
<div className='md:hidden -mx-5 '><label className="btn btn-circle swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />

  {/* hamburger icon */}
  <svg
    className="swap-off fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
  </svg>

  {/* close icon */}
  <svg
    className="swap-on fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <polygon
      points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
  </svg>
</label></div>
                <img  src={textlogo} alt="Dev Stack" />
            
                <ul className='hidden md:inline-flex gap-4 items-center'>
                    <li className='text-[#DB2777]'>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>

                </ul>
            <div className='flex gap-2 items-center '>
            <button className="btn btn-ghost">Sign In</button>

                <button className="btn btn-secondary rounded-3xl bg-[#D91B7E]">Sign Up</button>
</div>
                </div></nav>
        
    );
};

export default Nav;