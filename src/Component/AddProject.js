import React, { Component } from 'react'
import uuid from 'uuid'
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';

const renderField=({input, label, type, meta:{touched, error, warning}})=>(
  <div>
    <div className="input-field">
      <label className="row">{label}</label>
      <input className="input-field" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

// validasi
const validate=val=>{
  const errors={};
  if(!val.title){
    console.log('title is required');
    errors.title="Required";
  }
}

class AddProject extends Component {

  constructor(){
    super();
    this.state={
      newProject:{}
    }
  }

  handleSubmit(e){
    
    if(this.refs.title.value ===''){
      alert('title is required');
    }else{
      this.setState({newProject:{
        id:uuid.v4(),
        title:this.refs.title.value,
        description:this.refs.description.value
      }}, function(){
        //console.log(this.state)
        this.props.AddProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <nav className="nav-wrapper">
          <a className="brand-logo" href="">My To Do List </a>
        </nav>
     
        <form onSubmit={this.handleSubmit.bind(this)}  >
          <div className="row">
            <div className="col s3">
              <div className="row">
                <div className="input-field col s12">
                  <Field ref="title" name="title" component={renderField} type="text" />
                  <label className="active">Title</label>
                </div>
                <div className="input-field col s12">
                  <Field  component={renderField} name="description" type="text" ref="description"/>
                  <label className="active">Description</label>
                </div>
                
                <div className="input-field col s12">
                  <input type="submit" className="btn wave-light indigo" value="submit"/>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
AddProject=reduxForm({
  form: 'AddProject',
  validate,
})(AddProject)

AddProject.propTypes={
  onDelete:PropTypes.func
}


export default AddProject
