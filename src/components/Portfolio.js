import React, { Component } from 'react';

class Portfolio extends Component{
    render(){

      const {post, deletePost, viewPost}=this.props
            //destructuring props so that we dont have to repeat this.props.post or this.props.viewPost etx. 
      return(
        <div className="Portfolio">  
            <img width = '450' height='250' src={post.image} alt="My Image"/>
            <h2>{post.title}</h2>
            <p>{post.text} </p>

            {/* <button onClick={this.props.delete} >Delete</button> */}
            <button onClick={ ()=>deletePost(post.id) } >Delete</button>
            <button onClick={ ()=>viewPost(post.id) } >View</button>
            {/* <button onClick={ ()=>this.props.viewPost(this.props.post.id) } >View</button> */}
            
        </div>
      )
    }
  }

  export default Portfolio