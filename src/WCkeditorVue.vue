<template>
    <div style="display:inline-block;" :changeHeight="changeHeight">

        <cceditor
            ref="edr"
            :editor="ClassicEditor"
            :config="useSettings"
            :value="value"
            :disabled="!editable"
            @input="function(v){$emit('input',v)}"
            @ready="onReady"
        ></cceditor>

    </div>
</template>

<script>
import get from 'lodash/get'
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh'
import CKEditor from '@ckeditor/ckeditor5-vue'


let def_settings = {
    language: 'zh',
    //toolbar: [ 'heading', '|', 'bold', 'italic', 'link', '|', 'subscript', 'superscript', '|', 'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify', '|', 'bulletedList', 'numberedList', 'blockQuote', '|', 'Undo', 'Redo' ],
}


/**
 * @vue-prop {String} [value=''] 輸入富文本字串，預設為''
 * @vue-prop {Object} [settings={}] 輸入quill設定物件，預設值詳見原始碼
 * @vue-prop {Number} [height=250] 輸入高度數字，單位為px，預設為250
 * @vue-prop {Boolean} [editable=true] 輸入是否允許編輯，預設true
 */
export default {
    components: {
        'cceditor': CKEditor.component
    },
    props: {
        value: {
            type: String,
            default: '',
        },
        settings: {
            type: Object,
            default: () => {},
        },
        height: {
            type: Number,
            default: 250,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            ClassicEditor: window['ClassicEditor'],
        }
    },
    computed: {

        useSettings: function() {
            //console.log('computed useSettings')

            let vo = this

            return {
                ...def_settings,
                ...vo.settings,
            }
        },

        changeHeight: function() {
            //console.log('computed changeHeight')

            let vo = this

            //height for trigger
            let height = vo.height
            vo.__heightTemp__ = height

            //updateHeight
            vo.updateHeight()

            return ''
        },

    },
    methods: {

        onReady: function() {
            //console.log('methods onReady')

            let vo = this

            //updateHeight
            vo.updateHeight()

        },

        getEditor: function() {
            //console.log('methods getEditor')

            let vo = this

            if (vo.$refs.edr) {
                return vo.$refs.edr.instance
            }
            return null
        },

        updateHeight: function() {
            //console.log('methods updateHeight')

            let vo = this

            vo.$nextTick(() => {

                //editor
                let editor = vo.getEditor()

                //ele
                let eleContent = get(editor, 'ui.view.editable.element') //可編輯區是element已通過v-deep設為100%
                let ele = get(eleContent, 'parentNode') //要把height設定至父層的高度才能響應調整

                //update height
                if (editor && ele) {
                    ele.style.height = vo.height + 'px'
                }

            })

        },

    },
}
</script>

<style scoped>
::v-deep .ck-content {
    height:100%;
}
</style>
