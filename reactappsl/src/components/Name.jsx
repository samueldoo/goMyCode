import Card from "./Card";

const Name = () => {
    let firstName = 23;
    let lastName = 15;
    const arr = [
        {
          name: "John Doe",
          age: 30,
          gender: "Male",
          occupation: "Engineer",
          city: "New York",
        },
        {
          name: "Jane Smith",
          age: 28,
          gender: "Female",
          occupation: "Doctor",
          city: "Los Angeles",
        },
        {
          name: "Robert Johnson",
          age: 35,
          gender: "Male",
          occupation: "Teacher",
          city: "Chicago",
        }
        // Add more objects with human details as needed
      ];
    const addNum = (a,b) => {
        return (
            a + b
        )
    }
    console.log(addNum(firstName, lastName))

    return (
        <>
        <div>
            <p>{`${lastName} ${firstName}`}</p>
            <p>{addNum(lastName, firstName)}</p>
        </div>
        <div>
            {arr.map((item, index)=>(
                <Card name = {item.name} age={item.age} gender={item.gender} occupation={item.occupation} city={item.occupation} key={index} />
            ))}
        </div>
        </>
    )
}
export default Name
