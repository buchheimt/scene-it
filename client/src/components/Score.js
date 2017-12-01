import React from 'react';
import FAPlus from 'react-icons/lib/fa/plus';
import FAMinus from 'react-icons/lib/fa/minus';

const Score = props => {
  const renderStats = (
    <div>
      <p className="text-center secondary" id="scoreNet">
        {props.score.net}
      </p>
      <p className="text-center tertiary" id="scoreNet">
        {props.score.percentage}
      </p>
    </div>
  )

  let renderScore;
  if (props.loggedIn) {
    renderScore = (
      <div>
        <button
          className="vote center"
          onClick={e => {
            props.voted != 0 ? props.updatePoint(props.pointId, props.format, 1) : props.addPoint(props.id, props.format)
          }}
          disabled={props.voted === 1}
        >
          <FAPlus
            className='plusIcon'
            color={ props.voted === 1 ? '#5A5' : '#9D9'}
            size={15}
          />
        </button><br />
        {renderStats}
        <button
          className="vote center"
          onClick={e => {
            props.voted != 0 ? props.updatePoint(props.pointId, props.format, -1) : props.subtractPoint(props.id, props.format)
          }}
          disabled={props.voted === -1}
        >
          <FAMinus
            className='minusIcon'
            color={ props.voted === -1 ? '#A55' : '#D99'}
            size={15}
          />
        </button>
      </div>
    )
  } else {
    renderScore = renderStats;
  }


  return (
    <div>
      {renderScore}
    </div>
  )
}

export default Score;
