import textlogo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className="flex w-full flex-col ">
                <div className="divider divider-start"></div>
                <div className='flex p-10  justify-between'>
                    <div className=' text-center md:text-left'> <img className='mx-35 md:mx-0' src={textlogo} alt="" />
                        <p className='my-10'>Curated tools, technologies, and resources for developers building <br />
                            modern software.</p>
                        <button className="btn btn-ghost">GitHub</button>
                        <button className="btn btn-ghost">Twitter</button>
                        <button className="btn btn-ghost">LinkedIn</button>
                    </div>
                    <div className='hidden md:inline-flex gap-4 items-center '>
                        <div className=''><h2>PRODUCT</h2>
                        <button className="btn btn-ghost">Home</button><br />
                        <button className="btn btn-ghost">Technologies</button><br />
                        <button className="btn btn-ghost">Projects</button></div>

                    <div><h2>COMPANY</h2>
                        <button className="btn btn-ghost">About</button><br />
                        <button className="btn btn-ghost">Contact</button><br />
                        <button className="btn btn-ghost">Careers</button></div>

                    <div className='-mt-10 mx-3'><h2>LEGAL</h2>
                        <button className="btn btn-ghost">Privacy Policy</button><br />
                        <button className="btn btn-ghost">Terms of Service</button>
                    </div></div>
                    

                </div>
                <div className="divider divider-end"></div>
            </div>
            <div className='flex justify-between h-15'>
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <span> <button className="btn btn-ghost">Privacy</button>
                    <button className="btn btn-ghost">Terms</button></span></div>





        </div >

    );
};

export default Footer;