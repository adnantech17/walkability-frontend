
import dynamic from 'next/dynamic';
import AuthModal from '~/components/authModals/AuthModal';
const MapWithNoSSR = dynamic(() => import('~/components/map/Map'), {
  ssr: false
});

const Index = () => {
  return (
    <div>
      <MapWithNoSSR />
      <AuthModal />
    </div>
  )
}

export default Index;