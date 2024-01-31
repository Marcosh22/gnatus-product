document.addEventListener('DOMContentLoaded', () => {
  $('.date').mask('00/00/0000');
  $('.time').mask('00:00');
  $('.tel').mask('00000-0000');
  $('.cellphone').mask('(00) 00000-0000');
  $('.plate').mask('SSS-0000');
  $('.cpf').mask('000.000.000-00');
  $('.cnpj').mask('00.000.000/0000-00');
  if ($('.money').maskMoney) $('.money').maskMoney();

  let options = {
    onKeyPress: function (cpf, ev, el, op) {
        var masks = ['000.000.000-000', '00.000.000/0000-00'];
        $('.cpf_cnpj').mask((cpf.length > 14) ? masks[1] : masks[0], op);
    }
}

$('.cpf_cnpj').length > 11 ? $('.cpf_cnpj').mask('00.000.000/0000-00', options) : $('.cpf_cnpj').mask('000.000.000-00#', options);

let behavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
};

let mixed_phone_options = {
  onKeyPress: function (val, e, field, options) {
      field.mask(behavior.apply({}, arguments), options);
  }
};

$('.mixed_phone').mask(behavior, mixed_phone_options);

});
