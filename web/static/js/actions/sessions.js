import { push }                           from 'react-router-redux';
import { httpGet, httpPost, httpDelete }  from '../utils';


const Actions = {
  currentUser: () => {
    return dispatch => {
      const authToken = localStorage.getItem('phoenixAuthToken');

      httpGet('/api/v1/current_user')
      .then(function (data) {
        setCurrentUser(dispatch, data);
      })
      .catch(function (error) {
        console.log(error);
        dispatch(push('/sign_in'));
      });
    };
  }
};

export default Actions;
