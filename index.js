let q = $.noConflict();
"Trailing Code where you want to use"
let iconsCheck = `<i class="fas fa-check"></i>`
let iconsTrash = `<i class="fas fa-trash"></i>`

let btn = q("#btn")

q(document).ready(function(){
    q('#input').change(function(){
        let input = q(this).val()
        q('ul').append(`<li>${input} ${iconsCheck}${iconsTrash}</li>`)
        q(this).val('')
    })

    q('ul').on('click', '.fa-trash', function(){
        q(this).parent('li').fadeOut(300)
    })
    q('ul').on('click', '.fa-check', function(){
        q(this).parent('li').toggleClass('checked')
    })
})