

document.getElementById('noakhali-donate').addEventListener('click', function(event){
    event.preventDefault();
    donate('noakhali-donate-amount', 'noakhali-donate-balance', 'famine-2024 at Feni, Bangladesh');
})


document.getElementById('feni-donate').addEventListener('click', function(event){
    event.preventDefault();
    donate('feni-donate-amount', 'feni-donate-balance', ' Flood Relief in Feni,Bangladesh');
})



document.getElementById('queata-movement-donate').addEventListener('click', function(event){
    event.preventDefault();
    donate('queata-donate-amount', 'queata-donate-balance', ' Injured in the Quota Movement, Bangladesh');
})


//    ---------------------------------------------//

document.getElementById('blog').addEventListener('click', function(){
    showSectionById('faq-form', 'donate', 'history')


})
document.getElementById('donate').addEventListener('click', function(){
    showSectionById('donate-form', 'donate', 'history')

})
document.getElementById('history').addEventListener('click', function(){
    showSectionById('history-form', 'history', 'donate')

})
