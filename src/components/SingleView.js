import React, { Component} from 'react';

class SingleView extends Component{
    constructor(props){
        super(props)
        this.postData = this.props.posts.filter((post)=>post.id==this.props.match.params.postID)
        
    }
    render(){
        
        const post = this.postData[0]
        console.log('post=',post)
        return(
            <div className='Portfolio' key={post.id} >
              <div className='image-wrapper' >
                  <img width = '450' height='250' src={post.image} alt="My Image"/>
              </div>
              <div className='content-area' >
                  <h2>{post.title}</h2>
                  <p>{post.text} </p>
              </div>
            </div>

        )
    }
}

export default SingleView