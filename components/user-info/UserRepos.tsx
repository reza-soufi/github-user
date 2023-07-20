import {FC} from 'react';
import moment from 'jalali-moment'

import styles from "./user-info.module.scss";

type Props = {
    repos: any;
}

const UserRepos:FC<Props> = ({repos}) => {

    return (
        <>
         <div className={styles.rpoes_topic}>
             <h2> Repositories </h2>
         </div>
            {
                repos?.map(repo => (
                    <div className={styles.rpos_box} key={repo.id}>
                        <h3> {repo.name} </h3>
                        <div> Stars: {repo.stargazers_count} </div>
                        <div> Forks: {repo.forks_count}  </div>
                        <div> update : {moment(repo.updated_at, 'YYYY/M/D').format('jYYYY/jM/jD')} </div>
                    </div>
                ))
            }
        </>
    );
};

export default UserRepos;