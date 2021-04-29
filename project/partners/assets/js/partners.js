import $ from 'jquery'

const leafletFrame = document.getElementById('leaflet-iframe')

$(document).ready(function () {
    $('#leaflet-modal').on('show.bs.modal', function (event) {
        var btn = event.relatedTarget
        var leafletPath = btn.dataset.leafletUrl
        // Update img of modal
        leafletFrame.setAttribute('src', leafletPath + '#view=Fit')
    })
})

var activePartner;
$('.image-container').on("click touch", function() {
    activePartner = $(this);
    $(this).addClass('hover');
    $('.image-container').not(this).removeClass('hover');
});

$(window).on("click", function(e) {
    if (activePartner != null) {
        if ($(e.target.parentElement).hasClass('image-container') == false) {
            activePartner.removeClass('hover');
        }
    }
});

$('.triangle').on("click touch", function(){
    console.log(this.id.concat("-modal"));
    let id = this.id.concat("-modal");
    let m = document.getElementById(id);
    console.log(m);
    $(m).removeClass('hidden');
});

$('.close').on("click touch", function(){
    console.log(this.parentElement.parentElement);
    let m1 = this.parentElement.parentElement;
    $(m1).addClass('hidden');
});