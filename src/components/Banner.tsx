import banner from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <nav className='flex container mx-auto '>
            <div className="mx-auto my-10 ">
                <p className='text-5xl font-bold'>Build Your Ideal</p>
                <p className='text-5xl font-bold  bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent '>Development Stack</p>
                <p className='mx-auto my-10'>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.</p>
                <div className='flex'>
                    <button className="btn btn-primary border-0 rounded-2xl bg-linear-to-r from-orange-500 to-pink-500 text-white  px-2 py-2">Explore Technologies</button>
                  <button className="mx-10 btn btn-neutral btn-outline rounded-2xl px-12 py-2">Learn More</button>

                

                </div>
            </div>
            <div className=''>
                <img src={banner} alt="" />
            </div>
        </nav>
    );
};

export default Banner;