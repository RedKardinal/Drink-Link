import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* locationSaga() {
    yield takeLatest('FETCH_LOCATION', fetchLocation);

}

// GET locations from database
function* fetchLocation() {
    try {
        const response = yield axios.get('/api/location');
        yield put({ type: 'SET_LOCATION', payload: response.data });
        yield console.log(response.data);
    } catch (error) {
        console.log('error in FETCH LOCATIONS saga', error);
    }
}

// function* addItem (action) {
//     try {
//         yield axios.post('/api/shelf', action.payload )
//         yield getItems();
//     } catch (error) {
//         console.log('Error', error)
//     }
// }

// function* deleteItems(action) {
//     try {
//         yield axios.delete('/api/shelf/' +action.payload );
    
//         yield console.log(action.payload);
//         yield getItems();

//     } catch (error) {
//         console.log('error in GET', error);
//     }
// }

export default locationSaga;