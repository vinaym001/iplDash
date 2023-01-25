import {Component} from 'react'

import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {matchDetails: {}}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const newData = {
      teamLogoUrl: data.team_banner_url,
      updatedLatestMatchDetails: data.latest_match_details,
      recentMatch: data.recent_matches,
    }
    const {updatedLatestMatchDetails} = newData
    const formatedLatestMatchDetails = {
      competingTeam: updatedLatestMatchDetails.competing_team,
      competingTeamLogo: updatedLatestMatchDetails.competing_team_logo,
      date: updatedLatestMatchDetails.date,
      firstInnings: updatedLatestMatchDetails.first_innings,
      id: updatedLatestMatchDetails.id,
      manOfTheMatch: updatedLatestMatchDetails.man_of_the_match,
      matchStatus: updatedLatestMatchDetails.match_status,
      result: updatedLatestMatchDetails.result,
      secondInnings: updatedLatestMatchDetails.second_innings,
      umpires: updatedLatestMatchDetails.umpires,
      venue: updatedLatestMatchDetails.venue,
    }
    const {recentMatch} = newData
    const newRecentMatch = recentMatch.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpire: eachItem.umpire,
      venue: eachItem.venue,
    }))

    newData.updatedLatestMatchDetails = formatedLatestMatchDetails
    newData.recentMatch = newRecentMatch
    this.setState({
      matchDetails: newData,
    })
  }

  render() {
    const {matchDetails} = this.state

    const {teamImageUrl, updatedLatestMatchDetails, recentMatch} = matchDetails
    console.log(recentMatch)
    return (
      <div>
        <img src={teamImageUrl} alt="banner" className="banner" />
        <div>
          <LatestMatch
            key={updatedLatestMatchDetails.id}
            matchDetails={updatedLatestMatchDetails}
          />
        </div>
        <ul>
          {recentMatch.map(eachItem => (
            <MatchCard key={eachItem.id} recentMatchDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
