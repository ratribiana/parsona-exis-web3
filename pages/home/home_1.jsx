import React from 'react';
import Meta from '../../components/Meta';
import { Partners } from '../../components/component';
import Hero_7 from '../../components/hero/hero_7';
import Services from '../../components/services/services';
import Testimonial from '../../components/testimonial/testimonial';
import Faq from '../../components/faq/faq';
import Cta from '../../components/cta/cta';

const Home_1 = () => {
	return (
		<>
			<Meta title="Persona Exis | AI Generated Persona NFTs" />
			<Hero_7 />
			<Partners />
			<Services />
			<Testimonial />
			<Faq />
			<Cta />
		</>
	);
};

export default Home_1;
