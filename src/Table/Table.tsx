import React from 'react';
import s from './Table.module.css'
import {Result} from "./Counter/Result/Result";

type TableType = {
    resultNum: number
    counterNum: () => void
    removeNum: () => void
}

export const Table:React.FC<TableType> = (props) => {
    return (
        <div className={s.table}>
            <Result
                resultNum={props.resultNum}
                counterNum={props.counterNum}
                removeNum={props.removeNum}
            />
        </div>
    );
};
