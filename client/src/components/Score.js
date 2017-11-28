import React from 'react';
import FAPlus from 'react-icons/lib/fa/plus';
import FAMinus from 'react-icons/lib/fa/minus';

const Score = props => (
  <div>
    <button className="vote center" onClick={e => props.addPoint(props.id, props.format, e)}>
      <FAPlus className='plusIcon' color='#9D9' size={15} />
    </button><br />
    <p className="text-center" id="scoreNet">{props.score}</p>
    <button className="vote center" onClick={e => props.subtractPoint(props.id, props.format, e)} >
      <FAMinus className='minusIcon' color='#D99' size={15} />
    </button>
  </div>
)

export default Score;
