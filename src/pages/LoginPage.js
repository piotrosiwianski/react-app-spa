import React from 'react';


const LoginPage = () => {
    return ( 
        <div>
            <label htmlFor=''>Username<input type="text"/></label>
            <label htmlFor=''>Password<input type="password"/></label>
            <button>Sign in</button>
        </div>
     );
}
 
export default LoginPage;