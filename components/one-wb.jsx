import React from 'react';
import CommentForm from './comment-form.jsx';
import ContentImg from './content-img.jsx';

class OneWB extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isComment:false,
      commentContent:'',
    };
  }

  render() {
   var oneData=this.props.oneData;
   var commentForm;
   var contentImgs;
   if(this.state.isComment) {
     //控制评论框是否展现,因为是动态的，所以放在state而不是props
     commentForm =<CommentForm data-my-head-img={oneData.headUrl} commentChange={this.handleCommentChange.bind(this)} commitContent={this.handleCommitContent.bind(this)} isCommentOpen={this.isComment}/>;
   }

   if(oneData.contentImgUrls){
     //若后端给的数据中有图片url，则展示
     contentImgs = <ContentImg content-img-urls={oneData.contentImgUrls} />
   }
   return <div className="big-center" >
     <div className="one-wb ">
       <div className="clearfix">
         <div className="ow-left">
            <img className="nick-img" src={oneData.headUrl}/>
         </div>
         <div className="ow-right">
           <div className="ow-nick row">
             <span>{oneData.nickName}</span>
           </div>
           <div className="ow-content row">{oneData.content}</div>
           {contentImgs}
         </div>
       </div>
       <div className="ow-footer row ">
         <ul className="clearfix" onClick={this.handlerForwardClick.bind(this)}>
           <li className="li-side-border"><span>收藏</span> {oneData.NoCollect}</li>
           <li className="li-side-border"><span>转发</span> {oneData.NoForward}</li>
           <li className="li-side-border"><span>评论</span> {oneData.NoComment}</li>
           <li><span>赞</span> {oneData.NoPointGreat}</li>
         </ul>
       </div>
     </div>
     {commentForm}
   </div>;
  }
  //操作栏点击事件处理
  handlerForwardClick(event) {
    if(event.target.innerText.indexOf('评论')!=-1){
      if(this.state.isComment){
        this.setState({isComment:false});
      }else{
        this.setState({isComment:true});
      }
    }else{
      this.setState({isComment:false});

    }
  }
  //评论框内容变化
  handleCommentChange(event){
    this.setState({commentContent:event.target.value});
  }
  //提交内容评论
  handleCommitContent(){
    console.log("commit!!");
    console.log(this.state.commentContent);
    this.setState({isComment:false});
  }
}
module.exports = OneWB;