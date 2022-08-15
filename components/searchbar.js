import styles from './searchbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function earchbar() {
    return(
        <div className={styles.container}>
            <FontAwesomeIcon icon="magnifying-glass" />
            <input type="text"/>
        </div>
    )
}