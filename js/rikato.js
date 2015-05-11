
var inputSelector = 'input.cart_quantity_input:not(.decorate) + input.pack';
var sendRequestTimerId = false;
$(document).on('keyup', inputSelector, function() {
    var element = $(this);
    var parent = element.closest('.cart_quantity');
    var realInput = parent.find('input.cart_quantity_input');

    if (realInput.length && realInput.data('pack') > 1) {
        var currentValue = parseInt(element.val());
        currentValue = currentValue || 1;
        realInput.val(currentValue * realInput.data('pack'));
    }

    if (sendRequestTimerId) {
        clearTimeout(sendRequestTimerId);
    }

    sendRequestTimerId = setTimeout(function(){
        updateQty(realInput.val(), true, realInput[0]);
    }, 500);
});

$(document).on('focus', inputSelector, function() {
    var element = $(this);
    element.val('');
});

$(document).on('blur', inputSelector, function() {
    var element = $(this);
    var parent = element.closest('.cart_quantity');
    var realInput = parent.find('input.cart_quantity_input');

    var wrapperValue = parseInt(realInput.val() / realInput.data('pack'));
    element.val(wrapperValue + ' уп.');
});


//$(document).ready(function(){
//    $('.tagify-input').tagify({
//        delimiters: [13, 188],
//        outputDelimiter: ',',
//        addTagPrompt: 'add email'
//    });
//});