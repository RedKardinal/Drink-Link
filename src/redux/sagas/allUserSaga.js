import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* allUserSaga() {
    yield takeLatest('FETCH_ALL_USER', getAllUser);
    yield takeLatest('DELETE_USER', deleteUser)
}

// GET locations for locationList, locationEdit, & locationApprove
function* getAllUser() {
    try {
        const response = yield axios.get('/api/user/all');
        yield put({ type: 'SET_ALL_USER_INFO', payload: response.data });
        yield console.log(response.data);
    } catch (error) {
        console.log('error in FETCH ALL USER INFO saga', error);
    }
} // end fetchLocation

// Delete location called from LocationEdit page
function* deleteUser (action) {
    try {
        yield axios.delete('/api/user/all/' + action.payload );
        yield console.log(action.payload);
        yield getAllUser();
    } catch (error) {
        console.log('error in DELETE User saga', error);
    }
} // end deleteLocation

export default allUserSaga;