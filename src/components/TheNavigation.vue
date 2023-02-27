<template>
    <div id="nav">
        <router-link id="logo" :to="{name: 'Home'}">Vue School Travel App</router-link>
        <router-link :key="destination.id" v-for="destination in destinos" :to="{ name: 'destination.show', params: {id: destination.id, slug: destination.slug} }">
            {{ destination.name }}
        </router-link>
    </div>
</template>
<script>
import sourceData from "../data.json"
export default {
    name: 'TheNavigation',
    data() {
        return {
            destinos: sourceData.destinations
        }
    }
}
</script>