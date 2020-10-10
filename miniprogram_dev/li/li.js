import OnekitPage from '../baidu2weixin/OnekitPage';
import swan from '../baidu2weixin/swan';
const INIT_CONTENT_HTML = `
    <p>支持插入图片</p>
    <br>
    <p>
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/editor-image-demo.png" data-custom="id=abcd&amp;role=god" alt="image-alt" class="imageCls" width="100%">
    </p>
    <hr>
    <p>支持以下字符样式</p>
    <p>
        <b>bold粗体</b>
        <em>italic斜体</em>
        <u>underline下划线</u>
    </p>
    <p>
        <sub>sub下标</sub>
        <sup>super上标</sup>
    </p>
    <hr>
    <p>支持以下列表样式</p>
    <ol>
        <li>有序列表</li>
        <li>有序列表</li>
    </ol>
    <ul>
        <li>无序列表</li>
    </ul>
    <ul>
        <li>无序列表</li>
    </ul>
    <ul data-checked="true">
        <li>选框列表</li>
    </ul>
    <ul data-checked="false">
        <li>选框列表</li>
    </ul>
    <hr>
    <p>支持以下字符大小</p>
    <h1>H1 一级标题</h1>
    <h2>H2 二级标题</h2>
    <h3>H3 三级标题</h3>
    <h4>H4 四级标题</h4>
    <h5>H5 五级标题</h5>
    <h6>H6 六级标题</h6>
    <hr>
    <p>支持以下对齐方式</p>
    <p style="text-align:center">center中间对齐</p>
    <p style="text-align:right">right 右对齐</p>
    <p style="text-align:justify">justify 自动对齐</p>
    <hr>
    <span style="color:#00bc89;background-color:#333">color 支持设置字体及背景颜色</span>`;
OnekitPage({
    data:{
        formats:{}
    },
    onEditorReady:function(){
        this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editorId');
        this.initContent();
    },
    initContent:function(){
        this.editorCtx.setContents({
        html:INIT_CONTENT_HTML
    });
    },
    insertImage:function(){
        const editorCtx = this.editorCtx;
        swan.chooseImage({
        count:1,
        success:(res)=>{editorCtx.insertImage({
            src:res.tempFilePaths[0],
            alt:'插入图片',
            data:{
                id:'insert-image',
                role:'user'
            },
            success:()=>{swan.showToast({
                title:'插入图片成功'
            })},
            fail:(err)=>{swan.showToast({
                title:'插入图片失败',
                icon:'none'
            })}
        })}
    });
    },
    format:function(e){
        const {name,value} = e.target.dataset;
        if(!name){
        return;
    }
        this.editorCtx.format(name,value);
    },
    onStatusChange:function(e){
        const formats = e.detail;
        this.setData({
        formats:formats
    });
    },
    insertDivider:function(){
        this.editorCtx.insertDivider();
    },
    clear:function(){
        const editorCtx = this.editorCtx;
        swan.showModal({
        title:'清空编辑器',
        content:'确定清空编辑器全部内容？',
        success:(res)=>{if(res.confirm){
            editorCtx.clear();
        }}
    });
    }
});
