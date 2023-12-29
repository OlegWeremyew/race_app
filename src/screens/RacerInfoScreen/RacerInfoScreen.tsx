import {FC} from 'react';
import {useRoute} from '@react-navigation/core';
import {RacerPersonalInformation, ScreenWrapper} from '../../components';
import {RacerInfoRouteProps} from '@/navigations/types';

export const RacerInfoScreen: FC = () => {
  const {params} = useRoute<RacerInfoRouteProps>();

  return (
    <ScreenWrapper>
      <RacerPersonalInformation racerId={params.racerId} />
    </ScreenWrapper>
  );
};
