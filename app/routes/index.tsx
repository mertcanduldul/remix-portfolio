import { Feature } from '~/component/feature';
import Header from '~/component/header';
import Navigation from '~/component/navigation';
// import Fantastic from '~/component/fantastic';
export default function Index() {
  return (
    <div>
      <Navigation />
      <Header />
      <Feature />
      {/* <Fantastic/> */}
    </div>
  );
}
