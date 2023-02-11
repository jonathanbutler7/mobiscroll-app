import React from "react";
import { Eventcalendar, getJson, toast } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.react.min.css";

function App() {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      "https://trial.mobiscroll.com/events/?vers=5",
      (events) => {
        setEvents(events);
      },
      "jsonp"
    );
  }, []);
  const onEventClick = React.useCallback((event) => {
    toast({ message: event.event.title });
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: { type: "month" },
      agenda: { type: "month" },
    };
  }, []);

  return (
    <>
      <Eventcalendar
        theme=" windows-dark"
        themeVariant="dark"
        clickToCreate={false}
        dragToCreate={false}
        dragToMove={false}
        dragToResize={false}
        eventDelete={false}
        data={myEvents}
        // data={stuff}
        // view={view}
        onEventClick={onEventClick}
      />
    </>
  );
}

export default App;
