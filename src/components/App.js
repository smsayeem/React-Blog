import React, { Component } from 'react';
import {Route, Switch} from 'react-router'
import Portfolio from './Portfolio'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = { 
      posts:[
          {
            "id": 1001,
            "title": "Post one",
            "image": "http://via.placeholder.com/450x250",
            "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ipsam consectetur esse, dicta sapiente amet aut, nulla maiores minus odio dignissimos ullam alias maxime. Quia inventore ipsa accusantium eius sed! .Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis quidem, nam velit sit facilis, tempora voluptatem tenetur cum placeat hic autem voluptate sint maxime vel earum eum optio cumque!"
          },
          {
            "id": 1002,
            "title": "Post Two",
            "image": "http://via.placeholder.com/450x250",
            "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ipsam consectetur esse, dicta sapiente amet aut, nulla maiores minus odio dignissimos ullam alias maxime. Quia inventore ipsa accusantium eius sed! .Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis quidem, nam velit sit facilis, tempora voluptatem tenetur cum placeat hic autem voluptate sint maxime vel earum eum optio cumque!"
          },
          {
            "id": 1003,
            "title": "Post Three",
            "image": "http://via.placeholder.com/450x250",
            "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ipsam consectetur esse, dicta sapiente amet aut, nulla maiores minus odio dignissimos ullam alias maxime. Quia inventore ipsa accusantium eius sed! .Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis quidem, nam velit sit facilis, tempora voluptatem tenetur cum placeat hic autem voluptate sint maxime vel earum eum optio cumque!"
          }
      ] 
    }
  } //end on Constructor


  handleDelete = (i)=>{
        //FITLER: will filter all other dara except the current one

      this.setState({
        posts: this.state.posts.filter((post)=>post.id !==i)
      })
  
  }
  handleSingleView = (i)=>{
    const updatedPost = this.state.posts.filter((post)=>post.id ===i)
    console.log('updatedPost=', updatedPost)
    console.log('View Id=', i)
    this.setState({
      posts:updatedPost
    })
  }
  render() {
    return (
      <div className="App">
        <div className="HeaderWrap">
          <header className="App-header">
            <h1 className="App-title">Welcome to ReactJS Blog App</h1>
          </header>
        </div>
        {/* <Switch>
          Route exact path='/' render={()=>(
            <Portfolio 
                key ={data_value.id} 
                post = {data_value} 
                deletePost = {this.handleDelete}
                viewPost = {this.handleSingleView}
              />
          )} />
        </Switch> */}
        <div className="Listcontainer">
          {
            this.state.posts.map((data_value)=>( 
              <Portfolio 
                key ={data_value.id} 
                post = {data_value} 
                deletePost = {this.handleDelete}
                viewPost = {this.handleSingleView}
              />
            ))
          }
        </div> 


      </div>
    );
  }
}

export default App;