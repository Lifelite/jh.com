import cx from 'classnames'

export default function Button(props) {
    const {
        children,
        type,
    } = props


    return (
        <button className={cx(type)}></button>
    )
}
