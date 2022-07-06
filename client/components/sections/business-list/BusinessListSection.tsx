import useBusinesses from '../../../hooks/business/useBusinesses';
import BusinessCard from '../../cards/business/BusinessCard';

function BusinessListSection() {
  const businessResult = useBusinesses();

  if (businessResult.isLoading) {
    return <span>Loading...</span>;
  }

  if (businessResult.isError) {
    if (businessResult.error instanceof Error) {
      return <p>Error: {businessResult.error.message}</p>;
    }
    return <p>Error: {businessResult.error}</p>;
  }

  const businessData = businessResult.data?.data;

  return (
    <div>
      {businessData?.map((business) => (
        <BusinessCard business={business} key={business._id.toString()} />
      ))}
    </div>
  );
}

export default BusinessListSection;
