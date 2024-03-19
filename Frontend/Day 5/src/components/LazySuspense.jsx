import PropTypes from 'prop-types';
import { Suspense } from 'react';
import loader from '../assets/images/loader.gif';
import ErrorBoundary from './ErrorBoundary';

const LazySuspense = ({ component: Component, ...rest }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div style={loaderStyle}><img src={loader} alt='Loader' /></div>}>
        <Component {...rest} />
      </Suspense>
    </ErrorBoundary>
  );
};

LazySuspense.propTypes = {
  component: PropTypes.element.isRequired,
};

const loaderStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default LazySuspense;
