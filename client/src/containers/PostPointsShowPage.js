import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPostPoints, addPoint, subtractPoint, updatePoint } from '../actions/index';
import customSort from '../actions/sort';
import PostCard from '../components/PostCard';
import MyForm from '../components/MyForm';

class PostPointsShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchPostPoints(this.props.session.id);
  }

  routeToPostShow = post => {
    this.props.history.push(`${post.movie_id}/posts/${post.id}`)
  }

  render() {
    const sortedPosts = customSort[this.props.session.sortMethod](this.props.posts);
    const renderPosts = sortedPosts.map((post, index) => {
      const postPoint = this.props.postPoints.find(pp => pp.user_id == this.props.session.id && pp.post_id == post.id);

      return (
        <PostCard
          key={index}
          post={post}
          loggedIn={this.props.session.loggedIn}
          addPoint={this.props.addPoint}
          subtractPoint={this.props.subtractPoint}
          updatePoint={this.props.updatePoint}
          session={{
            pointId: !!postPoint ? postPoint.id : 0,
            voted: !!postPoint ? postPoint.value : 0
          }}
          routeToPostShow={this.routeToPostShow}
        />
      )
    })

    return (
      <div>
        <h3 className="text-center">My Rated Posts:</h3>
        {renderPosts}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    posts: state.posts.filter(post => !!state.postPoints.find(pp => pp.user_id == state.session.id && pp.post_id == post.id)),
    postPoints: state.postPoints.filter(pp => pp.user_id == state.session.id),
    session: {
      loggedIn: state.session.loggedIn,
      id: state.session.id,
      sortMethod: state.session.sortMethod
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchPostPoints,
    addPoint,
    subtractPoint,
    updatePoint,
    customSort
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPointsShowPage);
