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
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh'
import CKEditor from '@ckeditor/ckeditor5-vue'


//ckeditor5 需要用線上自選 plugins 打包: https://ckeditor.com/ckeditor-5/online-builder/
//手動選擇 plugins:
// Alignment
// Block quote
// Bold
// Font background color
// Font color
// Font size
// Heading
// Italic
// Link
// List
// List style
// Remove format
// Strikethrough
// Subscript
// Superscript
// Table
// Underline
// Table cell properties
// Table toolbar
// Table properties
//下載解壓縮後, 將 ckeditor.js 與 ckeditor.js.map 放置於 distCK 內, 打包時會再自動複製到 dist


let def_settings = {
    language: 'zh',
    toolbar: {
        items: [
            'heading',
            '|',
            'fontSize',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'subscript',
            'superscript',
            '|',
            'alignment',
            'bulletedList',
            'numberedList',
            '|',
            'insertTable',
            'blockQuote',
            'link',
            '|',
            'redo',
            'undo',
            '|',
            'removeFormat'
        ]
    },
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
    },
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

            //s
            let s = cloneDeep(def_settings)
            if (!isEmpty(vo.settings)) {
                s = cloneDeep(vo.settings)
            }

            return s
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

        // isObjEmpty: function(obj) {
        //     return Object.keys(obj).length === 0 && obj.constructor === Object
        // },

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
