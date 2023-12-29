import {FC, useCallback} from 'react';
import {DataTable} from "react-native-paper";
import {getPaginationLabel} from "../../utils";
import {numberOfItemsPerPageList} from "../../constants";
import {useSelector} from "react-redux";
import {
  getRacerInfoLimit,
  getRacerInfoPage,
  getRacerInfoTotalItems,
  getRacerInfoTotalPages
} from "../../store/racerInfo/selectors";
import {setRacesLimit, setRacesPage} from "../../store/racerInfo/slice";
import {useAppDispatch} from "../../hooks";

export const RacesTablePaginator: FC = () => {
  const dispatch = useAppDispatch();

  const page = useSelector(getRacerInfoPage);
  const limit = useSelector(getRacerInfoLimit);
  const totalItems = useSelector(getRacerInfoTotalItems);
  const totalPages = useSelector(getRacerInfoTotalPages);

  const onChangePage = useCallback((page: number) => {
      dispatch(setRacesPage(page));
    },
    [dispatch],
  );

  const onChangeLimit = useCallback((page: number) => {
      dispatch(setRacesLimit(page));
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
      selectPageDropdownLabel={'Races per page'}
    />
  );
};
