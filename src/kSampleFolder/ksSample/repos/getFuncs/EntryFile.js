import {
    GetFunc as GetFuncDal, GetDataOnlyFunc as GetDataOnlyFuncDal,
    GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncDal,
    GetFromModalFunc as GetFromModalFuncDal,
    GetIdFunc as GetIdFuncDal, GetBodyCheckFunc as GetBodyCheckFuncDal,
    GetRowDataFunc as GetRowDataFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = async () => {
    return GetFuncDal();
};

let GetDataOnlyFunc = async () => {
    return GetDataOnlyFuncDal();
};

let GetIdFunc = ({ inId }) => {
    return GetIdFuncDal({ inId });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

let GetFromModalFunc = () => {
    return GetFromModalFuncDal();
};

let GetFromModalUuidFunc = () => {
    return GetFromModalUuidFuncDal();
};

let GetFromModalUuidAndTSFunc = () => {
    return GetFromModalUuidAndTSFuncDal();
};

let GetBodyCheckFunc = async () => {
    return GetBodyCheckFuncDal();
};

let GetRowCountFunc = async () => {
    return GetFuncDal();
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc, GetBodyCheckFunc, GetRowCountFunc,GetRowDataFunc
};