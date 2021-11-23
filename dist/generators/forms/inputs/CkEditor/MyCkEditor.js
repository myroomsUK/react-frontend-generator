import { jsx as _jsx } from "react/jsx-runtime";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function ({ value, onChange }) {
    return _jsx(CKEditor, { editor: ClassicEditor, data: value, onChange: (event, editor) => {
            const data = editor.getData();
            onChange(data);
        } }, void 0);
}
