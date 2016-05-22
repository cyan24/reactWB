import React from 'react';

export default class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }
  render() {
    var imgUrl=this.props['data-my-head-img'];
    if(this.props.isCommentOpen){
       return <div>
        </div>;
    }else{
      return <div className="row comment-form clearfix" >
          <div className="ow-left">
              <img src={imgUrl} alt="头像" className="little-head" />
          </div>
          <div className="ow-right" >
            <textarea name="commentContent" rows="8" cols="40" className="comment-box" onChange={this.props.commentChange}></textarea>
            <input className="comment-btn" type="submit" value="评论" onClick={this.props.commitContent}/>
          </div>
      </div>;
    }
  }
}
// module.exports = CommentForm;