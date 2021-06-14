import React, { useState } from 'react';

const Haha = () => {
    const [age, setAge] = useState(18);
    const [gender, setGender] = useState("male");
    const [career, setCarrer] = useState("developer");

    return ( 
        <div>
            <p>I am {age}</p> 
            <p>I am {gender}</p>
            <p>I am {career}</p>
      </div>
     );
}
 
export default Haha;