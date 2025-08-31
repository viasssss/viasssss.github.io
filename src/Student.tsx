import { FC } from 'react';

interface StudentProps {
    name?: string;
    age?: number;
    isStudent?: boolean;
}

const Student: FC<StudentProps> = ({ 
    name = "Unknown", 
    age = 0, 
    isStudent = false 
}) => {
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Student: {isStudent ? "Yes" : "No"}</p> 
        </div>
    );
}

export default Student