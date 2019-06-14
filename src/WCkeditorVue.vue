<template>
    <div style="display:inline-block;">

        <cceditor
            :editor="editor"
            :config="settings"
            :value="value"
            :disabled="!editable"
            @input="function(v){$emit('input',v)}"
        ></cceditor>

    </div>
</template>

<script>
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh'
import CKEditor from '@ckeditor/ckeditor5-vue'

let def_settings = {
    language: 'zh',
    //toolbar: [ 'heading', '|', 'bold', 'italic', 'link', '|', 'subscript', 'superscript', '|', 'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify', '|', 'bulletedList', 'numberedList', 'blockQuote', '|', 'Undo', 'Redo' ],
}

/**
 * @vue-prop {String} value 輸入富文本字串
 * @vue-prop {String} settings 輸入ckeditor設定物件，預設值詳見原始碼
 * @vue-prop {String} [editable=true] 輸入是否允許編輯，預設true
 */
export default {
    components: {
        'cceditor': CKEditor.component
    },
    props: {
        value: {
            type: String,
        },
        editor: {
            type: Object,
            default: function() {
                return window['ClassicEditor']
            }
        },
        settings: {
            type: Object,
            default: function() {
                return def_settings
            }
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
        }
    },
    mounted: function() {
    },
    computed: {
    },
    methods: {
    },
}
</script>

<style scoped>
::v-deep .ck-content {
    height:250px;
}
</style>
