import '../styles/technology.scss';

const listOfTechLogo = [
    '/tech/react-logo.svg',
    '/tech/php-logo.svg',
    '/tech/express-logo.svg',
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
                                <span className='ml-3 text-neutral-800 font-semibold'>React Native</span>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
