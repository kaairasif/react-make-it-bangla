import React from 'react';

class SingleView extends React.Component {
	constructor(props){
		super(props);
        this.postData = this.props.posts.filter(post => post.id == this.props.match.params.postID)
	}

	render() {
		// console.log(this.props);
		console.log("this.postData", this.postData);
        const post = this.postData[0]
		return(			
        	<div className="portfolio single">
				<div className="image-wrapper">
		          <img width="450" height="250" src={post.image} alt="portfolio" />
		        </div>
		        <div className="content-area">
		          <h2>{post.title}</h2>
		          <p>{post.text}</p>
		        </div>   
			</div>
		)
	}
}

export default SingleView;