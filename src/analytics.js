import ReactGA from 'react-ga';

const initializeAnalytics = () => {
    ReactGA.initialize('G-WC4DFM35XJ'); 
    ReactGA.pageview(window.location.pathname + window.location.search); 
};

export default initializeAnalytics;
