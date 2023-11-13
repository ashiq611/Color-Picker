let gd1 = document.getElementById('gd1');
let gd2 = document.getElementById('gd2');
let gd3 = document.getElementById('gd3');
let gd4 = document.getElementById('gd4');
let gd5 = document.getElementById('gd5');
let gd6 = document.getElementById('gd6');
let gd7 = document.getElementById('gd7');
let gd8 = document.getElementById('gd8');
let copy1 = document.getElementById('copy')
let co = document.getElementById("co");

let output = document.getElementById('output');



gd1.addEventListener('click', function(){
    document.getElementById("copy").innerText = "Copy To Clipboard";
  output.style.backgroundImage =
    "linear-gradient(45deg,hsl(240deg 100% 20%) 0%,hsl(289deg 100% 21%) 11%,hsl(315deg 100% 27%) 22%,hsl(329deg 100% 36%) 33%,hsl(337deg 100% 43%) 44%,hsl(357deg 91% 59%) 56%,hsl(17deg 100% 59%) 67%,hsl(34deg 100% 53%) 78%,hsl(45deg 100% 50%) 89%,hsl(55deg 100% 50%) 100%)";
  output.innerHTML =
    "<h1 class='text-white text-center'>Background-image: linear-gradient(45deg,hsl(240deg 100% 20%) 0%,hsl(289deg 100% 21%) 11%,hsl(315deg 100% 27%) 22%,hsl(329deg 100% 36%) 33%,hsl(337deg 100% 43%) 44%,hsl(357deg 91% 59%) 56%,hsl(17deg 100% 59%) 67%,hsl(34deg 100% 53%) 78%,hsl(45deg 100% 50%) 89%,hsl(55deg 100% 50%) 100%)</h1>";

   copy1.addEventListener("click", function () {
     // Copy the text inside the text field
     navigator.clipboard.writeText(
       "linear-gradient(45deg,hsl(154deg 100% 1%) 0%,hsl(190deg 7% 23%) 9%,hsl(215deg 4% 47%) 18%,hsl(279deg 5% 73%) 27%,hsl(329deg 35% 87%) 36%,hsl(314deg 39% 74%) 45%,hsl(293deg 37% 62%) 55%,hsl(272deg 44% 53%) 64%,hsl(307deg 39% 52%) 73%,hsl(343deg 58% 67%) 82%,hsl(9deg 58% 77%) 91%,hsl(26deg 31% 87%) 100%)"
     );
     copy1.innerText = "Copied";
   });
})
// // Copy the text inside the text field
//      copy1.addEventListener('click', function(){
//        // Copy the text inside the text field
//        navigator.clipboard.writeText(
//          "linear-gradient(45deg,hsl(154deg 100% 1%) 0%,hsl(190deg 7% 23%) 9%,hsl(215deg 4% 47%) 18%,hsl(279deg 5% 73%) 27%,hsl(329deg 35% 87%) 36%,hsl(314deg 39% 74%) 45%,hsl(293deg 37% 62%) 55%,hsl(272deg 44% 53%) 64%,hsl(307deg 39% 52%) 73%,hsl(343deg 58% 67%) 82%,hsl(9deg 58% 77%) 91%,hsl(26deg 31% 87%) 100%)"
//          );
//          copy1.innerText= "Clip to";
//      })

gd2.addEventListener('click', function(){
    document.getElementById("copy").innerText= "Copy To Clipboard";
    output.style.backgroundImage= "linear-gradient(45deg,hsl(154deg 100% 1%) 0%,hsl(190deg 7% 23%) 9%,hsl(215deg 4% 47%) 18%,hsl(279deg 5% 73%) 27%,hsl(329deg 35% 87%) 36%,hsl(314deg 39% 74%) 45%,hsl(293deg 37% 62%) 55%,hsl(272deg 44% 53%) 64%,hsl(307deg 39% 52%) 73%,hsl(343deg 58% 67%) 82%,hsl(9deg 58% 77%) 91%,hsl(26deg 31% 87%) 100%)"
    output.innerHTML= "<h1 id='co' class='text-white text-center'>background-image: linear-gradient(45deg,hsl(154deg 100% 1%) 0%,hsl(190deg 7% 23%) 9%,hsl(215deg 4% 47%) 18%,hsl(279deg 5% 73%) 27%,hsl(329deg 35% 87%) 36%,hsl(314deg 39% 74%) 45%,hsl(293deg 37% 62%) 55%,hsl(272deg 44% 53%) 64%,hsl(307deg 39% 52%) 73%,hsl(343deg 58% 67%) 82%,hsl(9deg 58% 77%) 91%,hsl(26deg 31% 87%) 100%)</h1>"

    copy1.addEventListener("click", function () {
      // Copy the text inside the text field
      navigator.clipboard.writeText(
        "linear-gradient(45deg,hsl(154deg 100% 1%) 0%,hsl(190deg 7% 23%) 9%,hsl(215deg 4% 47%) 18%,hsl(279deg 5% 73%) 27%,hsl(329deg 35% 87%) 36%,hsl(314deg 39% 74%) 45%,hsl(293deg 37% 62%) 55%,hsl(272deg 44% 53%) 64%,hsl(307deg 39% 52%) 73%,hsl(343deg 58% 67%) 82%,hsl(9deg 58% 77%) 91%,hsl(26deg 31% 87%) 100%)"
      );
      copy1.innerText = "Copied";
    });

})

