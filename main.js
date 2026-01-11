
$(document).ready(function () {
    // Máscara de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            }
        },
        messages: {
            nome: {
                required: 'Por favor, informe seu nome',
                minlength: 'O nome deve ter pelo menos 3 caracteres'
            },
            email: {
                required: 'Informe um e-mail válido',
                email: 'E-mail inválido'
            }
        },
        errorClass: 'text-danger',
        submitHandler: function (form) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    });
});
