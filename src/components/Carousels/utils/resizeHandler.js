// // this is attempting to match the width of the item to the width of the slider using math.  Not sure why this isn't done in scss
//
// function resize(itemRef, sliderRef) {
//     let width = Math.max(window.innerWidth * .25, 275),
//         height = window.innerHeight * .5,
//         totalWidth = width * itemRef.length,
//         margin = 20,
//
//     sliderRef.style.width = totalWidth + "px";
//
//     for(let i = 0; i < itemRef.length; i++) {
//         let item = itemRef[i];
//         item.style.width = (width - (margin * 2)) + "px";
//         item.style.height = height + "px";
//     }
// }