import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, toggleActive, addComment } from '../actions/index';
import customSort from '../actions/sort';
import MyForm from '../components/MyForm';
import ConnectedCommentCard from '../components/CommentCard';

class PostShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const sortedComments = customSort[this.props.session.sortMethod](this.props.comments);
    const renderComments = sortedComments.map((comment, index) => (
      <ConnectedCommentCard
        key={index}
        toggleActive={this.props.toggleActive}
        addComment={this.props.addComment}
        commentId={comment.id}
        renderChildren={true}
        depth={1}
      />
    ))

    const renderRootForm = (
      <MyForm
        fields={['content']}
        onSubmit={this.props.addComment}
        onSubmitText="Reply"
        hiddenValues={{post_id: this.props.post.id}}
      />
    )
    return (
      <div>
        <div className="text-center">
          <h3>{this.props.post.title}</h3>
          <p>
            <span>{this.props.post.username}</span>
            <span className="secondary"> | {this.props.post.timestamp}</span>
          </p>
          <p>{this.props.post.content}</p><br/>
          { this.props.session.loggedIn ? renderRootForm :  ''}
        </div>
        <h5 className="text-center">{this.props.post.comment_count} comments</h5>
        {renderComments}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.find(post => post.id == ownProps.match.params.postId);

  if (!!post) {
    return {
      post: post,
      comments: state.comments.filter(comment => comment.post_id == post.id && !comment.parent_id),
      session: {
        loggedIn: state.session.loggedIn,
        sortMethod: state.session.sortMethod
      }
    }
  } else {
    return {post: {}, comments: [], session: {
      loggedIn: state.session.loggedIn,
      sortMethod: state.session.sortMethod
    }}
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchPost,
    toggleActive,
    addComment
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShowPage);
