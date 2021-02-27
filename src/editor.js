/*
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2021-02-26 10:28:48
 */
import {
  Component
} from 'react'
import Simditor from 'simditor';
import 'simditor/styles/simditor.css';

class RichEditor extends Component {



  componentDidMount() {

    this.richEditor();

  }

  richEditor() {

    let element = this.refs['editor'];

    let editor = new Simditor({

      textarea: element,
      toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'],
      pasteImage: true, //允许粘贴图片
      placeholder: '这里输入正文...',
      defaultImage: '/simditor/images/image.png',
      upload: {
        url: "http://localhost:8080/manage/category/upload?uploading=false&width=300",
        fileKey: 'file',
        params: null,
        leaveConfirm: '图片正在上传，确认要离开当前页面吗?',
        connectionCount: 1
      }

    });
    console.log(editor)

  }

  render() {

    return (
      <textarea ref = "editor"
      placeholder = "编辑器"
      autoFocus > 
        </textarea>
      )
    }

  }

  export default RichEditor;
