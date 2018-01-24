import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchListRequest } from '../../actions';

class UserList extends PureComponent {
  componentWillMount() {
    if (this.props.users.length === 0) {
      this.props.fetchListRequest();
    }
  }

  renderRow(user) {
    return (
      <tr key={`userlist-row-${user.id}`}>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td><Link to={`/user/${user.id}/edit`}>Edit</Link></td>
      </tr>
    );
  }

  render() {
    const {
      users,
      isLoading,
    } = this.props;

    return (
      <div className="login">

        <table className="table table-bordered">
          {users.map(this.renderRow)}
        </table>

        {isLoading && (
        <p>Loading...</p>
                )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, users }) => ({
  isLoading: users.list.isLoading,
  users: users.list.users,
});

export default connect(mapStateToProps, { fetchListRequest })(UserList);
