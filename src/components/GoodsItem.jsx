export function GoodItem(props) {
    const { id, name, description, price, full_background, addToBasket } = props
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={full_background} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    onClick={() => {
                        const data = {
                            id,
                            name,
                            price,
                        }
                        addToBasket(data)
                    }}
                    className='btn'
                >
                    Купить
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {price} руб
                </span>
            </div>
        </div>
    )
}
