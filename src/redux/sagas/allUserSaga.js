import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* allUserSaga() {
    yield takeLatest('FETCH_ALL_USER', getAllUser);
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

// // Delete location called from LocationEdit page
// function* deleteLocation (action) {
//     try {
//         yield axios.delete('/api/location/' + action.payload );
//         yield console.log(action.payload);
//         yield fetchLocation();
//     } catch (error) {
//         console.log('error in DELETE LOCATIONS saga', error);
//     }
// } // end deleteLocation

export default allUserSaga;