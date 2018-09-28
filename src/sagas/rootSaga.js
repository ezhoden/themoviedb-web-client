import { all } from 'redux-saga/effects';

import { watchRequestMovie } from './requestMovie';

export default function* rootSaga() {
    yield all([
        watchRequestMovie()
    ]);
}