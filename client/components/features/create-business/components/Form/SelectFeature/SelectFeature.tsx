import { ListState } from '../../../types/listState';
import MyListBox from '../MyListBox/MyListBox';

interface SelectFeatureProps {
  featureState: ListState;
  currentFeatures: { name: string }[];
}

function SelectFeature({ currentFeatures, featureState }: SelectFeatureProps) {
  return (
    <div>
      <MyListBox list={currentFeatures} listState={featureState} />
    </div>
  );
}
export default SelectFeature;
