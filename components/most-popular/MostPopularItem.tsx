import {FC} from "react";
import moment from 'jalali-moment'

import styles from "./most-popular.module.scss";

type Props = {
    repo: any;
    index:number;
}

const MostPopularItem:FC<Props> = ({repo , index}) => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <h2> {index + 1 }</h2>
                        <h3>{repo.name}</h3>
                        <p> تعداد ستاره : {repo.stargazers_count}</p>
                        <p> تاریخ به روزرسانی : {moment(repo.updated_at, 'YYYY/M/D').format('jYYYY/jM/jD')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostPopularItem;