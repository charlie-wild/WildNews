import React, { Component, Fragment } from "react";
import * as api from "./api";
import "./addtopic.css";

class AddTopic extends Component {
  state = {
    slug: "",
    description: "",
    err: null
  };
  render() {
    return (
      <Fragment>
        <h2>Add A Topic</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="add_topic">
            <label className="label" htmlFor="topic_title">
              Topic:
            </label>
            <input
              type="text"
              placeholder="Give the topic a snappy title."
              className="input is-primary addTopic"
              id="slug"
              value={this.state.slug}
              onChange={this.handleChange}
              required
            />
            <label className="label" htmlFor="description">
              Description:
            </label>
            <input
              type="text"
              id="description"
              placeholder="What is your topic about?"
              className="input is-primary addTopic"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <button className="button is-primary is-large">Add Topic</button>
        </form>
        {this.state.err && <p>Oh no! We've encountered an error.</p>}
      </Fragment>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    api
      .postTopic(this.state.slug, this.state.description)
      .then(topic => {
        alert(
          "Topic Added Successfully! Now create an article for your new topic."
        );
        this.props.addTopic(topic);
        this.setState({ slug: "", description: "" });
      })
      .catch(error => {
        console.log(error);
        this.setState({ err: true });
      });
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value
    });
  };
}

export default AddTopic;
