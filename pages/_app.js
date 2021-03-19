import '../styles/globals.css'
import {Provider} from 'react-redux';
import store from '../store';
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </Provider>
    );
}

export default MyApp;
