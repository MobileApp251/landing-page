import '../styles/overview.scss'

import { Card } from 'primereact/card'

export default function ProjectOverview() {
    const header1 = (
        <div className='pic-wrapper'>
            <img className='pic' alt="Card" src="/problem.jpg" />
        </div>
    );

    const header2 = (
        <div className='pic-wrapper'>
            <img className='pic' alt="Card" src="/user.jpg" />
        </div>
    );

    const header3 = (
        <div className='pic-wrapper'>
            <img className='pic' alt="Card" src="/value.jpg" />
        </div>
    );

    return (
        <div className="project-overview">
            <h1 className='title'>Project Overview</h1>
            <div className="cards">
                <Card title="Problem Statement" header={header1} className="md:w-25rem" data-aos="flip-left" data-aos-delay="0">
                    <p className="m-0">
                        Many students and teams struggle to track project deadlines efficiently. Missed deadlines lead to stress and reduced productivity. There is no simple tool that integrates task management and real-time reminders in one place.
                    </p>
                </Card>
                <Card title="Target Users" header={header2} className="md:w-25rem" data-aos="flip-left" data-aos-delay="150">
                    <p className="m-0">
                        - Students and study groups needing to track assignments and projects. <br />
                        - People who need automated reminders and a simple, intuitive interface to improve productivity.
                    </p>
                </Card>
                <Card title="Product Value Proposition" header={header3} className="md:w-25rem" data-aos="flip-left" data-aos-delay="300">
                    <p className="m-0">
                        Our app, CloneJira, provides an easy-to-use platform to track tasks and deadlines in real time,
                        helping users stay organized, reduce stress, and ensure no deadline is ever missed.
                        The intuitive interface and automated reminders improve productivity for both individuals and teams.
                    </p>
                </Card>
            </div>
        </div>
    )
}
