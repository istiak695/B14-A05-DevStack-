import textlogo from '../assets/logo-text.png'


const Nav = () => {
    return (
            
            <nav className='container mx-auto px-10 sticky top-0 bg-white p-4 shadow'>
        <div className=' container mx-auto flex justify-between'>

                <img src={textlogo} alt="" />
            
                <ul className='flex gap-4 items-center'>
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