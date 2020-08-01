<p align="center">
    <b>AlertPal, a lightweight JavaScript alerts system, offering regular alerts, confirm dialogs, and side messages/notifications.</b>
</p>

<p align="center">
    <a href="https://github.com/R-TEK/alertpal/blob/master/LICENSE">
        <img src="https://badgen.net/github/license/R-TEK/alertpal?color=ff0000" alt="license" />
    </a>
    <a href="https://github.com/R-TEK/alertpal/graphs/contributors">
        <img src="https://badgen.net/badge/maintained/Yes?color=008c17" alt="maintained" />
    </a>
    <a href="https://www.npmjs.com/package/@r-tek/alertpal">
        <img src="https://badgen.net/npm/v/@r-tek/alertpal?color=7000c5" alt="version" />
    </a>
    <a href="https://bundlephobia.com/result?p=@r-tek/alertpal@2.0.0">
        <img src="https://badgen.net/bundlephobia/minzip/@r-tek/alertpal?color=158fcc" alt="minzip size" />
    </a>
    <a href="https://lgtm.com/projects/g/R-TEK/alertpal/context:javascript">
        <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/R-TEK/alertpal.svg?logo=lgtm&logoWidth=18" alt="lgtm code quality" />
    </a>
</p>

<br/>

---

### Features:

-   Features simple alert pop-ups, confirm dialouges and a larger modal
-   Includes messages that slide in from the top right corner of the screen, which can be styled as Error messages, Success messages and more (See below for details)
-   Choose from a Light and Dark CSS file
-   Modern and responsive flat designs
-   ~1kb file size, meaning a fast component for any application
-   Works on all major browsers (tested on Chrome, Firefox, Edge and more)

### Examples:

-   https://r-tek.github.io/alertpal/get-started.html
-   https://codepen.io/TEK-Projects/pen/XWXvNKP

### Getting Started:

###### Installation

-   Install with NPM:

    ```shell
    $ npm i @r-tek/alertpal
    ```

    If you are using a bundler like Webpack, you can import the module:

    ```javascript
    // ES6
    import alertpal from '@r-tek/alertpal';

    // OR

    // CommonJs
    const alertpal = require('@r-tek/alertpal');
    ```

    For now, you'll need to bring in the CSS file through one of the methods below.

<br />

-   Using the CDN via JsDelivr:

    ```html
    <script>
    	type="text/javascript" src="https://cdn.jsdelivr.net/npm/@r-tek/alertpal@2.0.0/build/alertpal.min.js"
    </script>
    ```

    Light-mode CSS File:

    ```html
    <link
    	rel="stylesheet"
    	type="text/css"
    	href="https://cdn.jsdelivr.net/npm/@r-tek/alertpal@2.0.0/build/alertpal_light.min.css"
    />
    ```

    Dark-mode CSS File:

    ```html
    <link
    	rel="stylesheet"
    	type="text/css"
    	href="https://cdn.jsdelivr.net/npm/@r-tek/alertpal@2.0.0/build/alertpal_dark.min.css"
    />
    ```

<br />

-   Alternatively, you could clone/download the repository. Under the /build directory, include the `alertpal.min.js` and, either the `alertpal_light.min.css` or `alertpal_dark.min.css` in your project.

###### Usage

```html
<!-- This will be used to trigger the alert -->

<button id="myButton">Trigger Alert</button>

<script type="text/javascript">
	/*
	 * In most cases, calling the alert will require you pass a parameter
	 * The parameter will be be an object of optional properties
	 * These are different for each type of alert
	 * See the link below this code block for the API
	 */

	// Here I define the object
	const objectParam = {
	    title: 'My Alert',
	    description: 'This is my alert pop-up'
	    cancel: 'OK'
	};

	/*
	 * Below I then call the method on the Alertpal Object to create an alert
	 * I pass my object as the parameter
	 */

	Alertpal.alert(objectParam);
</script>
```

### Types of Alerts:

###### Simple Alert

![Simple Alert](./assets/img/simple_alert.png)

###### Confirm Dialog

![Confirm Dialog](./assets/img/confirm_dialog.png)

###### Modal

![Modal](./assets/img/modal.png)

###### Message

![Normal](./assets/img/message_normal.png)
![Success](./assets/img/message_success.png)
![Warn](./assets/img/message_warn.png)
![Error](./assets/img/message_error.png)

### API Information:

For full documentation on how to use the AlertPal function, follow the link belw to the AlertPal API:

https://r-tek.github.io/alertpal/documentation.html

### Changelog:

You can check out the changelog for information on the latest updates here:

https://github.com/R-TEK/alertpal/blob/master/CHANGELOG.md

### Contribution:

Read the contribution files for details on developing with the project. You can find the file here:

https://github.com/R-TEK/alertpal/blob/master/CONTRIBUTING.md

You can also contribute by issuing any bugs you have found or ideas for new features/optimizations to improve the component. You can do this by going to the [issues](https://github.com/R-TEK/alertpal/issues) page and posting your bug / feature. Once I have read the issue, I'll add it to a [Trello](https://trello.com/b/LYLtyuFd) road map. With the road map you can vote for items I have added if you like that feature too, and you can view what has been accepted/rejected, what I'm working on and what has been completed.

### License:

The MIT License - see the link below for more details:

https://github.com/R-TEK/alertpal/blob/master/LICENSE

---

&copy; [R-TEK](https://github.com/R-TEK)
