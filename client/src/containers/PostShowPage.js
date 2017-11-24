import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions/index';
import CommentCard from '../components/CommentCard';

class PostShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const renderComments = this.props.comments.map((comment, index) => (
      <CommentCard
        key={index}
        comment={comment}
      />
    ))

    return (
      <div>
        <div className="postCard">
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.content}</p>
        </div>
        {renderComments}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.find(post => post.id == ownProps.match.params.postId);

  if (!!post) {
    return {post: post, comments: state.comments.filter(comment => comment.post_id == post.id)}
  } else {
    return {post: {}, comments: []}
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchPost
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShowPage);
