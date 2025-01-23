function Food() {

    const food1 = 'Rice';
    const food2 = 'Beans';

    return(      
        <>
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li>
        </ul>
        </>
    );
}

export default Food