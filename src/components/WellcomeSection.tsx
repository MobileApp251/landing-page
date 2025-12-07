import '../styles/landing.scss';
import hcmutLogo from '../assets/images/hcmut.png';
import hcmutPic from '../assets/images/hcmut2.jpg';

import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function WellcomeSection() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className="bg-white flex justify-center w-full">
            <div id="home" className="landing-wrapper overflow-hidden flex flex-column min-h-screen">
                <div className="py-3 px-4 flex align-items-center relative  w-screen justify-content-between">
                    <div className='flex align-items-center justify-content-center font-semibold gap-2' data-aos="fade-right">
                        <img src={hcmutLogo} width="38px" height={'38px'} alt="logo" className='mr-2' />
                        <div className='flex flex-column md:align-items-left justify-content-center font-semibold'>
                            <span className='text-lg layout-topbar-maintext w-full'>Mobile Application Development</span>
                            <span className='text-lg layout-topbar-secondarytext'>CO3043</span>
                        </div>
                    </div>

                </div>
                <div
                    className="flex-1"
                    style={{
                        backgroundImage: `url(${hcmutPic})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div
                        id="hero"
                        className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                        style={{
                            clipPath: 'ellipse(150% 87% at 100% 13%)',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)'
                        }}
                    >
                        <div className="py-8 mx-4 md:mr-8 mt-0 md:mt-4 flex gap-4 flex-column xl:flex-row justify-content-center align-items-center" data-aos="fade-left">
                            <h1 className="text-6xl xl:text-7xl font-bold text-white line-height-2 flex flex-column flex-1 xl:pb-8">
                                <span className='layout-topbar-maintext w-full text-center mt-4'>CloneJira</span>
                                <span className='layout-topbar-secondarytext text-center'>No deadline behind</span>
                            </h1>
                            <img src={hcmutLogo} width="250px" height={'250px'} alt="logo" className='hidden xl:block xl:-mt-8 ' />
                            <img src={hcmutLogo} width="150px" height={'150px'} alt="logo" className='xl:hidden' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
