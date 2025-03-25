"use client";

import { useUserAuth} from './_util/auth-context.js';

export default function page() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    return (

        <main>
            <h1 className='text-3xl font-bold pb-3'>Shopping List App</h1>
            <p>
                {user ? (
                    
                    <button onClick={firebaseSignOut}>Sign Out</button>
                ) : (
                    <button onClick={gitHubSignIn}>Sign In with GitHub</button>

                )}
            </p>
            {user && <p>Signed In as {user.displayName} ({user.email})</p>}
            {user && <a href="week-10/shopping-list">Continue to your Shopping List</a>}
        </main>
    )


}

