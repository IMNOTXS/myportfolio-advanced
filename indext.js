// template_81vd88d 
// service_3ipgep8 
// gpULuYIX1xEhRuSi2 public ID
//just incase i need them



let isModalOpen = false
let contrastToggle = true
const scaleFactor = 1/20
function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    
    for (i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !==0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y *boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
    
}


function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    emailjs
        .sendForm(
            'service_3ipgep8',
            'template_81vd88d',
            event.target,
            'gpULuYIX1xEhRuSi2'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                'The email service is temporarily down, please contact me at Fahadadsani@gmail.com'
            )
        })
}


function toggleModal(){
    if (isModalOpen){
        isModalOpen= false
        return document.body.classList.remove('modal__open')
    }
    isModalOpen = true
    document.body.classList += ' modal__open'
}