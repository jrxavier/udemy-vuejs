new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    //https://br.vuejs.org/v2/guide/computed.html
    computed: {
        resultado() {
            console.log(this.valor)
            return this.valor != 37 ?
                'Valor diferente de 37' : 'Valor igual';
        }

    },
    watch: {
        resultado(novo, antigo) {
            setTimeout(() => {
                this.valor = 0;
            }, 5000)
        }
    }
});