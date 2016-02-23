/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Closes the Responsive Menu on Click outside Menu
$('body > *').not('nav').click(function() {
    if(!$('button.navbar-toggle').hasClass('collapsed')) {
        $('.navbar-toggle:visible').click();
    }
});

// Validates the contact form and submits it using Formspree.
$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if (element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

$("#contact-form").validate({
    submitHandler: function(form) {
        $.ajax({
            url: "//formspree.io/mohammad@daraghmehdigital.com",
            method: "POST",
            data: {
                name: $(form).find("input[name='name']").val(),
                email: $(form).find("input[name='email']").val(),
                subject: $(form).find("input[name='_subject']").val(),


                phone: $(form).find("input[name='phone']").val(),
                message: $(form).find("textarea[name='message']").val()
            },
            dataType: "json",
            success: function() {
                $("#submit-success").fadeIn();
                $("#contact-form").fadeOut();
            },
            error: function() {
                $("#submit-errors").fadeIn();
            }
        });
    }
});