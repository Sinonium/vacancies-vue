<template>
    <footer class="footer">
        <div class="footer__info">
            <nav class="footer__nav">
                <ul class="footer__nav-list">
                    <li class="footer__nav-item" v-for="item in footerNav" :key="item">
                        <a href="#" class="footer__nav-link">
                            <span>
                                {{item}}
                                <img src="@/assets/img/greyArrow.svg" alt="">
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <form action="" class="footer__form">
                <div>
                    <img src="../assets/img/footerImg/language.svg" alt="">
                    <input type="text" placeholder="English">
                </div>
            </form>
        </div>
        <div class="footer__companies">
            <p>
                Top Companies Choose Courses for Business to build in-demand caree skills
            </p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/" target="blank">
                        <img src="../assets/img/footerImg/facebookLogo.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.microsoft.com/ru-ru" target="blank">
                        <img src="../assets/img/footerImg/microsoftLogo.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.netflix.com/kg-ru/" target="blank">
                        <img src="../assets/img/footerImg/netflixLogo.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.sony.ru/" target="blank">
                        <img src="../assets/img/footerImg/sonyLogo.svg" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div class="footer__menu">
            <p>
                Copyright 2019 Inc
            </p>
            <ul>
                <li>
                    <a href="">
                        Terms
                    </a>
                </li>
                <li>
                    <a href="">
                        Privacy Policy
                    </a>    
                </li>
                <li>
                    <a href="">
                        Cookie Policy
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup() {
        const footerNav = ref([
			"For Business",
			"Applications",
			"Careers",
			"Support",
			"Teach on Site",
			"About Us",
			"Blog",
			"Affilate",
		]);


        return {footerNav}
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.footer {
    &__info {
        border-top: 2px solid $greyBlue95;
        @include flex($justify: space-between);
        padding: vw(50) vw(130) vw(50) vw(100);
    }
    &__nav {
        width: vw(580);
        &-list {
            @include flex($justify: space-between);
            flex-wrap: wrap;
            list-style-type: none
        }
        &-item {
            width: vw(120);
            margin-bottom: vw(25);
        }
        &-link {
            @include font(vw(12), 700, vh(20), $greyBlue60);
            text-decoration: none;
            img {
                margin-left: vw(30);
            }
            span {
                @include flex($justify: left);
            }
        }
    }
    &__form {
        div {
            @include flex();
            padding: 0 vw(30);
            box-sizing: border-box;
            width: vw(128);
            height: vw(50);
            background-color: $greyBlue95;
            border-radius: vw(30);
        }
        input {
            border: none;
            padding-left: vw(17);
            min-width: vw(60);
            background-color: $greyBlue95;
            outline: none;
            &::placeholder {
                @include font(vw(12), 700, vh(20), $greyBlue60);
            }
        }
    }
    &__companies, &__menu {
        @include flex($justify: space-between);
        padding: vw(40) vw(130) vw(40) vw(100);
        border-top: 2px solid $greyBlue95;
        p {
            @include font(vw(13), 700, vw(25), $greyBlue60);
        }
        ul {
            @include flex();
            list-style-type: none;
            li {
                margin-right: vw(40);
                &:last-child {
                    margin-right: 0;
                }
                a {
                    text-decoration: none;
                    @include font(vw(12), 700, vw(20), $greyBlue60);
                }
            }
        }
    }
}
@media screen and (max-width: 1025px) {
.footer {
    &__nav {
        width: vw(670);
        &-item {
            width: vw(160);
            margin-bottom: vw(25);
        }
        &-link {
            @include font(vw(17), 700, vh(20), $greyBlue60);
        }
    }
    &__form {
        input {
            &::placeholder {
                @include font(vw(17), 700, vh(20), $greyBlue60);
            }
        }
    }
    &__companies, &__menu {
        p {
            @include font(vw(17), 700, vw(25), $greyBlue60);
        }
        ul {
            li {
                a {
                    @include font(vw(17), 700, vw(20), $greyBlue60);
                }
            }
        }
    }
}  
}
@media screen and (max-width: 770px) {
.footer {
    &__nav {
        width: vw(840);
        &-item {
            width: vw(200);
            margin-bottom: vw(25);
        }
        &-link {
            @include font(vw(22), 700, vh(20), $greyBlue60);
        }
    }
    &__form {
        input {
            &::placeholder {
                @include font(vw(22), 700, vh(20), $greyBlue60);
            }
        }
    }
    &__companies, &__menu {
        p {
            @include font(vw(24), 700, vw(25), $greyBlue60);
        }
        ul {
            li {
                a {
                    @include font(vw(22), 700, vw(20), $greyBlue60);
                }
            }
        }
    }
}  
}
@media screen and (max-width: 430px) {
    .footer {
        &__info {
            @include flex($justify: space-between);
            flex-direction: column;
            padding: vmin(20);
        }
        &__nav {
            width: vmin(335);
            &-list {
                @include flex($justify: center);
            }
            &-item {
                width: vmin(110);
                margin-bottom: vmin(25);
            }
            &-link {
                @include font(vmin(12), 700, vh(20), $greyBlue60);
                img {
                    margin-left: vmin(10);
                }
            }
        }
        &__form {
            div {
                padding: 0 vmin(30);
                width: vmin(128);
                height: vmin(50);
                border-radius: vmin(30);
            }
            input {
                padding-left: vmin(17);
                min-width: vmin(60);
                &::placeholder {
                    @include font(vmin(12), 700, vh(20), $greyBlue60);
                }
            }
        }
        &__companies, &__menu {
            @include flex($justify: space-between);
            padding: vmin(20);
            border-top: 2px solid $greyBlue95;
            p {
                @include font(vmin(13), 700, vmin(25), $greyBlue60);
                width: vmin(150);
            }
            ul {
                width: vmin(150);
                @include flex();
                flex-wrap: wrap;
                list-style-type: none;
                li {
                    margin-right: vmin(40);
                    &:last-child {
                        margin-right: vmin(40);
                    }
                    a {
                        text-decoration: none;
                        @include font(vmin(12), 700, vmin(20), $greyBlue60);
                        img {
                            width: vmin(150);
                        }
                    }
                }
            }
        }
    }
}
</style>