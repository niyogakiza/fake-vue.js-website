<template lang="pug">
    .fullpage
  parallax(src="src/assets/horses-in-maneggio.jpeg", height="40vw" maxHeight="600px")
  h1.green In Serra a un Cavallo
  h2.green Noi Prendiamo In Prestito La Liberta

  #presentation
  p.Homepage.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra
    nibh cras pulvinar mattis nunc. Pellentesque dignissim enim sit amet venenatis
    urna cursus eget. Ultricies integer quis auctor elit sed.

  .center
  router-link.linkbutton.bg-green.text-white(to='maneggio') More about us

  #Attività.bg-green.txt-white.bg-dotted
  h2 Amet Mattis, Vulputate, Enim
  p.homepage.txt-white.
   ... Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Vitae et leo duis ut.
  router-link.linkbutton.bg-yellow.txt-blue(to="Attività") Nostri Attività

  #Itinerari
  h2.txt-blue(style="margin-top:60px") Itinerari
  router-link(to="itinerari")
  img.card(src="src/assets/horses-love.jpeg" style="width: 500px;")

  p.homepage.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut.
  router-link.linkbutton.bg-blue.txt-white(to='itinerari') Nostri itinerari

  parallax(src="src/assets/horses-in.jpeg", alt="Horses in maneggio", height="40vw", maxHeight="500px")

  #Struttura
  h2.text-green Struttura
  el-row.logos-row
  el-col(:md="12", :sm="12", :xs="24")
  a(href='#', target="_blank")
  img(src="src/assets/james-and-sons.png", alt="Ranch")
  el-col(:md="12", :sm="12", :xs="24")
  a(href="#", target="_blank")
  img(src="src/assets/beauty-box.png", alt="some")

  #Partner.content-width
   h2.txt-green Partner industriali
    el-row.logos-row
     el-col(:md="12", :xs="24", :sm="12")
       a(href="#", target="_blank")
         img(src="src/assets/12.png", alt="logo")
    el-col(:md="12", :xs="24", :sm="12")
       a(href="#", target="_blank")
         img(src="src/assets/the-web-works.png", alt="somelogo")
</template>

<script>
export default {
  data () {
    return {
      fourIcons: [
        {
          text: 'ATTIVITA',
          color: '#eee548',
          src: 'src/assets/attivita.jpeg'
        },
        {
          text: 'STRUTTURA',
          color: '#1f8d8d',
          src: 'src/assets/Ranch.jpeg'
        },
        {
          text: 'STORIA',
          color: '#4bb160',
          src: 'src/assets/horses-love.jpeg'
        }
      ],
      fullWidth: 0
    }
  },
  methods: {
    handleResize: function (event) {
      this.fullWidth = document.documentElement.clientWidth
      console.log(this.fullWidth)
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  computed: {
    bigScreen: function () {
      return (this.fullWidth > 768)
    }
  }
}
</script>

<style lang="scss" scoped>
  p.homepage {
    width: 810px;
    max-width: 90%;
    text-align: center;
    margin: 30px auto 30px;
  }
  .logos-row {
    max-width: 600px;
    margin: 0 auto;
    .el-col {
      padding: 1em;
    }
    img {
      width:100%;
    }
  }
  #presentation {
    p {
      margin-bottom: 60px;
    }
    margin-bottom: 80px;
  }
  #Partner, #Struttura {
    h2 {
      margin-bottom: 0.5em;
    }
    margin-bottom: 40px;
    margin-top: 40px;
    text-align: center;
  }
  #Attività {
    h1 {
      margin-top: 0;
    }
    p {
      font-size: 1.6em;
    }
    text-align: center;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  #Itinerari {
    margin-top: 80px;
    margin-bottom: 80px;
    p.homepage {
      margin-bottom: 60px;
    }
    text-align: center;
    .card {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      transition: all 0.3s cubic-bezier(.25,.8,.25, 1);
    }
  }
</style>
