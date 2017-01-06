<template>
    <div id="editor">
        <textarea :value="input" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import marked from 'marked'
import _ from 'lodash'

export default {

    data () {
        return {
            input: ''
        }
    },
    computed: {
        compiledMarkdown: function () {

            return marked(this.input, {sanitize: true})
        }
    },
    mounted() {

        console.log(111)
    },
    methods: {

        update: _.debounce(function(e) {
            
            this.input = e.target.value
        }, 300)

    }
}


</script>

