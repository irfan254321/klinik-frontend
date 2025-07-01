const checkUser = () => {

    let userLogin = sessionStorage.getItem("user")

    if(userLogin == null) {
        console.log("gagal")
    }else{
        console.log("berhasil")
    }

}

