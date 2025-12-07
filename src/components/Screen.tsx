import '../styles/screen.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const listOfScreen = [
    '/screen/Onboarding-1.png',
    '/screen/Onboarding-2.png',
    '/screen/Onboarding-3.png',
    '/screen/Onboarding-4.png',
    '/screen/LoginScreen.png',
    '/screen/Dashboard.png',
    '/screen/MyTask.png',
    '/screen/ProjectDetail.png',
    '/screen/TaskDetail.png',
    '/screen/Notifications.png',
]

export default function Screen() {
    return (
        <div className="screen" data-aos="fade-up">
            <h1 className='title'>Design Screens</h1>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {listOfScreen.map((screen, index) => (
                    <SwiperSlide key={index}>
                        <img className='screenshot' src={screen} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex items-center'>
                Designed with <span>
                    <a href='https://www.figma.com/design/tmIHtM4PJhKNQHWMUJYRC9/CloneJira?node-id=0-1&t=WDmMmYDpDHRsputP-1' target="_blank" rel="noreferrer">
                        <img className='figma ml-2' src="/tech/figma-logo.svg" alt="Figma" />
                    </a></span>
            </div>
        </div>
    )
}
