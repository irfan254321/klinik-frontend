const checkUser = () => {
    let userLogin = localStorage.getItem("");
    
    if(userLogin == null){
        fetch("./assets/navbar/base-navbar.html")
            .then(response => response.text())
            .then(html => {

                let baseNavbar = document.createElement("div")
                baseNavbar.innerHTML = html

                let checkNavbar = baseNavbar.querySelector("#baseNavbar")
                
                if(checkNavbar){
                    document.getElementById("navbarUser").appendChild(checkNavbar)
                }
            })
        .catch(err => {
            console.log(err)
        })
    }
}

checkUser()