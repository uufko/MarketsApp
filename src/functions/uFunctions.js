import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setA101AktuelThisWeek } from '../redux/slice';

export const uFunctions = () => {
const dispatch = useDispatch()
let listArr = []
  const pageCountF = async ({url}) => {
    let pageCount = 1;
  let isError = false;

    while (true) {
      newUrl = url.replace("number", pageCount);
      await axios
        .get(newUrl)
        .then((response) => {
          listArr.push(newUrl)
          
          
        })
        .catch((error) => {
          if (error.response.status == 404) {
            isError = true;
          }
        });
        
      pageCount++;
      if (isError == true) {
        dispatch(setA101AktuelThisWeek(listArr))
        return;
      }
    }
  };

  return {pageCountF};
};
