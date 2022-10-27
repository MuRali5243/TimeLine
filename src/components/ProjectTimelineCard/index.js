import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const TimeLine = props => {
  const {data} = props
  const {
    title,
    projectTitle,
    description,
    imageUrl,
    projectUrl,
    duration,
  } = data
  console.log(projectUrl)
  return (
    <div>
      <img src={imageUrl} className="pro-image" alt="project" />
      <div className="pro-content">
        <h1>{projectTitle}</h1>
        <div className="duration">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>

      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default TimeLine
