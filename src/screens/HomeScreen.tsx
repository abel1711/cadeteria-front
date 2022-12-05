import { useEffect } from "react"
import { useAppDispatch } from '../redux/hooks';
import { startGetDataPage } from '../redux/slices/data-page/data-pageThunks';

export const HomeScreen = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startGetDataPage())
  }, [])
  
  return (
    <div>HomeScreen</div>
  )
}
