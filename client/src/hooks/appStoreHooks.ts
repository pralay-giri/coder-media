import { useSelector, useDispatch } from "react-redux";
import type {TypedUseSelectorHook} from "react-redux";
import { RootState, AppDispatch } from "../store/appStore";


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch