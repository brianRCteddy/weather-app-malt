/**
 *
 * WeatherForecast
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWeatherForecast, { makeSelectCity } from './selectors';
import { filterDaily } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Search from '../../components/Search';
import Loading from '../../components/Loading';
import DailyForecast from '../../components/DailyForecast';

export function WeatherForecast(props) {
  useInjectReducer({ key: 'weatherForecast', reducer });
  useInjectSaga({ key: 'weatherForecast', saga });

  return (
    <div>
      <Helmet>
        <title>WeatherForecast</title>
        <meta name="description" content="Description of WeatherForecast" />
      </Helmet>
      <h1>5 Day Weather Forecast</h1>
      {props.weatherForecastPage.isLoading ? (
        <Loading />
      ) : (
        <div>
          <Search />
          <br />
          <br />
          {props.weatherForecastPage.dailyData.map((day, index) => (
            <DailyForecast key={day.dt} index={index} day={day} />
          ))}
        </div>
      )}
      <FormattedMessage {...messages.header} />
    </div>
  );
}

WeatherForecast.propTypes = {
  weatherForecastPage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  weatherForecast: makeSelectWeatherForecast(),
  city: makeSelectCity(),
});

const mapDispatchToProps = dispatch => ({
  filterDaily: data => dispatch(filterDaily(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WeatherForecast);
