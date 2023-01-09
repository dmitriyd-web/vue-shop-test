<template>
    <section class="page">
        <div class="container">
            <div class="row">
                <div class="title">
                    <h1>Корзина</h1>
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
                            <a class="current-page" href="/">Корзина</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <div class="cart">
        <div class="container">
            <div class="row">
                <div class="cart-table">
                    <div class="table-header">
                        <div class="col-1">
                            <p>Товар</p>
                        </div>
                        <!--
                        <div class="col-2">
                            <p>Цена</p>
                        </div>
                        <div class="col-3">
                            <p>Количество</p>
                        </div>
                    -->
                        <div class="col-4">
                            <p>Всего</p>
                        </div>
                    </div>
                    <div class="table-product">
                        <div class="col-1">
                            <img class="product-remove" src="../assets/images/remove-product.svg">
                            <div class="product-image">
                                <img src="../assets/images/tovar-1.png">
                            </div>
                            <p>Футболка USA</p>
                        </div>
                        <div class="col-4">
                            <p>$129</p>
                        </div>
                    </div>
                    <div class="table-footer">
                        <div class="price-total">
                            <p>Итого: <span>$129</span></p>
                        </div>
                        <a class="btn btn-blue">Оформить заказ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>