function checkNotificationPermission() {
  if (Notification.permission === "granted") {
    console.log("Notifications are allowed. You'll receive updates.");
    notify("New Update", "There is a new update available.");
  } else if (Notification.permission === "denied") {
    console.log("Notifications are not allowed. You won't receive updates.");
  } else {
    Notification.requestPermission().then(function(permission) {
      if (permission === "granted") {
        console.log("Notifications are allowed. You'll receive updates.");
        notify("New Update", "There is a new update available.");
      } else {
        console.log("Notifications are not allowed. You won't receive updates.");
      }
    });
  }
}

function notify(title, body) {
  if (Notification.permission === "granted") {
    var notification = new Notification(title, { body: body });
  }
}

checkNotificationPermission();
