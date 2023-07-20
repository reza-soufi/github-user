import {FC} from 'react';
import styles from "./user-info.module.scss";
import Image from "next/image";

type Props = {
    data: any;
}

const UserInfo: FC<Props> = ({data}) => {
    return (
        <div className={styles.container}>
            {
                data ? (
                    <>
                        <div className={styles.img_box}>
                            <Image src={data.avatar_url} alt={data.name} layout="fill"/>
                        </div>
                        <div className={styles.title}> نام کاربر : <span> {data.name || '-'} </span></div>
                        <div className={styles.title}> آدرس : <span> {data.location || '-'} </span></div>
                        <div className={styles.title}> تعداد ریپوهای پابلیک : <span> {data.public_repos || '-'} </span></div>
                    </>
                ) : (
                    <div> کاربر پیدا نشد </div>
                )
            }
        </div>
    );
};

export default UserInfo;