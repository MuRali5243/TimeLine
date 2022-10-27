import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(each => ({title: each.title}))
  console.log(items)
  return (
    <div className="main">
      <h1>MY JOURNEY OF CCBP 4.0</h1>

      <Chrono mode="VERTICAL_ALTERNATING" items={items}>
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimeLineCard data={each} key={each.id} />
          }
          return <ProjectTimeLineCard data={each} key={each.id} />
        })}
      </Chrono>
    </div>
  )
}
export default TimelineView
