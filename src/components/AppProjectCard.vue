<script>
export default {
    props: {
        cardObj: Object,
    },
};
</script>

<template>
    <div>
        <div class="card border-2 h-100" style="width: 18rem">
            <img :src="cardObj.thumb ? `${cardObj.thumb}` : 'https://via.placeholder.com/640x480.png'"
                class="card-img-top" :alt="`${cardObj.title}`" />
            <div class="card-body">
                <section class="card-text">
                    <section>
                        <h4>{{ cardObj.title }}</h4>
                        <p>{{ cardObj.type.title }}</p>
                        <ul>
                            <li
                            v-for="curTech in this.cardObj.technologies" :key="curTech"
                            >{{ curTech.name }}</li>
                        </ul>
                        <p class="mb-3">{{ cardObj.description }}</p>
                        <p>{{ cardObj.slug }}</p>
                    </section>

                </section>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
