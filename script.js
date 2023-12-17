function dom() {
    const canvas = document.querySelector(".heroSection>canvas");
    const context = canvas.getContext("2d");
    const imageSeq = {
      frame: 0,
    };
  
    function setCanvasSize() {
      const img = images[imageSeq.frame];
      canvas.width = window.innerWidth;
      canvas.height = window.innerWidth;
      render();
    } 
  
    window.addEventListener("resize", setCanvasSize);
  
    function files(index) {
      const data = `
      ./images/SequenceImages/jlsousa tires project 4  Urcola+.3117.${31 + index}.png
      `;
      return data.trim();
    }

  
    const frameCount = 121;
    const images = [];
  
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
  
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 1.8,
        pin: true,
        trigger: "#main",
      },
      onUpdate: render,
    });
  
    images[0].onload = setCanvasSize;
  
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
  
    function scaleImage(img, ctx) {
      const canvas = ctx.canvas;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  
    gsap.to(".heroSection>canvas", {
      scale: 0.8,
      scrollTrigger: {
        scrub: 0.1,
        trigger: "#main",
        start: "bottom 100%",
      },
    });
  
    // ScrollTrigger.create({
    //   trigger: "#main",
    //   pin: true,
    //   start: "bottom 100%",
    // });
  }
  dom();
 

  let video = document.querySelector(".videoSection video");

  ScrollTrigger.create({
    trigger: "#main",
    // markers:true,
    start:"9% top",
    end:"15% top",
    // pin:".videoSection",
    onEnter: () => video.play(),
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
 });


  

  // gsap.to(".videoOverlay", {
  //   scrollTrigger: {
  //     scrub: 0.1,
  //     trigger: "#main",
  //     start: "9% top",
  //     end:"11% top",
  //     markers:true,
  //   },
  //   opacity: 0.85,
  // });

  // gsap.to(".videoOverlayText", {
  //   scrollTrigger: {
  //     scrub: 0.1,
  //     trigger: "#main",
  //     start: "10% top",
  //     end:"13% top",
  //     markers:true,
  //   },
  //   bottom:"18%",
  // });

  // gsap.to(".videoSection", {
  //   scrollTrigger: {
  //     scrub: 0.1,
  //     trigger: "#main",
  //     start: "9% top",
  //     end:"15% top",
  //     markers:true,
  //     pin:true,
  //   },
  // });




  let tl1 = gsap.timeline({
		scrollTrigger: {
      scrub: 0.1,
      trigger: "#main",
      start: "9% top",
      end:"11% top",
      markers:true,
      pin:true,
		},	
	});

tl1.to('.videoOverlay', { opacity: 0.85 })
tl1.to('.videoOverlayText', { bottom:"18%" }, '+.6')


