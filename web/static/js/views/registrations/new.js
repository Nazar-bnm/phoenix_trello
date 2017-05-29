import React, {PropTypes, Component}   from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

class RegistrationsNew extends Component {
  render() {
    return (
      <div>new page</div>
    )
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(RegistrationsNew);
