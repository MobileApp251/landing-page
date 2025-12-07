import '../styles/technology.scss';

const listOfTechLogo = [
    '/tech/react-logo.svg',
    '/tech/spring-logo.svg',
    '/tech/mysql-logo.png',
    '/tech/railway-logo.svg'
]

export default function Technology() {

    const repeatedSlides = [...listOfTechLogo, ...listOfTechLogo];

    return (
        <div className="technology">
            <h1 className='title'>Technologies</h1>
            <div className="carousel-wrapper">
                <div className="carousel-track">
                    {repeatedSlides.map((slide, index) => (
                        <div className="carousel-slide" key={index}>
                            <img src={slide} alt={slide} />
                            {slide === '/tech/react-logo.svg' ? (
                                <span className='ml-3 react font-semibold'>React Native</span>
                            ) : null}
                            {slide === '/tech/spring-logo.svg' ? (
                                <span className='ml-3 spring-boot font-semibold'>Spring Boot</span>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
