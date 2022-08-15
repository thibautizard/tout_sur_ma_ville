import styles from '../styles/global.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass)

export default function App({ Component, PageProps }) {
    return <Component {...PageProps} />;
}