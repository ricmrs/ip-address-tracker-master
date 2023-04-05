import { loadIP } from '@/lib';

export { default } from '@/screens/HomeScreen';

export async function getServerSideProps() {
  const IPdefault = '999.999.999.999'
  const connection = await loadIP(IPdefault);
  return {
    props: {
      connection
    }
  }
}
