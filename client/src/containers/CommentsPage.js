import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComments } from '../actions/index';
import customSort from '../lib/sort';
import ConnectedCommentCard from '../components/CommentCard';

class CommentsPage extends React.Component {

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.userId);
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
    comments: state.comments.filter(comment => comment.user_id === state.session.id),
    commentPoints: state.commentPoints.filter(cp => cp.user_id === state.session.id),
    session: {
      loggedIn: state.session.loggedIn,
      sortMethod: state.session.sortMethod,
      id: state.session.id
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchComments,
    customSort
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage);
