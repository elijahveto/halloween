const card = document.getElementById('card');
const ghost = document.getElementById('ghost');
const pumkins = document.getElementById('pumkinContainer')
const pumkin1 = document.getElementById('pumkin1')
const pumkin2 = document.getElementById('pumkin2')
const pumkin3 = document.getElementById('pumkin3')


card.addEventListener('click', (e) => {
    pumkins.style.visibility = "visible"
    pumkin1.style.transition ="all 2s ease-in"
    pumkin2.style.transition ="all 2s ease-in"
    pumkin3.style.transition ="all 2s ease-in"
    pumkin1.style.transform = "translateX(1000px) translateY(-5000px)"
    pumkin2.style.transform = "translateX(1000px)"
    pumkin3.style.transform = "translateX(-1000px) translateY(-2000px)"

})
card.addEventListener('mouseleave', (e) => {
    pumkins.style.visibility = "hidden"
    pumkin1.style.transition ="none"
    pumkin2.style.transition ="none"
    pumkin3.style.transition ="none"
    pumkin1.style.transform = "translateX(100px) translateY(-230px)"
    pumkin2.style.transform = "translateX(170px) translateY(-100px)"
    pumkin3.style.transform = "translateX(-20px) translateY(-140px)"
    ghost.style.transform = "translateZ(0px)"

})