gd3.addEventListener('click', function(){
    document.getElementById("copy").innerText = "Copy To Clipboard";
    output.style.backgroundImage= "linear-gradient(45deg,hsl(130deg 100% 20%) 0%,hsl(97deg 82% 26%) 10%,hsl(82deg 94% 27%) 20%,hsl(71deg 100% 30%) 30%,hsl(63deg 100% 33%) 40%,hsl(55deg 93% 40%) 50%, hsl(49deg 100% 41%) 60%,hsl(43deg 100% 43%) 70%,hsl(38deg 100% 46%) 80%,hsl(33deg 100% 48%) 90%, hsl(28deg 100% 50%) 100%)"
    output.innerHTML= "<h1 class='text-white text-center'>background-image: linear-gradient(45deg,hsl(130deg 100% 20%) 0%,hsl(97deg 82% 26%) 10%,hsl(82deg 94% 27%) 20%,hsl(71deg 100% 30%) 30%,hsl(63deg 100% 33%) 40%,hsl(55deg 93% 40%) 50%, hsl(49deg 100% 41%) 60%,hsl(43deg 100% 43%) 70%,hsl(38deg 100% 46%) 80%,hsl(33deg 100% 48%) 90%, hsl(28deg 100% 50%) 100%)</h1>"

    copy1.addEventListener("click", function () {
      // Copy the text inside the text field
      navigator.clipboard.writeText(
        "linear-gradient(45deg,hsl(130deg 100% 20%) 0%,hsl(97deg 82% 26%) 10%,hsl(82deg 94% 27%) 20%,hsl(71deg 100% 30%) 30%,hsl(63deg 100% 33%) 40%,hsl(55deg 93% 40%) 50%, hsl(49deg 100% 41%) 60%,hsl(43deg 100% 43%) 70%,hsl(38deg 100% 46%) 80%,hsl(33deg 100% 48%) 90%, hsl(28deg 100% 50%) 100%)"
      );
      copy1.innerText = "Copied";
    });




})

gd4.addEventListener('click', function(){
    document.getElementById("copy").innerText = "Copy To Clipboard";
    output.style.backgroundImage= "linear-gradient(45deg,hsl(266deg 100% 20%) 0%,hsl(266deg 99% 24%) 10%,hsl(266deg 98% 27%) 20%,hsl(266deg 97% 31%) 30%,hsl(265deg 95% 36%) 40%,hsl(265deg 93% 40%) 50%,hsl(219deg 100% 46%) 60%,hsl(210deg 100% 50%) 70%,hsl(202deg 100% 50%) 80%,hsl(195deg 100% 50%) 90%,hsl(188deg 100% 50%) 100%)"
    output.innerHTML= "<h1 class='text-white text-center'>background-image: linear-gradient(45deg,hsl(130deg 100% 20%) 0%,hsl(97deg 82% 26%) 10%,hsl(82deg 94% 27%) 20%,hsl(71deg 100% 30%) 30%,hsl(63deg 100% 33%) 40%,hsl(55deg 93% 40%) 50%, hsl(49deg 100% 41%) 60%,hsl(43deg 100% 43%) 70%,hsl(38deg 100% 46%) 80%,hsl(33deg 100% 48%) 90%, hsl(28deg 100% 50%) 100%)</h1>"

    copy1.addEventListener("click", function () {
      // Copy the text inside the text field
      navigator.clipboard.writeText(
        "linear-gradient(45deg,hsl(266deg 100% 20%) 0%,hsl(266deg 99% 24%) 10%,hsl(266deg 98% 27%) 20%,hsl(266deg 97% 31%) 30%,hsl(265deg 95% 36%) 40%,hsl(265deg 93% 40%) 50%,hsl(219deg 100% 46%) 60%,hsl(210deg 100% 50%) 70%,hsl(202deg 100% 50%) 80%,hsl(195deg 100% 50%) 90%,hsl(188deg 100% 50%) 100%)"
      );
      copy1.innerText = "Copied";
    });

})

