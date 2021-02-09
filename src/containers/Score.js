import { connect } from 'react-redux'
const ScoreContainer = ({nickName, results}) => {
  const calcPoints = () => {
    const unCheckedCorrectResults = results.filter(result => !result.checked && result.isBadWord)
    const checkedUnCorrectResults = results.filter(result => result.checked && !result.isBadWord)
    const checkedCorrectResults = results.filter(result => result.checked && result.isBadWord)
    console.log(checkedUnCorrectResults.length)
    console.log(checkedCorrectResults.length)
    console.log(unCheckedCorrectResults.length)
    return (checkedCorrectResults.length * 2) - (checkedUnCorrectResults.length + unCheckedCorrectResults.length)
  }

  return(
    <div>
      <h1 className="h5 text-center">Congratulations, {nickName}</h1>
      <h2 className="h6 text-center">Your Score</h2>
      <p className="text-primary text-center">
        <strong>{calcPoints()}</strong>
      </p>
    </div>
  )
}
const mapStateToProps = (state) => ({
  nickName: state.game.nickName,
  results: state.game.results
})

export default connect(mapStateToProps, null)(ScoreContainer)