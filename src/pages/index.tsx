import { loadGeoIP, loadUserIP } from '@/lib';

export { default } from '@/screens/HomeScreen';

export async function getServerSideProps() {
  const userIP = await loadUserIP();
  const connection = await loadGeoIP(userIP.ip);

  return {
    props: {
      connection
    }
  }
}
