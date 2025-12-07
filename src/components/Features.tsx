import '../styles/features.scss'

export default function Features() {
    return (
        <div className="key-features">
            <h1 className='title'>Key Features</h1>
            <div className='pic-frame'>
                <div className="feature-card" data-aos="fade-left">
                    <img src="/project-management.jpg" alt="Project Management" className="feature-img" />
                    <div className="feature-info">
                        <h3>Project Management</h3>
                        <p>Enables users to create, edit, and track projects and related tasks.</p>
                    </div>
                </div>

                <div className="feature-card" data-aos="fade-right">
                    <img src="/deadline-reminder.jpg" alt="Deadline Notification" className="feature-img" />
                    <div className="feature-info">
                        <h3>Deadline Notification</h3>
                        <p>Sends reminders before task or project deadlines to prevent missed deadlines.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
