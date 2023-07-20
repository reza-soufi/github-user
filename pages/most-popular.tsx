import axios from "axios";
import {useEffect, useState} from "react";
import MostPopularHead from "@/components/most-popular/MostPopularHead";
import MostPopularList from "@/components/most-popular/MostPopularList";
import Loading from "@/components/loading";

const MostPopular = () => {
    const [ data , setData ] = useState();
    const [loading , setLoading ] = useState<boolean>(false);
    const [search , setSearch] = useState<string>('');

    const getRepos = async () => {
        setLoading(true);
        axios('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars')
            .then(data => setData(data.data))
            .catch(e => console.error(e))
            .finally(() => {
                setLoading(false);
            })
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
            { loading ? <Loading /> : <MostPopularList data={data} search={search} /> }
        </div>
    );
};

export default MostPopular;