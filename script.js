console.log('hellu');
const main_Input=document.getElementById('main-input')
const main_Button=document.getElementById('main-button')
let AfterClick=document.querySelector('.afterClick')

main_Button.addEventListener('click',async function clickE(){
    console.log(main_Input.value);
  
  AfterClick.innerHTML=`Will You Be My GF ${main_Input.value} Ji`
   main_Input.value= ''
  
   setTimeout(()=>{
 let con=confirm('Maan Jao Na Yaar 🥺')
if (!con) {
    AfterClick.innerHTML=`Thik hai jesi apki marzi 😔😔`
} else {
    AfterClick.innerHTML=`Thanks 🙃🙃🥳🥳` 
}
setTimeout(() => {
    window.location.reload()
}, 6000);
   },4000)
})
