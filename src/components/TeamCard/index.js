import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="li-container">
      <li>
        <div className="li-content">
          <img src={teamImageUrl} alt={name} className="team-img-logo" />
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
