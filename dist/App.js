import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import Test from "./Test";
import { CookiesProvider } from "react-cookie";
function App() {
    return _jsx(CookiesProvider, { children: _jsx(Test, {}, void 0) }, void 0);
}
export default App;
