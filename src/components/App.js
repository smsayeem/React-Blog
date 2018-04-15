import React, { Component } from 'react';
import {Route, Switch} from 'react-router'
import Portfolio from './Portfolio'
import SingleView from './SingleView'
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
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga accusantium porro mollitia nostrum officia, cumque, esse error tempora quo explicabo voluptate dolores eligendi, voluptas culpa iusto voluptatum doloribus eaque!Lorem Lorem minus odio dignissimos ullam alias "
          },
          
          {
            "id": 1002,
            "title": "Post Two",
            "image": "http://via.placeholder.com/450x250",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga accusantium porro mollitia nostrum officia, cumque, esse error tempora quo explicabo voluptate dolores eligendi, voluptas culpa iusto voluptatum doloribus eaque! Lor adipisicing elit. Nulla maiores."
          }, 
          {
            "id": 1003,
            "title": "Post Three",
            "image": "http://via.placeholder.com/450x250",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga accusantium porro mollitia nostrum officia, cumque, esse error tempora quo explicabo voluptate dolores eligendi, voluptas culpa iusto voluptatum doloribus eaque! Lorem ipsum dolor sit amet consectetur, !"
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
        <Switch>
          <Route exact path='/' render={()=>(
            <Portfolio 
                {...this.state}
                deletePost = {this.handleDelete}
                viewPost = {this.handleSingleView}
              />
          )} />
          <Route path='/:postID' render={(props)=>(
            <SingleView {...this.state} {...props}/>
          )} />
        </Switch>

        {/* <div className="Listcontainer">
          {
            this.state.posts.map((post_value)=>( 
              <Portfolio 
                key ={post_value.id} 
                posts = {post_value} 
                deletePost = {this.handleDelete}
                viewPost = {this.handleSingleView}
              />
            ))
          }
        </div>  */}


      </div>
    );
  }
}


export default App;