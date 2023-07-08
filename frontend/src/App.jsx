import './App.css'
import { Home } from './components/Home';

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn
} from "@clerk/clerk-react";


import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navigation />}>
            <Route index element={
                <>
                    <Home />
                    <Player songname='no song selected' artist='unknown' />
                </>
            } />
        </Route>
    )
);


const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export function App() {
    return (
        <div className="body">
            
            <ClerkProvider publishableKey={clerkPubKey}>
            {/* <img src="./app-poster.jpg" style="position: absolute;width: 100%;height: 100%;z-index: -2"/> */}
            {/* <img src="./app-poster.jpg" style={{"position":"fixed", "height":"100%", "zIndex":"-2"}}/> */}
            {/* <div>Welcome to AstroBeats!</div> */}
            {/* <Login /> */}
            {/* <Home /> */}
            {/* <Library /> */}
            {/* <SongList /> */}
            <RouterProvider router={router} />
            {/* <Navigation /> */}
                
            </ClerkProvider>
        </div>
    );
}
