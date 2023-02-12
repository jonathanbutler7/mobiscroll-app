import React from "react";
import {
  Eventcalendar,
  Datepicker,
  getJson,
  toast,
  createCustomTheme,
} from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.react.min.css";
createCustomTheme("kin-mobiscroll-theme", "windows", false);
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

  const [birthday, setBirthday] = React.useState(null);
  const onBirthdayChange = (ev) => {
    setBirthday(ev.value);
  };

  return (
    <>
      <Eventcalendar
        theme="windows"
        themeVariant="light"
        clickToCreate={false}
        dragToCreate={false}
        dragToMove={false}
        dragToResize={false}
        eventDelete={false}
        data={myEvents}
        onEventClick={onEventClick}
      />
      <Datepicker
        value={birthday}
        onChange={onBirthdayChange}
        label="When were you born?"
      />
      <Datepicker
        // theme="ios"
        themeVariant="light"
        value={birthday}
        onChange={onBirthdayChange}
        label="When were you born?"
      />
    </>
  );
}

export default App;
