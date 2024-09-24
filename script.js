let icon_btn = document.querySelector(".icon")
let install_detail = document.querySelector(".install_detail")
let detail = document.querySelector(".install_detail .detail")
let root = document.querySelector(":root")
let syntax_detail = document.querySelector(".syntax_detail")
let syntax_icon = document.querySelector(".syntax_icon")
let detail2 = document.querySelector(".syntax_detail .detail")
let syntax_detail_height = getComputedStyle(detail2).getPropertyValue("height")


let detail_height = getComputedStyle(detail).getPropertyValue("height")
syntax_detail.style.top =  0
detail.style.height = 0
let install_status = false
icon_btn.onclick = () =>{
    if(!install_status){
        detail.style.height = detail_height
        syntax_detail.style.top =  detail_height
        icon_btn.classList.add("rotate")
    }else{
        detail.style.height = "0px"
        syntax_detail.style.top =   "0"
        icon_btn.classList.remove("rotate")
    }
    install_status = !install_status
}



//
let install_status_syntax = true

syntax_icon.onclick = () =>{
    if(!install_status_syntax){
        detail2.style.height = syntax_detail_height
        syntax_icon.classList.add("rotate")
    }else{
        detail2.style.height = "0px"
        syntax_icon.classList.remove("rotate")
    }
    install_status_syntax = !install_status_syntax
}
