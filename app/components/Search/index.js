/**
 *
 * Search
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';

import {
  setCityLocation,
  initFetch,
} from '../../containers/WeatherForecast/actions';
import { makeSelectCity } from '../../containers/WeatherForecast/selectors';

function Search(props) {
  return (
    <div>
      <input
        type="text"
        value={props.city}
        placeholder="Enter City here. Ex. London"
        onChange={props.setCityHandler}
      />
      <button type="button" onClick={() => props.onInitFetch()}>
        Get Weather Data
      </button>
    </div>
  );
}

Search.propTypes = {
  setCityHandler: PropTypes.func.isRequired,
  onInitFetch: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  city: makeSelectCity(),
});

const mapDispatchToProps = dispatch => ({
  setCityHandler: e => dispatch(setCityLocation(e.target.value)),
  onInitFetch: () => dispatch(initFetch()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Search);
