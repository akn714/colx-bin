import './App.css'

import { Template } from './components/template/Template'

import { Home } from './components/Home/Home'

import { Olx } from './components/olx/Olx'
import { Buy } from './components/olx/Buy/Buy'
import { Sell } from './components/olx/Sell/Sell'

import { LostAndFound } from './components/LostAndFound/LostAndFound'
import { Lost_and_Found } from './components/LostAndFound/lost_and_found/Lost_and_found'
import { Post_found } from './components/LostAndFound/post_found/Post_found'
import { Post_lost } from './components/LostAndFound/post_lost/Post_lost'

import { Complaints } from './components/Complaints/Complaints'
import { Complaint_items } from './components/Complaints/complaints/Complaint_items'
import { Post_complaints } from './components/Complaints/post_complaint/Post_complaint'

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="" element={ <Template title='Colx' isHome={true} /> }>
                <Route path="" element={
                    <>
                        <Home />
                    </>
                } />
            </Route>
            <Route path="olx" element={ <Template title='olx' /> }>
                <Route path="buy" element={ <Olx selected='buy' /> }>
                    <Route path="" element={
                        <>
                            <Buy />
                        </>
                    } />
                </Route>
                <Route path="sell" element={ <Olx selected='sell' /> }>
                    <Route path="" element={
                        <>
                            <Sell />
                        </>
                    } />
                </Route>
            </Route>
            <Route path="lost_and_found" element={ <Template title='Lost and Found' /> }>
                <Route path="lost_and_found" element={ <LostAndFound selected='lost_and_found' /> }>
                    <Route path="" element={
                        <>
                            <Lost_and_Found />
                        </>
                    } />
                </Route>
                <Route path="post_found" element={ <LostAndFound selected='post_found' /> }>
                    <Route path="" element={
                        <>
                            <Post_found />
                        </>
                    } />
                </Route>
                <Route path="post_lost" element={ <LostAndFound selected='post_lost' /> }>
                    <Route path="" element={
                        <>
                            <Post_lost />
                        </>
                    } />
                </Route>
            </Route>
            <Route path="complaints" element={ <Template title='Complaints' /> }>
                <Route path="complaints" element={ <Complaints selected='complaint_items' /> }>
                    <Route path="" element={
                        <>
                            <Complaint_items />
                        </>
                    } />
                </Route>
                <Route path="post_complaint" element={ <Complaints selected='post_complaint' /> }>
                    <Route path="" element={
                        <>
                            <Post_complaints />
                        </>
                    } />
                </Route>
            </Route>
        </Route>
    )
);


// const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export function App() {
    return (
        <div className="body">
            <RouterProvider router={router} />
        </div>
    );
}
