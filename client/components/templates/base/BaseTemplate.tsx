export interface IBaseTemplate {
  sampleText: string;
}

function BaseTemplate({ sampleText }: IBaseTemplate) {
  return <div>{sampleText}</div>;
}

export default BaseTemplate;
