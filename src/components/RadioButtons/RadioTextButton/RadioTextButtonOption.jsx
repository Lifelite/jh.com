export const RadioTextButtonOption = () => {
    return (
        <>
            <input type="radio" name="select" id="option-1" checked/>
            <input type="radio" name="select" id="option-2"/>
            <label htmlFor="option-1" className="option option-1">
                <div className="dot"></div>
                <span>Student</span>
            </label>
            <label htmlFor="option-2" className="option option-2">
                <div className="dot"></div>
                <span>Teacher</span>
            </label>
        </>
    )
}