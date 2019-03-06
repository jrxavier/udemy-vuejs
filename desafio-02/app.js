new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaBotao(e) {
            console.log('clico no botao')
            alert('Botao clicado')
        },
        escutaKeyDown(e) {
            this.valor = e.target.value;
        },
        escutaKeyDownEnter(e) {
            this.valor = e.target.value;
        }
    }
})