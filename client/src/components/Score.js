import React from 'react';
import FAPlus from 'react-icons/lib/fa/plus';
import FAMinus from 'react-icons/lib/fa/minus';

const Score = props => (
  <div>
    <button className="vote" onClick={e => props.addPoint(props.id, props.format, e)}>
      <FAPlus className='plusIcon' color='#9D9' size={15} />
    </button><br />
    <p className="mt-3">{props.score}</p>
    <button className="vote" onClick={e => props.subtractPoint(props.id, props.format, e)} >
      <FAMinus className='minusIcon' color='#D99' size={15} />
    </button>
  </div>
)

export default Score;
