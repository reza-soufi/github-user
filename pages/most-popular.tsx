import axios from "axios";
import {useEffect, useState} from "react";
import MostPopularHead from "@/components/most-popular/MostPopularHead";
import MostPopularList from "@/components/most-popular/MostPopularList";

const MostPopular = () => {
    const [ data , setData ] = useState();
    const [search , setSearch] = useState<string>('');

    const getRepos = async () => {
        axios('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars')
            .then(data => setData(data.data));
    };

    useEffect(() => {
        getRepos();
    } , []);

    const getSearch = (search: string) => {
        setSearch(search);
    }

    return (
        <div>
            <MostPopularHead getSearch={getSearch} />
            <MostPopularList data={data} search={search} />
        </div>
    );
};

export default MostPopular;