const List = ({items = [], loading = false}) => {
    return (
        <ul className={loading ? 'loading' : null}>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}

export default List
