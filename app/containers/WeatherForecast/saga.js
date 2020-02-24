import { takeLatest, call, put, select } from 'redux-saga/effects';

import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_BASE } from '../../utils/config';

import { filterDaily, filterHourly, successFetch, errorFetch } from './actions';
import { makeSelectCity } from './selectors';
import { INIT_FETCH_FORECAST_DATA } from './constants';
import request from '../../utils/request';

// Individual exports for testing

function* fetchForecastData() {
  const city = yield select(makeSelectCity());
  const url = `${OPEN_WEATHER_BASE}/forecast?q=${city}&APPID=${OPEN_WEATHER_API_KEY}`;

  try {
    const data = yield call(request, url);
    yield put(successFetch(data, city));
    yield put(filterDaily(data.list));
    yield put(filterHourly(data.list));
  } catch (error) {
    yield put(errorFetch(error));
  }
}

export default function* weatherForecastSaga() {
  yield takeLatest(INIT_FETCH_FORECAST_DATA, fetchForecastData);
}
