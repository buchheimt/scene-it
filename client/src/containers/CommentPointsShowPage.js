import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCommentPoints } from '../actions/index';
import customSort from '../actions/sort';
import MyForm from '../components/MyForm';
import ConnectedCommentCard from '../components/CommentCard';

class CommentPointsShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchCommentPoints(this.props.session.id);
  }

  render() {
    const sortedComments = customSort[this.props.session.sortMethod](this.props.comments);
    const renderComments = sortedComments.map((comment, index) => (
      <ConnectedCommentCard
        key={index}
        toggleActive={this.props.toggleActive}
        addComment={this.props.addComment}
        commentId={comment.id}
        renderChildren={false}
      />
    ))

    return (
      <div>
        <h3 className="text-center">My Rated Comments:</h3>
        {renderComments}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments.filter(comment => !!state.commentPoints.find(cp => cp.user_id == state.session.id && cp.comment_id == comment.id)),
    commentPoints: state.commentPoints.filter(cp => cp.user_id == state.session.id),
    session: {
      loggedIn: state.session.loggedIn,
      sortMethod: state.session.sortMethod,
      id: state.session.id
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCommentPoints,
    customSort
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentPointsShowPage);
