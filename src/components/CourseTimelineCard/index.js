import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const TimeLine = props => {
  const {data} = props
  const {title, courseTitle, description, tagsList, duration} = data
  return (
    <div>
      <div className="head">
        <h1>{courseTitle}</h1>
        <div className="duration">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>

      <p>{description}</p>
      <ul>
        {tagsList.map(each => (
          <li>{each.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default TimeLine
