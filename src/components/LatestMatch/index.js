const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails
  console.log(umpires)
  return (
    <li>
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img src={competingTeamLogo} alt="logo" />
      </div>
      <div>
        <p>{firstInnings}</p>
        <p>{secondInnings}</p>
        <p>{manOfTheMatch}</p>
        <p>{umpires}</p>
        <p>{matchStatus}</p>
      </div>
    </li>
  )
}

export default LatestMatch
