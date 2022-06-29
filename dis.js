if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)){
    alert("Dependiendo de su dispositivo, peude que algunas cosas se vean fuera de lugar")
    window.location.href = "mobile.html"
}
else {
    window.location.href = "pc.html"
}