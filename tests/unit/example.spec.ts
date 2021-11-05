import Home from '@/features/home/Home.vue';
import { render } from '@testing-library/vue';

describe('Home.vue', () => {
	it('renders props.msg when passed', () => {
		const { getByText } = render(Home);

		expect(getByText(/At home!/)).toBeInTheDocument();
	});
});
