$(".header-main-heading").textillate({
  in:{
    effect: "fadeInUp",
    delayScale: 3.5
  }
});

$(".header-sub-heading").textillate({
  in:{
    effect: "fadeInUp",
    delayScale: 0.5
  }
});

$(".header-description").textillate({
  in:{
    effect: "fadeInUp",
    delayScale: 0.5
  }
});

$(".header-btn").textillate({
  in:{
    effect: "fadeInUp",
    delayScale: 2.5
  }
});

TweenMax.from(".header-btn", 2, {
  y: 50,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(".nav > *", 2, {
  y: 50,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.to(".hero-image-container", 2, {
  opacity: 1,
  ease: Expo.easeInOut
});

TweenMax.from(".hero-image", 2, {
  x:300,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.to(".hero-image", 2, {
  x:0,
  opacity: 1,
  ease: Expo.easeInOut
});
