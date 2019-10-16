import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* locationSaga() {
    yield takeLatest('FETCH_LOCATION', fetchLocation);
    yield takeLatest('DELETE_LOCATION', deleteLocation);
    yield takeLatest('ADD_LOCATION', addLocation)
}

// GET locations for locationList, locationEdit, & locationApprove
function* fetchLocation() {
    try {
        const response = yield axios.get('/api/location');
        yield put({ type: 'SET_LOCATION', payload: response.data });
        yield console.log(response.data);
    } catch (error) {
        console.log('error in FETCH LOCATIONS saga', error);
    }
} // end fetchLocation

// ADD location to the database
function* addLocation (action) {
    try {
        console.log(action);
        yield axios.post('/api/location', action.payload )
        yield fetchLocation();
    } catch (error) {
        console.log('Error', error)
    }
} // end addLocation

// Delete location called from LocationEdit page
function* deleteLocation (action) {
    try {
        yield axios.delete('/api/location/' + action.payload );
        yield console.log(action.payload);
        yield fetchLocation();
    } catch (error) {
        console.log('error in DELETE saga', error);
    }
} // end deleteLocation

export default locationSaga;