gd5.addEventListener('click', function(){
    document.getElementById("copy").innerText = "Copy To Clipboard";
    output.style.backgroundImage= "linear-gradient(45deg,hsl(329deg 100% 20%) 0%,hsl(320deg 100% 23%) 9%,hsl(305deg 100% 25%) 18%,hsl(283deg 100% 32%) 27%,hsl(223deg 100% 45%) 36%,hsl(207deg 100% 50%) 45%,hsl(194deg 100% 50%) 55%,hsl(176deg 100% 47%) 64%,hsl(180deg 95% 52%) 73%,hsl(190deg 100% 75%) 82%,hsl(210deg 84% 85%) 91%,hsl(240deg 10% 84%) 100%)"
    output.innerHTML= "<h1 class='text-white text-center'>background-image: linear-gradient(45deg,hsl(329deg 100% 20%) 0%,hsl(320deg 100% 23%) 9%,hsl(305deg 100% 25%) 18%,hsl(283deg 100% 32%) 27%,hsl(223deg 100% 45%) 36%,hsl(207deg 100% 50%) 45%,hsl(194deg 100% 50%) 55%,hsl(176deg 100% 47%) 64%,hsl(180deg 95% 52%) 73%,hsl(190deg 100% 75%) 82%,hsl(210deg 84% 85%) 91%,hsl(240deg 10% 84%) 100%)</h1>"

    copy1.addEventListener("click", function () {
      // Copy the text inside the text field
      navigator.clipboard.writeText(
        "linear-gradient(45deg,hsl(329deg 100% 20%) 0%,hsl(320deg 100% 23%) 9%,hsl(305deg 100% 25%) 18%,hsl(283deg 100% 32%) 27%,hsl(223deg 100% 45%) 36%,hsl(207deg 100% 50%) 45%,hsl(194deg 100% 50%) 55%,hsl(176deg 100% 47%) 64%,hsl(180deg 95% 52%) 73%,hsl(190deg 100% 75%) 82%,hsl(210deg 84% 85%) 91%,hsl(240deg 10% 84%) 100%)"
      );
      copy1.innerText = "Copied";
    });

})

gd6.addEventListener('click', function(){
    document.getElementById("copy").innerText = "Copy To Clipboard";
    output.style.backgroundImage= "linear-gradient(45deg,hsl(0deg 0% 90%) 0%,hsl(270deg 34% 80%) 9%,hsl(268deg 45% 71%) 18%,hsl(266deg 50% 61%) 27%,hsl(241deg 60% 63%) 36%,hsl(201deg 100% 47%) 45%,hsl(193deg 83% 57%) 55%,hsl(180deg 61% 76%) 64%,hsl(184deg 63% 83%) 73%,hsl(198deg 59% 85%) 82%,hsl(213deg 35% 85%) 91%,hsl(240deg 10% 84%) 100%)"
    output.innerHTML= "<h1 class='text-white text-center'>background-image: linear-gradient(45deg,hsl(0deg 0% 90%) 0%,hsl(270deg 34% 80%) 9%,hsl(268deg 45% 71%) 18%,hsl(266deg 50% 61%) 27%,hsl(241deg 60% 63%) 36%,hsl(201deg 100% 47%) 45%,hsl(193deg 83% 57%) 55%,hsl(180deg 61% 76%) 64%,hsl(184deg 63% 83%) 73%,hsl(198deg 59% 85%) 82%,hsl(213deg 35% 85%) 91%,hsl(240deg 10% 84%) 100%)</h1>"

    copy1.addEventListener("click", function () {
      // Copy the text inside the text field
      navigator.clipboard.writeText(
        "linear-gradient(45deg,hsl(0deg 0% 90%) 0%,hsl(270deg 34% 80%) 9%,hsl(268deg 45% 71%) 18%,hsl(266deg 50% 61%) 27%,hsl(241deg 60% 63%) 36%,hsl(201deg 100% 47%) 45%,hsl(193deg 83% 57%) 55%,hsl(180deg 61% 76%) 64%,hsl(184deg 63% 83%) 73%,hsl(198deg 59% 85%) 82%,hsl(213deg 35% 85%) 91%,hsl(240deg 10% 84%) 100%)"
      );
      copy1.innerText = "Copied";
    });

})

