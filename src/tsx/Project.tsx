import Skill from './Skills';
import '../css/Project.css'

interface ProjectProps{
    title: string;
    description: string;
    skills: string[]
    link?: string;
    bgColor?: string,
}

const Project: React.FC<ProjectProps> = ({
    title,
    description,
    link,
    skills,
    bgColor="#EEF3FF",
}) => {

    const titleString = (link !== undefined) ? `${title} ↗`: title
    const titleComponent = (link == undefined) ? <div>{titleString}</div> : <div><a href={link}>{titleString}</a></div>

    const skillsComponent = <div className='skill-group'>
        {skills?.map((skill, _) => (
            <Skill text={skill} />
        ))}
    </div>

    return (
        <div
            style={{
                display: 'inline-block',
                padding: `${20*0.5}px ${20 * 1.5}px`,
                paddingBottom: `30px`,
                backgroundColor: bgColor,
                borderRadius: '50px',
            }}
        >
            <div className='project-information'>
                <div id="project-title">
                    {titleComponent}
                </div>
                <div id='project-description'> 
                    {description}
                </div>
                <div>
                    {skillsComponent} 
                </div>
            </div>
        </div>
    );
};

export default Project;