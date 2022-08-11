import { ListState } from '../../../types/ListStateType';
import MyListBox from '../MyListBox/MyListBox';

interface SelectFeatureProps {
  featureState: ListState;
  currentFeatures: { name: string }[];
}

function SelectFeature({ currentFeatures, featureState }: SelectFeatureProps) {
  return (
    <div>
      <MyListBox
        list={currentFeatures}
        listState={featureState}
        inputName="feature"
      />
    </div>
  );
}
export default SelectFeature;
