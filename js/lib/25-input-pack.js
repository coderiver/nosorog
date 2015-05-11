(function($) {
    jQuery.fn.inputPack = function(options) {
        var settings = $.extend( {
            'unit' : 'уп.',
            'piece': 'шт.',
            'template': ''
        }, options);

        var setValue = function(container, value, pack) {
            var inputWrap = $(container).find('input.pack');
            inputWrap.val(parseInt(value/pack) + ' ' + settings.unit);

            var totalWrap = $(container).find('span.val');
            totalWrap.html(parseInt(value) + ' ' + settings.piece);
        };

        var init = function(element) {
            var name = element.prop('name');
            var match = name.match(/qty\-([0-9]+)/);
            var id = false;
            if (element.data('id')) {
                id = element.data('id');
            } else if (match && match[1]) {
                id = parseInt(match[1]);
            }

            var pack = 1;
            if (parseInt(element.data('pack')) > 1) {
                pack = parseInt(element.data('pack'));
            }
            var value = element.val();
            var html = false;
            var name = element.prop('name');
            try {
                html = _.template(settings.template)({
                    id: id,
                    pack: pack,
                    pack_items: parseInt(value/pack),
                    unit: settings.unit,
                    name: name,
                    total: value,
                    element: element[0].outerHTML
                });
            } catch(e) {
                // Template incorrect
                console.log('Element init error: ', element);
                return false;
            }

            var oDiv = document.createElement('div');
            oDiv.className = 'cart_quantity text-center';
            if (pack > 1) {
                oDiv.className = oDiv.className + ' pieces';
            }
            $(oDiv).html(html);
            element.replaceWith(oDiv);

            // Events
            if (pack > 1) {
                var valueInput = $(oDiv).find('input.cart_quantity_input');
                var wrapInput = $(oDiv).find('input.pack');

                valueInput.keyup(function (e) {
                    e.preventDefault();
                    setValue(oDiv, $(this).val(), pack);
                });

                // Clear value
                wrapInput.focus(function(e) {
                    $(this).val('');
                });

                // Send value to parent
                wrapInput.blur(function(e) {
                    var value = parseInt($(this).val());
                    if (!value || isNaN(value)) {
                        setValue(oDiv, valueInput.val(), pack);
                    } else {
                        setValue(oDiv, value * pack, pack);
                        valueInput.val(value * pack);
                    }
                });

                wrapInput.keyup(function(e) {
                    var value = parseInt($(this).val());
                    if (value && !isNaN(value)) {
                        valueInput.val(value * pack);
                    }
                });

                setValue(oDiv, valueInput.val(), pack);
            }
        };

        return this.each(function() {
            var element = $(this);
            if (element.data('init') != 'pack') {
                init(element);
            }
        });
    };
})(jQuery);