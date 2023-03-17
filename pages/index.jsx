
import dynamic from 'next/dynamic';
const MapWithNoSSR = dynamic(() => import('~/components/map/Map'), {
  ssr: false
});

const Index = () => {
  return (
    <div>
      <MapWithNoSSR />
    </div>
  )
}

export default Index;