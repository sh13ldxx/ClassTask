
let CartBtn = document.querySelectorAll(".bag")


CartBtn.forEach(btn => {
    btn.parentElement.addEventListener("click", function () {

        // console.log(this)
      LocalStorageCheck()
      let items = GetIitemInfo(this)
      AddLocalStorageStep(this,items)
    //   console.log(items);
    //   console.log(GetIitemInfo(this))
    })
  });


//   Local Storage Check 

function LocalStorageCheck() {
    if (!localStorage.getItem("Carts")) {
      localStorage.setItem("Carts",JSON.stringify([]))
    }
  }
  LocalStorageCheck()



  let cart =  JSON.parse(localStorage.getItem("Carts"))

//   console.log(cart);
// GET ELMENETS

function GetIitemInfo(e) {
    return{
        id : e.getAttribute('data-id'),
        price : e.parentElement.previousElementSibling.children[0].innerText.substring(1,e.parentElement.previousElementSibling.children[0].innerText.length),
        model : e.parentElement.previousElementSibling.previousElementSibling.innerText,
        img : e.parentElement.parentElement.previousElementSibling.src,
        count : 1
      }
}


// Add cart to LocalStorage

function AddLocalStorageStep(e,items) {
    console.log("LocalSetep");
    localStorage.setItem('Carts', JSON.stringify(items));

}