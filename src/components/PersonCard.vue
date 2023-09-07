<template>
    <div class="person-card active">
        <div class="person-card__photo">
            <img :src="src" :alt="name">
        </div>
        <div class="person-card__info">
            <div class="person-card__name">{{name}}</div>
            <div class="person-card__mail">{{mail}}</div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'PersonCard',
    props: {
        src: String,
        name: String,
        mail: String
    }
}
</script>

<style lang="scss">
.person-card {
    display: flex;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
    align-items: center;
    gap: 15px;

    &.active {
        background: #E0E0E0;
    }

    &__photo {
        max-width: 70px;
        height: 70px;

        img {
            width: 100%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }
    }

    &__name {
        color: #333;
        font: normal 600 14px / 100%  Montserrat;
        margin: 0 0 4px 0;
    }

    &__mail {
        color: #76787D;
        font: normal 400 14px / 100%  Montserrat;
    }
}
</style>