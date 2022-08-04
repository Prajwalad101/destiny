export const checkTranslate = (index: number) => {
  // 40px is added to counter the 40px gap between form stages
  if (index === 1) return '-translate-x-[calc(100%+40px)]';
  if (index === 2) return '-translate-x-[calc(200%+40px)]';
  if (index === 3) return '-translate-x-[calc(300%+40px)]';
  return '';
};
