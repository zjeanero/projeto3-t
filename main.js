$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });
})


    $('#fale-conosco').validate ({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            mensagem: {
                required: true
            }
        }
    })