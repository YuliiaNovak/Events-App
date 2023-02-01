import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";
import { loadEvents } from "./loadEvents";

function EventsPage() {
   const { events } = useLoaderData();

   return (
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
         <Await resolve={events}>
            {(loadedEvents) => <EventsList events={loadedEvents} />}
         </Await>
      </Suspense>
   );
}

export default EventsPage;

export function loader() {
   return defer({
      events: loadEvents(),
   });
}
