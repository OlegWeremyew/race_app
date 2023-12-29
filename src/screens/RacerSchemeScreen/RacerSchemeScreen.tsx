import {FC} from "react";
import {useRoute} from "@react-navigation/core";
import {RacerCircuitsTable, ScreenWrapper} from "../../components";
import {RacerCircuitsRouteProps} from "../../navigations/types";

export const RacerSchemeScreen: FC = () => {
  const {params} = useRoute<RacerCircuitsRouteProps>();
  return (
    <ScreenWrapper>
      <RacerCircuitsTable racerId={params.racerId} racerName={params.racerName}/>
    </ScreenWrapper>
  );
};
