import { useState, useEffect} from 'react';
import axios from 'axios';

const usePlayersAxios = (url, arr, part2 = '') => {
  const [dataNew, setDataNew] = useState([]);
  useEffect(async () => {
    const result = await Promise.all(arr.map((n) =>
      axios.get(`${url}${n}${part2}`)
      .then((response)=>response.data)
    ))
    setDataNew(result);

}, []);
return dataNew
}
export default usePlayersAxios;
