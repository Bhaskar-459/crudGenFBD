import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";

const StartFunc = () => {
    let jVarLocalQrCodeButtonClass = document.getElementsByClassName("DeleteClass");
    console.log("inEvent");

    for (var i = 0; i < jVarLocalQrCodeButtonClass.length; i++) {
        jVarLocalQrCodeButtonClass[i].addEventListener("click", async (event) => StartFuncFetchFunc({ inEvent: event }));
    };
};

export { StartFunc };