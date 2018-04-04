import React from 'react';
import { connect } from 'react-redux';

class UserList extends React.Component {
  renderUser(user) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Cheese Factory</p>
        <a className="btn btn-primary">Email</a>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}
