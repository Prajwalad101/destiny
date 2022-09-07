const fetchBusiness = async (businessId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/business/${businessId}`
  );

  const data = await response.json();

  if (!response.ok) {
    const error = data;
    throw new Error(error);
  }

  return data;
};

export default fetchBusiness;
