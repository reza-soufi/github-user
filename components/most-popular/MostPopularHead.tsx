import {FC, useState} from "react";
import styles from "./most-popular.module.scss";

type Props = {
    getSearch : (string) => void;
}


const MostPopularHead:FC<Props> = ({getSearch}) => {
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e) => {
        setSearchValue(e.target.value);
        getSearch(e.target.value);
    }

    return (
        <>
            <section className={styles.form_content}>
                <div className={styles.form_container}>
                    <h2 className={styles.topic}> نام کاربر را جستجو کنید </h2>
                    <input type="text" value={searchValue} onChange={handleChange} className={styles.input}/>
                </div>
            </section>
        </>
    );
};

export default MostPopularHead;