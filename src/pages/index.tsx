import { loadIP } from '@/lib';

export { default } from '@/screens/HomeScreen';

export async function getServerSideProps() {
  const IPdefault = '1'
  const ip = await loadIP(IPdefault);
  return {
    props: {
      ...ip
    }
  }
}
