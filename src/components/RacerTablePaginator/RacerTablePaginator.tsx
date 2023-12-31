import React, {FC, JSX, useCallback} from 'react';
import {DataTable} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {setRacersLimit, setRacersPage} from '@/store/racers/slice';
import {useAppDispatch} from '@/hooks/useAppDispatch';
import {
  getRacersLimit,
  getRacersPage,
  getRacersTotalItems,
  getRacersTotalPages,
} from '@/store/racers/selectors';
import {getPaginationLabel} from '@/utils/getPaginationLabel';
import {numberOfItemsPerPageList} from '@/constants/index';

export const RacerTablePaginator: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const page = useSelector(getRacersPage);
  const limit = useSelector(getRacersLimit);
  const totalItems = useSelector(getRacersTotalItems);
  const totalPages = useSelector(getRacersTotalPages);

  const onChangePage = useCallback(
    (page: number): void => {
      dispatch(setRacersPage(page));
    },
    [dispatch],
  );

  const onChangeLimit = useCallback(
    (page: number): void => {
      dispatch(setRacersLimit(page));
    },
    [dispatch],
  );

  return (
    <DataTable.Pagination
      page={page}
      numberOfPages={totalPages + 1}
      onPageChange={onChangePage}
      label={getPaginationLabel(page, limit, totalItems)}
      numberOfItemsPerPageList={numberOfItemsPerPageList}
      numberOfItemsPerPage={limit}
      onItemsPerPageChange={onChangeLimit}
      showFastPaginationControls
      selectPageDropdownLabel={'Racers per page'}
    />
  );
};
