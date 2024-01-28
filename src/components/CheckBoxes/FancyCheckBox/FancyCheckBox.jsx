import "./FancyCheckBox.scss"

export function FancyCheckBox(props) {
    const {
        checked,
        value,
        onChange,
    } = props;

    return (
        <div className="fancy-checkbox">
            <input type="checkbox" id="_checkbox" onChange={onChange}/>
                <label htmlFor="_checkbox">
                    <div id="tick_mark"></div>
                </label>
        </div>
    )
}