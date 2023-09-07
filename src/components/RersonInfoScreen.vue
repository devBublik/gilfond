<template>
    <div class="person-info">
        <div class="person-info__photo">
            <img :src="src" :alt="name">
        </div>
        <div class="person-info__col">
            <div class="person-info__title">{{name}}</div>
            <div class="person-info__el"><span>email:</span> {{mail}}</div>
            <div class="person-info__el"><span>phone:</span> {{phone}}</div>
            <div class="person-info__about">
                <div class="person-info__title"> О себе:</div>
                <div v-html="about"/>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'PersonInfo',
    props: {
        src: String,
        name: String,
        mail: String,
        phone: String,
        about: String,
    }
}
</script>
<style lang="scss" scoped>
.person-info {
    display: flex;
    gap: 62px;

    &__photo {
        max-width: 424px;
        

        img {
            width: 100%;
            max-height: 286px;
        }
    }
    &__col {
        text-align: left;
        span {
            color: #333;
            font: 600 normal 16px / 140% Montserrat;
            display: inline-block;
            margin: 0 0 10px 0;
        }
    }

    &__title {
        color: #000;
        font: 600 normal 16px / 140% Montserrat;
        margin: 0 0 10px 0;
    }

    &__about {
        margin: 16px 0 0 0;
        font: 400 normal 14px / 100% Montserrat;
        color: #76787D;
    }
}
</style>