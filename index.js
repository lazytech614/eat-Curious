function loading(){
    var tl = gsap.timeline();
    tl.from("#meat-free",{
        scale: 0,
        opacity: 0,
        duration: 0.2,
        delay: 0.2,
        ease: "back.out(1.7)"
    })
    tl.from(".page1 img",{
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: "back.out(1.7)"
    })
    tl.from("#your-mind",{
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: "back.out(1.7)"
    })
    tl.from(".bottom-scroller",{
    y: 100
    })
};
loading();

function navFade(){
    gsap.to(".nav",{
        duration:2.5,
        ease: "expo.inOut",
        y: -500,
        scrollTrigger: {
            trigger: ".nav",
            scroller: "body",
            // markers: true,
            start: "top 0%",
            end: "top -10%",
            scrub: true
        }
    })
};
navFade();

function stickerRotate(){
    document.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var image = document.querySelector('#sticker');
        var rotation = 'rotate(' + scrollPosition + 'deg)';
        image.style.transform = rotation;
    });
}
stickerRotate();