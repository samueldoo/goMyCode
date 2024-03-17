


const Card = ({name, age, gender, occupation, city}) => {

    return (
        <div className="border-2 border-blue flex flex-col items-center justify-center">
            <h1 className="text-2xl">{name}</h1>
            <h2 className="">{age}</h2>
            <h3>{gender}</h3>
            <p>{occupation}</p>
            <p>{city}</p>
            {}
        </div>
    )
}
export default Card