import React, { Component} from 'react';
import { Link } from 'react-router-dom'

class Portfolio extends Component{
  
    render(){
      const {posts, deletePost, viewPost}=this.props
            //destructuring props so that we dont have to repeat this.props.post or this.props.viewPost etx. 
      return(
        <div className='Listcontainer'>
        {
          this.props.posts && this.props.posts.map(post=>(
            <div className='Portfolio' key={post.id} >
              <div className='image-wrapper' >
                  <img width = '450' height='250' src={post.image} alt="My Image"/>
              </div>
              <div className='content-area' >
                  <h2>{post.title}</h2>
                  <p>{post.text} </p>
                  <button type='button' onClick={ ()=>deletePost(post.id) } >Delete</button>
                  <button type='button'>
                      <Link to={`${post.id}`} >View</Link>
                  </button>
                  
              </div>
            </div>
          ))
        }
        </div>





        // <div className="Portfolio">  
        //     <img width = '450' height='250' src={posts.image} alt="My Image"/>
        //     <h2>{posts.title}</h2>
        //     <p>{posts.text} </p>

        //     {/* <button onClick={this.props.delete} >Delete</button> */}
        //     <button onClick={ ()=>deletePost(posts.id) } >Delete</button>
        //     <button onClick={ ()=>viewPost(posts.id) } >View</button>
        //     {/* <button onClick={ ()=>this.props.viewPost(this.props.post.id) } >View</button> */}
            
        // </div>
      )
    }
  }

  export default Portfolio