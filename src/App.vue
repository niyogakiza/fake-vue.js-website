<template lang="pug">
  #app
  navbar
  router-view
  footersection
</template>

<script>
import navbar from './components/Navbar'
import footersection from './components/Footer'

export default {
  components: {
    navbar,
    footersection
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: Geometria;
  src: url(/static/fonts/Geometria-light.otf);
}
@font-face {
    font-family: lato;
  src: url(/static/fonts/Lato-Bold.ttf);
  font-weight: bold;
  }
@font-face {
  font-family: LatoItalic;
  src: url(/static/fonts/Lato-Italic.ttf);
  font-style: italic;
  }
  #app, html, body {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  $colors: (
  'green': #238C8B,
    'applegreen': #4bb160,
    'lightgreen': #a5cdc8,
    'blue': #4E76BB,
    'yellow': #e8de45,
    'white': #FFFFFF
  );
  @each $col, $value in $colors {
    .txt-#{$col} {
      color: #{$value};
    }
    .bg-#{$col} {
      background-color: #{$value};
    }
    .border-#{$col} {
      border-color: #{$value};
    }
  }
.bg-dotted {
  background-size:14px 14px;
  background: radial-gradient(rgba(255, 255, 255, 0.08) 15%, transparent 19%),
  radial-gradient(rgba(255, 255, 255, 0.08) 15%, transparent 19%) 0 0, 7px 7px;
}

.center{
  display: block;
  margin: 0 auto;
  text-align:center;
}

.img-circle {
  border-radius: 50%;
  border: 14px solid;
}

.el-form {
  font-family: Lato;
}

.linkbutton {
  font-family: Lato;
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 1em;
  padding: 0.3em 1.5em;
  text-align: center;
}

button.linkbutton {
  border: none;
  cursor: pointer;
}

.small {
  font-size: 14px
}

.content-width {
  max-width: 85%;
  width: 1100px;
  margin: 0 auto;
}

h1 {
  font-family: Geometria, sans-serif;
  font-weight: normal;
  font-size: 48px;
  display: block;
  text-align: center;
}

h2 {
  font-family: Geometria, sans-serif;
  font-weight: normal;
  font-size: 36px;
  display: block;
  text-align: center;
  line-height: 150%;
}

.paragraph-title {
  text-align: left;
  margin-top: 2em;
}

h3 {
  font-family: Lato, sans-serif;
  font-size: 25px;
  text-align: center
}

h4 {
  font-family: Lato, sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-align: center
}

p, li {
  font-family: Lato, sans-serif;
  font-size: 25px;
}

sub {
  font-family: Lato, sans-serif;;
  font-size: 15px;
}

p {
  line-height: 1.4em;
  color: #333;
  margin-top: 20px;
  margin-bottom: 40px;
}

.el-menu-item.is-active {
  border-bottom: 2px solid #258b72 !important;
}

.photo {
  margin-top: 60px;
  margin-bottom: 60px;
}

a {
  text-decoration: none;
}
</style>
