const $ = q => document.querySelector(q)
const $$ = q => document.querySelectorAll(q)
const Basics = function(){}


  Basics.lightbox = ()=>{

    	const image = $$('.modal-image')
      const modal = $$('.modal')
      const modalImg = $$('.modal-content')

    	image.forEach((image, i)=> {
        image.onclick = function(){
          modal[i].style.display = "block";
          modalImg[i].src = this.src;

          var span = document.getElementsByClassName("close")[i];
          span.onclick = function() {
            modal[i].style.display = "none";
          }
        }
    	})

    }


    Basics.dropdown = ()=>{

      $('#dropbtn').addEventListener('click', function() {
   var status = $(this).classList.contains('show')
   if (status) {
      $('.nav-right #dropdownctn').remove('show')
   } else {
      $('.nav-right #dropdownctn').add('show')
   }
})
      }

  export default Basics
