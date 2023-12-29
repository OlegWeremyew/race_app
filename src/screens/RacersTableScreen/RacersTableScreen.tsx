import {FC, JSX} from 'react';
import {RacersTable} from '@/components/RacersTable';
import {ScreenWrapper} from '@/components/common/ScreenWrapper';

export const RacersTableScreen: FC = (): JSX.Element => (
  <ScreenWrapper>
    <RacersTable />
  </ScreenWrapper>
);
