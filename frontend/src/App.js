import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage, {loader as eventsDetailsLoader, action as deleteEventAction} from "./pages/EventDetailPage";
import EventsPage from "./pages/EventsPage";
import NewEventPage, {action as newEventAction} from "./pages/NewEventPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import {loader as eventsLoader} from './pages/Events'
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage/>,
      children: [
         { index: true, element: <HomePage /> },
         {
            path: "events",
            element: <EventsRootLayout />,
            children: [
               {
                  index: true,
                  element: <EventsPage />,
                  loader: eventsLoader,
               },
               {
                  path: ':eventId',
                  id: 'event-detail',
                  loader: eventsDetailsLoader,
                  children: [
                     { 
                        index: true, 
                        element: <EventDetailPage />, 
                        action: deleteEventAction,
                     },
                     { path: "edit", element: <EditEventPage /> },
                  ]
               },
              
               { path: "new", element: <NewEventPage />, action: newEventAction},
            ],
         },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
