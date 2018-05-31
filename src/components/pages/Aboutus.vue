<template lang="pug">
  .fullpage
    pageheader.txt-white.bg-greeb.bg-dotted(img='src/assets/about-us.jpeg',title='About Us', subtitle='Meet the team')
  .content-width
    p.intro.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non. Nulla malesuada
      pellentesque elit eget gravida cum sociis. Suspendisse ultrices gravida dictum fusce ut
      placerat orci nulla pellentesque.
  #team.bg-lightgreen
    .content-width
      el-col(:gutter="40").center
        el-col(:md="8", :xm="12", :xs="24", v-for='member in members', :key="member.name")
           img.img-circle(:src="member.img", :alt="member.name")
            h4 {{ member.name}}
            h5 {{member.role}}
  #alumni.bg-lightgreen
    h2 Alumni
     .content-width
       el-row(:gutter="40").center
        el-col(:md="8", :xm="12", :xs="24", v-for="member in alumni", :key="member.name")
          img.img-circle(:src="member.img", :alt="member.name")
            h4 {{member.name}}
            h5 {{member.role}}
</template>

<script>
export default {
  data: function () {
    return {
      name: 'about-us',
      members: [
        {
          name: 'Marco',
          role: 'Proprietario',
          img: 'src/assets/marco.png'
        },
        {
          name: 'Marta',
          role: 'Manager',
          src: 'src/assets/Marta.png'
        },
        {
          name: 'Anna',
          role: 'Alenatore',
          src: 'src/assets/anna.jpg'
        },
        {
          name: 'John',
          role: 'Operaio',
          src: 'src/assets/John.png'
        }
      ],
      alumni: [
        {
          name: 'Chiarra',
          role: 'studente',
          img: 'src/assets/chiarra.png'
        },
        {
          name: 'Roberta',
          role: 'Veternaria',
          img: 'src/assets/Roberta.png'
        },
        {
          name: 'Alesandro',
          role: 'Volontaria',
          img: 'src/assets/alessandro.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  p.intro {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  h5 {
    text-align: center;
    font-style: oblique;
    font-weight: normal;
    font-size: 15px;
  }
  #leaders {
    margin-top: 60px;
    img {
      display: block;
      margin: 0 auto;
      width: 320px;
      max-width: 80px;
      border: 10px solid #238c8b;
    }
    p {
      text-align: justify;
    }
    font-family: Lato, sans-serif;
  }
  #team {
    margin-top: 60px;
  }
  #alumni {
    padding-bottom: 40px;
  }
  #team, #alumni {
    .el-row {
      width: 75%;
      margin-left: 12.5% !important;
    }
    font-family: Lato, sans-serif;
    color: #fff;
    padding-top: 40px;
    h4 {
      margin-bottom: 5px;
    }
    h5 {
      font-weight: 500;
      margin-top: 0;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    img {
      width: auto;
      margin-left: auto;
      max-height: 12em;
      border: 5px solid #fff;
    }
  }

</style>
