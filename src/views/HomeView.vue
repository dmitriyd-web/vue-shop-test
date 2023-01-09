<template>
<section class="home">
        <div class="container">
            <div class="row">
                <div class="home-content">
                    <h1>Новые поступления в&nbsp;этом сезоне</h1>
                    <div class="home-content__description">
                        <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                        <div class="buttons">
                            <div class="before-btn"><img src="../assets/images/arrow.svg"></div>
                            <a class="btn btn-blue" href="/">Открыть магазин</a>
                        </div>
                        <div class="slider-navigation">
                            <span
                                v-for="(slide, index) in slidesListShow"
                                :key="slide"
                                @click="sortSledes(index)"
                                :class="{ current: slidePosition === index }"
                            ></span>
                        </div>
                    </div>
                </div>
                <div class="home-images">
                    <div class="home-images__item"
                        v-for="(slide, index) in slidesListShow"
                        :key="slide"
                    >
                        <img :src="slidesListShow[index]">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="products">
        <div class="container">
            <div class="row">
                <div class="title">
                    <h2>Новая коллекция</h2>
                </div>
                <router-link class="product" to="/tovar"
                    v-for="(tovar, index) in this.$store.state.tovars"
                    :key="tovar"
                    @click="setCurrentTovar(this.$store.state.tovars[index].id)"
                >
                    <div class="product-image">
                        <div class="product-image__shadow">
                            <img src="../assets/images/arrow-product.svg">
                        </div>
                        <img class="product-photo" :src="this.$store.state.tovars[index].photo">
                    </div>
                    <p class="product-name">{{ this.$store.state.tovars[index].name }}</p>
                    <p class="product-priсes"><span class="full-price" v-if="this.$store.state.tovars[index].full_price != ''">${{ this.$store.state.tovars[index].full_price }}</span> <span class="discount-price" v-if="this.$store.state.tovars[index].discount_price != ''">${{ this.$store.state.tovars[index].discount_price }}</span></p>
                </router-link>
                <div class="buttons">
                    <a class="btn" href="/">Открыть магазин</a>
                </div>
            </div>
        </div>
    </section>
    <section class="quality">
        <div class="container">
            <div class="row">
                <div class="title">
                    <h2>Что для нас важно</h2>
                </div>
                <div class="quality-item">
                    <img src="../assets/images/quality-1.svg">
                    <h3>Качество</h3>
                    <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
                </div>
                <div class="quality-item">
                    <img src="../assets/images/quality-2.svg">
                    <h3>Скорость</h3>
                    <p>Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
                </div>
                <div class="quality-item">
                    <img src="../assets/images/quality-3.svg">
                    <h3>Ответственность</h3>
                    <p>Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
                </div>
            </div>
        </div>
    </section>
    <section class="team">
        <div class="container">
            <div class="row">
                <div class="title">
                    <h2>Команда мечты Womazing</h2>
                </div>
                <div class="team-image">
                    <img src="../assets/images/team.png">
                </div>
                <div class="team-info">
                    <h3>Для каждой</h3>
                    <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                    <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                    <a href="/">Подробнее о бренде</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/*
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
*/

export default {
    data() {
        return {
            slidePosition: 0,
            slidesListStart: [require('../assets/images/main-image-1.png'), require('../assets/images/main-image-2.png'), require('../assets/images/main-image-3.png')],
            slidesListShow: [require('../assets/images/main-image-1.png'), require('../assets/images/main-image-2.png'), require('../assets/images/main-image-3.png')]
        }
    },
    methods: {
        sortSledes(elem) {
            let newSlidesList = []
            for (let j = 0; j < 3; j++) {
                let currSlide = elem % 3
                newSlidesList.push(this.slidesListStart[currSlide])
                elem++
            }
            this.slidePosition = elem % 3
            this.slidesListShow = newSlidesList
        },
        setCurrentTovar(tovarId) {
            console.log(tovarId)
            this.$store.commit('setCurrentTovar', tovarId)
        }
    }
}
</script>
