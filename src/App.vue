<template>
	<div id="nav">
		<router-link to="/">Home</router-link> | <router-link to="/airplanes">Airplanes</router-link> |
		<router-link to="/airplanes/add">Add a plane!</router-link> | <router-link to="/planets">Planets</router-link> |
		<router-link to="/planets/add">Add Planets</router-link>
	</div>
	<router-view />
</template>
