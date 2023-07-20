import {FC, useEffect, useState} from 'react';
import axios from "axios";
import Image from "next/image";

import type UserType from "@/types/user.type";
import UserRepos from "@/components/user-info/UserRepos";

import styles from "./user-info.module.scss";

type Props = {
    data: UserType;
}

const UserInfo: FC<Props> = ({data}) => {
    const [repos, setRepos] = useState();

    const getRepos = async () => {
        try {
            await axios(data.repos_url)
                .then(data => setRepos(data.data))
        }catch (e) {

        }
    }

    useEffect(() => {
        getRepos();
    } , [repos]);

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
            <UserRepos repos={repos} />
        </div>
    );
};

export default UserInfo;