<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    <header class="hero">
      <div class="hero-holder">
        <img :src="$withBase('/img/wpe_logo_cog.png')" class="cogwheel">
        <img
          :src="$withBase('/img/wpe_logo_screen.png')"
          alt="Wallpaper Engine"
        >
      </div>

      <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        v-if="data.actionText && data.actionLink"
        class="action"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
      <p
        v-if="data.actionTextSecondary && data.actionLinkSecondary"
        class="action"
      >
        <NavLink
          class="action-button"
          :item="actionLinkSecondary"
        />
      </p>
    </header>

    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <footer>
    <hr/>
      <ul class="footer-list">
        <li>
        </li>
        <li class="imprint">
          <a href="https://wallpaperengine.io/imprint.html">Imprint</a>
        </li>
      </ul>
    </footer>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
    actionLinkSecondary () {
      return {
        link: this.data.actionLinkSecondary,
        text: this.data.actionTextSecondary
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero-holder
    position: relative
    width: 320px
    align-self: center
  .hero
    display: flex
    flex-direction: column
    img
      width: 320px
      display block
      margin 3rem auto 1.5rem
    .cogwheel
      animation: wpAnimSpin 4s linear infinite
      position: absolute
      width: 173px
      left: 75px
      bottom: 45px
    h1
      font-size 3rem
    h1, .description, .action
      margin 0.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.1rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      min-width: 320px
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-around
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 0
    padding-right 0
    .hero
      img
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem

@keyframes wpAnimSpin
  0%
    transform: translateY(-7%) rotate(0deg);
  100%
    transform: translateY(-7%) rotate(360deg);
</style>
