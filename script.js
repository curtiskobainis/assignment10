    function showWindowSize(){
        var wid = document.documentElement.clientWidth;
        var hgt = document.documentElement.clientHeight;
        document.getElementById("resolution").innerHTML = "WIDTH: " + wid + ", " + "HEIGHT: " + hgt;
    }
    
    window.addEventListener("resize", showWindowSize);

    showWindowSize();

