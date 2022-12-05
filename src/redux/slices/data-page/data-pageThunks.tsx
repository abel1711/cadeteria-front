import { store } from '../../store';
import { removeLoading, setLoading } from '../loading/loadingSlice';
import { dataPageAPI } from '../../../api/dataPageAPI';
import { setDataPage } from './data-pageSlice';
import { RespDataPage } from '../../../interfaces/interface';



export const startGetDataPage = ()=>{
    return async( dispatch: typeof store.dispatch , getState: typeof store.getState )=>{

        dispatch( setLoading() );

        try {

            const {data} = await dataPageAPI.get<RespDataPage>('/all');

            dispatch( setDataPage(data))
            dispatch( removeLoading())
            
        } catch (errors: any) {
            console.log(errors.response.data.errors)
            dispatch( removeLoading())

        }


    }
}