import ReactGA from 'react-ga';

const initializeAnalytics = () => {
    ReactGA.initialize('G-TXBHDT2D98'); 
    ReactGA.pageview(window.location.pathname + window.location.search); 
};

export default initializeAnalytics;
