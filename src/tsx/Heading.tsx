import '../css/Heading.css'

interface HeadingProps{
    title: string;
    subtitle?: string,
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
}) => {

    const titleComponent = <div id='title'>{title}</div>
    const subtitleComponent = <div id='subtitle'>{subtitle}</div>

    return (
        <div className='heading'>
            {titleComponent}
            {subtitleComponent}
        </div>
    )
}

export default Heading;