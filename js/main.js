$.fn.validate = function() {
    var $this = $(this);
    var pattern = new RegExp($this.attr('pattern'));

    return $this.keyup(function(){
        if($this.val().trim().match(pattern)) {
            $this.valid();
        } else {
            $this.invalid();
        }

        return this;
    });

};

$.fn.validateForm = function() {
    // FIXME what if input does not have patter?
    $inputs = this.find('input[type!="submit"]');

    $inputs.each(function() {
        $(this).validate();
    });
};

$.fn.disable = function() {
    this.attr('disabled', true);

    return this;
};

$.fn.enable = function() {
    this.attr('disabled', false);

    return this;
};

$.fn.valid = function() {
    this.removeClass('invalid').addClass('valid');

    return this;
};

$.fn.invalid = function() {
    this.removeClass('valid').addClass('invalid');

    return this;
};

String.prototype.contain = function(string) {
    return this.indexOf(string) !== -1;
};

(function(){
    "use strict";

    if(navigator.appName.contain('Safari')) {
        $('.validate-form').validateForm();
    }
})();
