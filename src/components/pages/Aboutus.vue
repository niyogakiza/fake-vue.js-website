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
      el-col

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

<style scoped>

</style>
