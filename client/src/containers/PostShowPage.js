import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, toggleActive, addComment } from '../actions/index';
import MyForm from '../components/MyForm';
import CommentCard from '../components/CommentCard';

class PostShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  onSubmit = values => {
    console.log('!!!!!!',values)
    this.props.addComment(values);
  }

  render() {
    const renderComments = this.props.comments.map((comment, index) => (
      <CommentCard
        key={index}
        toggleActive={this.props.toggleActive}
        addComment={this.props.addComment}
        commentId={comment.id}
      />
    ))

    return (
      <div>
        <div className="postCard">
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.content}</p>
          <MyForm
            fields={['content']}
            onSubmit={this.onSubmit}
            onSubmitText="Reply"
            hiddenValues={{post_id: this.props.post.id}}
          />
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
    fetchPost,
    toggleActive,
    addComment
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShowPage);
