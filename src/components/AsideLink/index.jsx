import styles from './asidelink.module.css'
import {Link} from "react-router-dom";

const AsideLink = ({ href, children }) => {
    return (<Link to={href} className={styles.asidelink}>
        {children}
    </Link>)
}

export default AsideLink