import '../styles/team.scss';
const teamMembers = [
    { name: 'Nguyen Tien Phat', role: 'Frontend Developer', avatar: '/avatar/phat.jpg' },
    { name: 'Nguyen Ngoc Dieu Ha', role: 'Frontend Developer', avatar: '/avatar/ha.jpg' },
    { name: 'Mai Dang Duong', role: 'Backend Developer', avatar: '/avatar/duong.jpg' },
    { name: 'Nguyen Quoc Kiet', role: 'Backend Developer', avatar: '/avatar/kiet.jpg' },
];

const links = [
    { icon: '/tech/figma-logo.svg', url: 'https://www.figma.com/design/tmIHtM4PJhKNQHWMUJYRC9/CloneJira?node-id=0-1&t=WDmMmYDpDHRsputP-1' },
    { icon: '/tech/behance-logo.svg', url: 'https://www.behance.net/gallery/239039487/CloneJira' },
    { icon: '/tech/github-logo.svg', url: 'https://github.com/MobileApp251/wiki/wiki' },
];

export default function Team() {
    return (
        <section className="team-section">
            <h2 className="title">Meet the Team</h2>

            <div className="team-grid">
                {teamMembers.map((member, idx) => (
                    <div className="team-card" key={idx}>
                        <div className='pic-wrapper'>
                            <img className='pic' alt="Card" src={member.avatar} />
                        </div>
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                    </div>
                ))}
            </div>
            <p className="subtitle">Check out our project resources here</p>
            <div className="team-links">
                {links.map((link, idx) => (
                    <a href={link.url} target="_blank" rel="noreferrer" key={idx}>
                        <img src={link.icon} alt="" />
                    </a>
                ))}
            </div>
        </section>
    );
}
