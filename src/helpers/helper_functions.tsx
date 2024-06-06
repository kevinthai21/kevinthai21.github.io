import Skill from '../tsx/Skills';
import '../index.css'

export function createSkillsComponent(skills: string[]) : JSX.Element {
    return (
        <div className='skill-group'>
            {skills.map((skill, _) => (
                <Skill text={skill} />
            ))}
        </div>
    )
}