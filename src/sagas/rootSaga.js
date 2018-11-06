import { all } from 'redux-saga/effects';

import { watchRequestMovie } from './requestMovie';
import { watchRequestMovieDetails } from './requestMovieDetails';
import { watchAuthRequest } from './requestAuth';
import { watchProfileRequest } from './requestProfile';

export default function* rootSaga() {
    yield all([
        watchRequestMovie(),
        watchRequestMovieDetails(),
        watchAuthRequest(),
        watchProfileRequest()
    ]);
}