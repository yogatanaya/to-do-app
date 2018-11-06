import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import Projects from './Component/Projects'
import AddProject from './Component/AddProject'


class App extends Component {
  constructor(){
    super();
    this.state={
      projects: [

    
      ]
    }
  }
  componentWillMount(){
    this.setState({projects: [
      
    ]})
  }

  handleAddProject(project){
    let projects=this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }
  handleDeleteProject(id){
    let projects=this.state.projects;
    let index =projects.findIndex(x=> x.id===id);
    projects.splice(index, 1);
    this.setState({projects: projects})
  }
  render() {
    return (
      <div className="App">
        <AddProject AddProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
     
      </div>
    );
  }
}

export default App;
