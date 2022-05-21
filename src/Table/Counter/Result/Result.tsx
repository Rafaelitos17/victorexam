import React, {useState} from 'react';
import s from './Result.module.css'
import {Counter} from "../Counter";

type ResultType = {
    resultNum: number
    counterNum: () => void
    removeNum: () => void
}

export const Result: React.FC<ResultType> = (props) =>
{
    const style = `${s.result} ${props.resultNum > 4 ? s.resultIsDone : ''}`
    return (
        <>
            <div className={style}>
                <span>{props.resultNum}</span>
            </div>
            <Counter resultNum={props.resultNum}
                     counterNum={props.counterNum}
                     removeNum={props.removeNum}
            />
        </>
    );
};
