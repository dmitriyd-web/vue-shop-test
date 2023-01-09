<template>
    <section class="page">
        <div class="container">
            <div class="row">
                <div class="title">
                    <h1>Свитшот Sweet Shot</h1>
                </div>
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <a href="/">Главная</a>
                        </li>
                        <li>
                            <span>—</span>
                        </li>
                        <li>
                            <a class="current-page" href="/">Свитшот Sweet Shot</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <div class="single-product">
        <div class="container">
            <div class="row">
                <div class="product-image">
                    <img :src="this.$store.state.tovarIdPage[0].photo">
                </div>
                <div class="product-info">
                    <p class="product-priсes"><span class="full-price">$229</span> <span class="discount-price">$129</span></p>
                    <div class="product-size">
                        <p class="product-size__title">Выберите размер</p>
                        <div class="product-size__options">
                            <p class="option option-s">S</p>
                            <p class="option option-m choosen">M</p>
                            <p class="option option-l">L</p>
                            <p class="option option-xl">XL</p>
                            <p class="option option-xxl">XXL</p>
                        </div>
                    </div>
                    <div class="product-color">
                        <div class="product-color__item brown"></div>
                        <div class="product-color__item grey choosen"></div>
                        <div class="product-color__item pink"></div>
                        <div class="product-color__item orange"></div>
                    </div>
                    <form class="add-tovar">
                        <input type="text" placeholder="1">
                        <button type="submit" class="btn btn-blue">Добавить в корзину</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log(this.tovars)
            console.log(this.$store.state.tovarIdPage[0].photo)
        },
        data() {
            tovarSrc: this.$store.state.tovarIdPage[0].photo
        }
    }
</script>