import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      
      <div className="row">
        <div className="col s6 m6">
          <div className="card hoverable">
            <div className="card-title">
              {this.props.project.title} - {this.props.project.description}
            </div>
            <div className="card-action"> 
              <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}><i className="material-icons">delete</i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
ProjectItem.propTypes={
  ProjectItem:PropTypes.array,
  onDelete:PropTypes.func
}

export default ProjectItem
