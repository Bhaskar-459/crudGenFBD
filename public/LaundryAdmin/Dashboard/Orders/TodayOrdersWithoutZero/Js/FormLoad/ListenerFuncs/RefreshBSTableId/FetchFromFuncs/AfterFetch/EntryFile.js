
let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;
    console.log("LocalDataToShow:",LocalDataToShow);
    let LocalFilterData = LocalDataToShow.filter(e => e.DataCount !== 0)

    let LocalmodifiedData = jFLocalShowDateDiffInMinSec({ inData: LocalFilterData });

    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    jFLocalHideSpinner();
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalmodifiedData,
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalShowDateDiffInMinSec = ({ inData }) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.SentInterVal = ""
        element.OrderDate = ""
        if ((element.todayFastOrder === "") === false) {
            console.log("element---",element.todayFastOrder);
            element.SentInterVal = jFLocalKInterval({ inCurrentdateandtime: element.todayFastOrder.OrderData.Currentdateandtime });
            element.OrderDate = element.todayFastOrder.OrderData.Currentdateandtime;
            return element;
        };
        return element;
    });
    return jVarLocalReturnArray;
};

let jFLocalKInterval = ({ inCurrentdateandtime }) => {
    if (inCurrentdateandtime === undefined) {
        return "";
    }
    var diffMs = (new Date() - new Date(inCurrentdateandtime)); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...";

    // console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...");
};


export { StartFunc }