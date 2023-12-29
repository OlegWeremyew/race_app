import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {AppDispatch} from '@/store/store';

export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>();
