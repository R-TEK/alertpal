# JavaScript Alerts

###### Version: 1.0.0

---

## Description:

This is a lightweight custom javascript alerts system to bring up an modal, either to notify the user or confirm a users action.

## How to use:

#### Code Application
```javascript
requestAlert(title, description, acceptRequest);
```

#### Parameters
- **title:**
    A string to define the title of the alert

- **description:**
    A string to define the description of the alert

- **acceptRequest:** _Optional_
    A function to run on accept. Optional because including this will make the alert a confirm-action alert, if not included them simple a notification.