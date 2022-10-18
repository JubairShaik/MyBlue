/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        "blue":"#22A45",
      },
    },
    fontFamily:{
      Poppins:["Poppins,sans-serif"]
    },
    container:{
      center:true,
      padding:"1rem",
      
    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
      

    },

  },
  plugins: [],
}
