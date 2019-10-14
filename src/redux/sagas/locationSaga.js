import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';


function* getItems() {
    try {
        const response = yield axios.get('/api/shelf');
        yield put({ type: 'SET_SHELF', payload: response.data });
        yield console.log(response.data);
        
    } catch (error) {
        console.log('error in GET', error);
    }
}

function* addItem (action) {
    try {
        yield axios.post('/api/shelf', action.payload )
        yield getItems();
    } catch (error) {
        console.log('Error', error)
    }
}

function* deleteItems(action) {
    try {
        yield axios.delete('/api/shelf/' +action.payload );
    
        yield console.log(action.payload);
        yield getItems();

    } catch (error) {
        console.log('error in GET', error);
    }
}


function* itemSaga() {
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('GET_ITEMS', getItems);
    yield takeLatest('DELETE_ITEM', deleteItems)
  }

export default itemSaga;