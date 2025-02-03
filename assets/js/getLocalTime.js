function getLocalTime(dateInput) {
      const date = new Date(dateInput);
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      };
      return date.toLocaleTimeString("en-US", options) + " in your time zone " + date.toLocaleTimeString([], { timeZoneName: "short" });
    }