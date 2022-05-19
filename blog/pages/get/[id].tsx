import AppLayout from '../../components/AppLayout';
import Link from 'next/link';
import DetailContent from '../../components/DetailContent';

const Get = (key: number) => {
  console.log(key);
  return (
    <>
      <AppLayout>
        <DetailContent />
      </AppLayout>
    </>
  );
};
export default Get;
