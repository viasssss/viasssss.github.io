import { FC } from 'react';

interface UserGreetingProps {
    isLoggedIn?: boolean;
    username?: string;
}

// const UserGreeting: FC<UserGreetingProps> = ({ 
//     isLoggedIn = false, 
//     username = 'Guest' 
// }) => {
//     if (isLoggedIn) {
//         return <h1 className="welcome-message">Welcome back, {username}!</h1>;
//     }
//     else {
//         return <h1 className="signup">Please sign up.</h1>;
//     }
// }


const UserGreeting = ({isLoggedIn, username}:UserGreetingProps) =>{
    if (isLoggedIn) {
        return <h1 className="welcome-message">Welcome back, {username}!</h1>;
    }
    else {
        return <h1 className="signup">Please sign up.</h1>;
    }
}

export default UserGreeting;