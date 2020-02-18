/*
 *
 * WeatherForecast reducer
 *
 */
import produce from 'immer';
import {
  INIT_FETCH_FORECAST_DATA,
  SUCCESS_FETCH_FORECAST_DATA,
  ERROR_FETCH_FORECAST_DATA,
  FILTER_DAILY_FORECAST_DATA,
  FILTER_HOURLY_FORECAST_DATA,
  SET_CITY,
  CHANGE_INDEX,
} from './constants';

let filteredDaily = [];
const dateToday = new Date();

// logic for adding days to the current for the next days' forecast
const addDays = (dateNow, numOfDays) => {
  const date = new Date(dateNow);
  date.setDate(date.getDate() + numOfDays);
  return date;
};

// logic to append zeroes on date
const appendZero = n => {
  if (n <= 9) {
    return `0${n}`;
  }
  return n;
};

// logic to transform the data from full newDate to "YYYY-MM-DD" ex. "2020-02-22"
const transformDate = fullDate => {
  const formattedDate = `${fullDate.getFullYear()}-${appendZero(
    fullDate.getMonth() + 1,
  )}-${appendZero(fullDate.getDate())}`;
  return formattedDate;
};

const day1 = addDays(dateToday, 1);
const day2 = addDays(dateToday, 2);
const day3 = addDays(dateToday, 3);
const day4 = addDays(dateToday, 4);
const day5 = addDays(dateToday, 5);

const tranformDay1 = transformDate(day1);
const tranformDay2 = transformDate(day2);
const tranformDay3 = transformDate(day3);
const tranformDay4 = transformDate(day4);
const tranformDay5 = transformDate(day5);

export const initialState = {
  city: '',
  weatherData: {},
  dataList: [],
  dailyData: [],
  hourlyData: {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
  },
  index: null,
  isLoading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const weatherForecastReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_CITY:
        draft.city = action.city;
        break;

      case INIT_FETCH_FORECAST_DATA:
        draft.isLoading = true;
        break;

      case SUCCESS_FETCH_FORECAST_DATA:
        draft.weatherData = action.data;
        draft.dataList = action.data.list;
        draft.city = action.city;
        draft.isLoading = false;
        draft.error = false;
        break;

      case ERROR_FETCH_FORECAST_DATA:
        draft.error = true;
        draft.isLoading = false;
        break;

      case FILTER_DAILY_FORECAST_DATA:
        filteredDaily = action.data.filter(reading =>
          reading.dt_txt.includes('00:00:00'),
        );
        draft.dailyData = filteredDaily;
        break;

      case FILTER_HOURLY_FORECAST_DATA:
        draft.hourlyData[0] = action.data.filter(reading =>
          reading.dt_txt.includes(tranformDay1),
        );
        draft.hourlyData[1] = action.data.filter(reading =>
          reading.dt_txt.includes(tranformDay2),
        );
        draft.hourlyData[2] = action.data.filter(reading =>
          reading.dt_txt.includes(tranformDay3),
        );
        draft.hourlyData[3] = action.data.filter(reading =>
          reading.dt_txt.includes(tranformDay4),
        );
        draft.hourlyData[4] = action.data.filter(reading =>
          reading.dt_txt.includes(tranformDay5),
        );
        break;

      case CHANGE_INDEX:
        draft.index = action.index;
        break;
    }
  });

export default weatherForecastReducer;
