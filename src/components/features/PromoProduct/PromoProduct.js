import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//import { connect } from 'react-redux';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PromoProduct.module.scss';

const Component = ({className, image, price, newPrice}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.product}>
      <img src={image}></img>
      <button>check out</button>
      <h3>{price}</h3>
      <h2>{newPrice}</h2>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  newPrice: PropTypes.string,
};

//const mapStateToProps = state => ({
  //watches: state.products.watches,
//});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

//const Container = connect(mapStateToProps)(Component);

export {
  Component as PromoProduct,
  // Container as Product,
  Component as PromoProductComponent,
};