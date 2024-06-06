import '../css/Experience.css'
import { createSkillsComponent } from '../helpers/helper_functions';


interface ExperienceProps{
    title: string;
    skills: string[];
    company?: string;
    timeFrame?: string;
    description?: string;
}

const Experience: React.FC<ExperienceProps> = ({
    title,
    company,
    timeFrame,
    description,
    skills
}) => {
    let titleString: string = (company == undefined) ? `${title}` : `${title} • ${company}`
    titleString = (timeFrame == undefined) ? `${titleString}` : `${titleString} / ${timeFrame}`
    const skillsComponent = createSkillsComponent(skills)
    return (
        <div>
            <div id='exp-title'>
                {titleString}
            </div>
            <div id='exp-description'>
                {description}
            </div>
            {skillsComponent}
        </div>
    )
}
export default Experience;