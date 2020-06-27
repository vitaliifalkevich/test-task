import React, {useCallback, useMemo} from "react";

const Select = ({values, displayValue, name}: {values: string[], displayValue: string, name: string }) => {

    const onChangeSelect = useCallback((event): void => {
        console.log(event.target);
    }, []);

    const availableOptions = useMemo(() => {
        return values.map((item, idx) => {
            return(
                <li key={idx} className="select_option">
                    <input className="select_input" type="radio" name={name} id={item} onChange={onChangeSelect}/>
                    <label className="select_label" htmlFor={item}>{item}</label>
                </li>
            )
        })
    }, [values, name, onChangeSelect]);

    return(
        <ul className="select">
            <li>
                <input className="select_close" type="radio" name={name} id="select-close" value="" onChange={onChangeSelect}/>
                <span className="select_label select_label-placeholder">{displayValue}</span>
            </li>
            <li className="select_items">
                <input className="select_expand" type="radio" name={name} id="select-opener" onChange={onChangeSelect}/>
                <label className="select_closeLabel" htmlFor="select-close"/>
                <ul className="select_options">
                    {availableOptions}
                </ul>
                <label className="select_expandLabel" htmlFor="select-opener"/>
            </li>
        </ul>
    )
}

export default Select;