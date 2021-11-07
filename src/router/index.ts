import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../features/home/Home.vue';
import AirplanesContainer from '../features/airplanes/AirplanesContainer.vue';
import AddAirplane from '../features/airplanes/AddAirplane.vue';
import IndividualAirplaneDetails from '../features/airplanes/IndividualAirplaneDetails.vue';
import Planet from '../features/star-wars/Planet.vue';
import PlanetInput from '../features/star-wars/PlanetInput.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/airplanes',
		name: 'AirplanesIndex',
		component: AirplanesContainer,
	},
	{
		path: '/airplanes/:identifier',
		name: 'IndividualAirplaneDetails',
		component: IndividualAirplaneDetails,
		props: true,
	},
	{
		path: '/airplanes/add',
		name: 'AddAirplane',
		component: AddAirplane,
	},
	{
		path: '/planets',
		name: 'PlanetIndex',
		component: Planet,
	},
	{
		path: '/planets/add',
		name: 'AddPlanet',
		component: PlanetInput,
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
