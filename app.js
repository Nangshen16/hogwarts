console.log('center')
const $div = $('<div>')
//h2 element with my name
const $h2 = $('h2')
$('h2').text('Nang Shen Hom')
//h3 element with my house
const $h3 =$('.house')
$('.house').text('Hufflepuff')
//h4 element with my dog name
const $h4 = $('h4')
$('h4').addClass('dog').text('Quincy')
//  //h4 with my wand type 
 $('<h4>').text('Holly Wand with Unicorn Hair Core')

 //remove my wand
 $('.wand').remove()

 //remove all the butter beer
 $('.drink').remove()

 //get a new wand
 $('h4.wand').text('Holly Wand with Unicorn Hair Core').css('color', 'indigo')
 