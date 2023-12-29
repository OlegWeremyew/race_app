import {FC, JSX} from 'react';
import {useRoute} from '@react-navigation/core';
import {RacerCircuitsTable} from '@/components/RacerCircuitsTable';
import {ScreenWrapper} from '@/components/common/ScreenWrapper';
import {RacerCircuitsRouteProps} from '@/navigations/types';

export const RacerSchemeScreen: FC = (): JSX.Element => {
  const {params} = useRoute<RacerCircuitsRouteProps>();

  return (
    <ScreenWrapper>
      <RacerCircuitsTable
        racerId={params.racerId}
        racerName={params.racerName}
      />
    </ScreenWrapper>
  );
};
