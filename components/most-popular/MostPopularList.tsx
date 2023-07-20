import MostPopularItem from "@/components/most-popular/MostPopularItem";
import styles from "./most-popular.module.scss";
import {FC} from "react";


type Props = {
    data: any;
    search: string;
}


const MostPopularList: FC<Props> = ({data, search}) => {

    return (
        <div className={styles.container}>
            {data?.items.slice(0, 10).filter((item) => {
                if(search === ""){
                    return item
                }else if(item.name.includes(search)){
                    return item
                }
            }).map((repo, index) => <MostPopularItem key={repo.id} repo={repo} index={index}/>)}
        </div>
    );
};

export default MostPopularList;