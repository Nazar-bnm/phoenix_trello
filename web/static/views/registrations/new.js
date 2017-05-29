import React, {PropTypes, Component}   from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

// import { setDocumentTitle, renderErrorsFor } from '../../utils';
import Actions              from '../../actions/registrations';

class RegistrationsNew extends Component {
  // componentDidMount() {
  //   setDocumentTitle('Sign up');
  // }

  render() {
    return (
      <div>new page</div>
    )
  }
}

const mapStateToProps = (state) => ({
  errors: state.registration.errors,
});

export default connect(mapStateToProps)(RegistrationsNew);
