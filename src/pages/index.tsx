import type { NextPage } from 'next';

import Carousel from '../components/carousel';
import CallToAction from '../components/calltoaction';

const Home: NextPage = () => {
    return (
        <div>
            <CallToAction />
            <Carousel />
        </div>
    );
};

export default Home;
