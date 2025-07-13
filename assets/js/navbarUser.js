const checkUser = () => {

    let userLogin = sessionStorage.getItem("user")

    if(userLogin == null) {
        console.log("tidak ada user")
        fetch("./assets/navbar/base-navbar.html")
        .then(response => 
            response.text()
        )
        .then(data => {
            document.getElementById("navbarUser").innerHTML = data;
        })
    }else if(userLogin === "Doctor"){
        fetch("./assets/navbar/doctor-navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbarUser").innerHTML = data;
        })
        console.log("dokter")
    }else if(userLogin === "Employee"){
        fetch("./assets/navbar/employee-navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbarUser").innerHTML = data;
        })
        console.log("pegawai")
    }
}