gd7.addEventListener('click', function(){
    document.getElementById("copy").innerText = "Copy To Clipboard";
    output.style.backgroundImage= "linear-gradient(45deg,hsl(240deg 10% 84%) 0%,hsl(268deg 21% 71%) 9%,hsl(301deg 21% 55%) 18%,hsl(324deg 41% 43%) 27%,hsl(329deg 60% 36%) 36%,hsl(319deg 31% 46%) 45%,hsl(297deg 18% 54%) 55%,hsl(272deg 15% 64%) 64%,hsl(264deg 9% 54%) 73%,hsl(264deg 11% 36%) 82%,hsl(263deg 18% 20%) 91%,hsl(0deg 0% 0%) 100%)"
    output.innerHTML= "<h1 class='text-white text-center'>background-image: linear-gradient(45deg,hsl(240deg 10% 84%) 0%,hsl(268deg 21% 71%) 9%,hsl(301deg 21% 55%) 18%,hsl(324deg 41% 43%) 27%,hsl(329deg 60% 36%) 36%,hsl(319deg 31% 46%) 45%,hsl(297deg 18% 54%) 55%,hsl(272deg 15% 64%) 64%,hsl(264deg 9% 54%) 73%,hsl(264deg 11% 36%) 82%,hsl(263deg 18% 20%) 91%,hsl(0deg 0% 0%) 100%)</h1>"

    copy1.addEventListener("click", function () {
      // Copy the text inside the text field
      navigator.clipboard.writeText(
        "linear-gradient(45deg,hsl(240deg 10% 84%) 0%,hsl(268deg 21% 71%) 9%,hsl(301deg 21% 55%) 18%,hsl(324deg 41% 43%) 27%,hsl(329deg 60% 36%) 36%,hsl(319deg 31% 46%) 45%,hsl(297deg 18% 54%) 55%,hsl(272deg 15% 64%) 64%,hsl(264deg 9% 54%) 73%,hsl(264deg 11% 36%) 82%,hsl(263deg 18% 20%) 91%,hsl(0deg 0% 0%) 100%)"
      );
      copy1.innerText = "Copied";
    });

})

gd8.addEventListener('click', function(){
    document.getElementById("copy").innerText = "Copy To Clipboard";
    output.style.backgroundImage= "linear-gradient(60deg,hsl(240deg 100% 20%) 0%,hsl(288deg 100% 28%) 12%,hsl(335deg 100% 36%) 22%,hsl(23deg 100% 45%) 31%,hsl(50deg 98% 46%) 40%,hsl(35deg 92% 34%) 49%,hsl(20deg 87% 22%) 58%,hsl(5deg 80% 10%) 66%,hsl(0deg 64% 8%) 74%,hsl(0deg 43% 10%) 83%,hsl(0deg 24% 13%) 91%,hsl(0deg 2% 16%) 100%)"
    output.innerHTML= "<h1 class='text-white text-center'>background-image: linear-gradient(60deg,hsl(240deg 100% 20%) 0%,hsl(288deg 100% 28%) 12%,hsl(335deg 100% 36%) 22%,hsl(23deg 100% 45%) 31%,hsl(50deg 98% 46%) 40%,hsl(35deg 92% 34%) 49%,hsl(20deg 87% 22%) 58%,hsl(5deg 80% 10%) 66%,hsl(0deg 64% 8%) 74%,hsl(0deg 43% 10%) 83%,hsl(0deg 24% 13%) 91%,hsl(0deg 2% 16%) 100%)</h1>"

    copy1.addEventListener("click", function () {
      // Copy the text inside the text field
      navigator.clipboard.writeText(
        "linear-gradient(60deg,hsl(240deg 100% 20%) 0%,hsl(288deg 100% 28%) 12%,hsl(335deg 100% 36%) 22%,hsl(23deg 100% 45%) 31%,hsl(50deg 98% 46%) 40%,hsl(35deg 92% 34%) 49%,hsl(20deg 87% 22%) 58%,hsl(5deg 80% 10%) 66%,hsl(0deg 64% 8%) 74%,hsl(0deg 43% 10%) 83%,hsl(0deg 24% 13%) 91%,hsl(0deg 2% 16%) 100%)"
      );
      copy1.innerText = "Copied";
    });

})


