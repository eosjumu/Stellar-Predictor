// ==UserScript==
// @name         Stellar Predictor
// @namespace    http://your.website.com
// @version      0.1
// @description  Best Predictor
// @author       xjumu
// @grant        none
// @match        *://*.bloxflip.com/*
// ==/UserScript==

(function() {
    'use strict';

    // URL of the GitHub raw file containing the credentials
    var credentialsURL = 'https://raw.githubusercontent.com/eosjumu/GjssFjxwwT/main/OsjfHxv.json';

    // Function to fetch credentials from GitHub
    async function fetchCredentials() {
        try {
            const response = await fetch(credentialsURL);
            if (!response.ok) {
                throw new Error('Failed to fetch credentials');
            }
            const credentials = await response.json();
            return credentials;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    // Function to create and display the login GUI
    async function createLoginGUI() {
        // Fetch credentials from GitHub
        var credentials = await fetchCredentials();

        // Create a div element for the login GUI
        var loginDiv = document.createElement('div');
        loginDiv.id = 'loginGUI';
        loginDiv.classList.add('glow-border'); // Add glow animation class
        loginDiv.style.position = 'fixed';
        loginDiv.style.left = '50%';
        loginDiv.style.top = '50%';
        loginDiv.style.transform = 'translate(-50%, -50%)'; // Center horizontally and vertically
        loginDiv.style.backgroundColor = 'black'; // Change background color to black
        loginDiv.style.padding = '20px';
        loginDiv.style.border = 'none'; // Remove solid border
        loginDiv.style.zIndex = '9999';
        loginDiv.style.width = '600px'; // Set width to 550 pixels
        loginDiv.style.height = '400px'; // Set height to 400 pixels
        loginDiv.style.transition = 'opacity 0.5s ease'; // Add transition for opacity
        loginDiv.style.borderRadius = '20px'; // Add rounded corners

        // Append the login GUI div to the document body
        document.body.appendChild(loginDiv);

        // Add wrapper div for logo and text input container
        var wrapperDiv = document.createElement('div');
        wrapperDiv.style.position = 'relative';
        loginDiv.appendChild(wrapperDiv);

        // Add image logo container
        var logoContainer = document.createElement('div');
        logoContainer.style.position = 'absolute'; // Change position to absolute
        logoContainer.style.left = '20px'; // Adjust left position as needed
        logoContainer.style.top = '50%';
        logoContainer.style.transform = 'translateY(-50%)'; // Center vertically
        loginDiv.appendChild(logoContainer);

        // Add image logo
        var logoImg = document.createElement('img');
        logoImg.src = 'https://media.discordapp.net/attachments/977979553207185428/1202158514978426891/stellar2-removebg-preview.png?ex=65cc705c&is=65b9fb5c&hm=97e12d9cbdd35356445737153290edb5455bd9fd1ca7a921d60c552425cc374d&=&format=webp&quality=lossless'; // Logo URL
        logoImg.style.width = '250px'; // Adjust the width of the logo as needed
        logoImg.style.marginLeft = '25px';
        logoImg.style.animation = 'spin 3s linear infinite';

        logoContainer.appendChild(logoImg);

        // Add text and input container
        var textInputContainer = document.createElement('div');
        textInputContainer.style.textAlign = 'right'; // Align text to the right
        textInputContainer.style.marginRight = '25px';
        textInputContainer.style.marginTop = '35px';
        wrapperDiv.appendChild(textInputContainer);

        // Add text and inputs to the container
        textInputContainer.innerHTML += `
            <span style="color: purple; font-size: 26px; font-family: monospace;">Stellar</span> 
            <span style="color: white; font-size: 24px; font-family: monospace;">Predictor</span><br><br>
            <div style="display: flex; flex-direction: column; align-items: flex-end;">
                <input type="text" id="username" placeholder="Username" style="margin-bottom: 8px; font-size: 18px; border: 3px solid black; border-radius: 10px; padding: 5px; box-shadow: inset 0 0 10px rgba(128,0,128,0.5); font-family: monospace; animation: glow2 1.5s infinite;"><br>
                <input type="password" id="password" placeholder="Password" style="margin-bottom: 8px; font-size: 18px; border: 3px solid black; border-radius: 10px; padding: 5px; box-shadow: inset 0 0 10px rgba(128,0,128,0.5); font-family: monospace; animation: glow2 1.5s infinite;"><br>
            </div>
            <button id="loginBtn" style="border: 0px; font-size: 24px; padding: 10px 63px; font-family: monospace; background-color: rgb(54, 171, 46); animation: glow 1.5s infinite; margin-right: 3px;">Sign In</button>
        `;

        // CSS for spinning animation
        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `;
        document.getElementsByTagName('head')[0].appendChild(style);

        // CSS for glowing animation
        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes glow {
                0% {
                    box-shadow: 0 0 10px rgb(54, 171, 46);
                }
                50% {
                    box-shadow: 0 0 20px rgb(54, 171, 46);
                }
                80% {
                    box-shadow: 0 0 10px rgb(54, 171, 46);
                }
            }
        `;
        document.getElementsByTagName('head')[0].appendChild(style);

        // CSS for glowing animation
        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes glow2 {
                0% {
                    box-shadow: 0 0 10px rgba(128,0,128,0.5);
                }
                50% {
                    box-shadow: 0 0 20px rgba(255,0,255,0.7);
                }
                100% {
                    box-shadow: 0 0 10px rgba(128,0,128,0.5);
                }
            }
        `;
        document.getElementsByTagName('head')[0].appendChild(style);

        // Function to handle login button click event
        document.getElementById('loginBtn').addEventListener('click', function() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            // Check if the entered username and password match any of the credentials
            var isValidCredentials = credentials.some(function(credential) {
                return credential.username === username && credential.password === password;
            });
            // If the entered credentials are valid, proceed to main GUI
            if (isValidCredentials) {
                // Remove login GUI
                loginDiv.style.opacity = '0';
                setTimeout(function() {
                    loginDiv.style.display = 'none';
                }, 500); // Wait for opacity transition duration (0.5s)

                // Call function to create and display the main GUI
                createGUI();
            } else {
                // Display error message (authentication failed)
                alert('Invalid username or password. Please try again.');
            }
        });

    }

    // Call the createLoginGUI function when the page loads
    createLoginGUI();

    // Function to create and display the main GUI
    function createGUI() {
        // Create a div element for the main GUI
        var guiDiv = document.createElement('div');
        guiDiv.id = 'bloxflipGUI';
        guiDiv.classList.add('glow-border'); // Add glow animation class
        guiDiv.style.position = 'fixed';
        guiDiv.style.left = '50%';
        guiDiv.style.top = '50%';
        guiDiv.style.transform = 'translate(-50%, -50%)'; // Center horizontally and vertically
        guiDiv.style.backgroundColor = 'black'; // Change background color to black
        guiDiv.style.padding = '20px';
        guiDiv.style.border = 'none'; // Remove default border
        guiDiv.style.zIndex = '9999';
        guiDiv.style.width = '600px'; // Set width to 550 pixels
        guiDiv.style.height = '400px'; // Set height to 400 pixels
        guiDiv.style.transition = 'opacity 0.5s ease'; // Add transition for opacity
        guiDiv.style.borderRadius = '20px'; // Add rounded corners

        // Append the main GUI div to the document body
        document.body.appendChild(guiDiv);

        // Function to toggle GUI visibility
        function toggleGUI() {
            if (guiDiv.style.opacity === '0') {
                guiDiv.style.opacity = '0.1'; // Set opacity to low value
                guiDiv.style.display = 'block'; // Ensure GUI is visible
                setTimeout(function() {
                    guiDiv.style.opacity = '1'; // Gradually increase opacity
                }, 50); // Increase opacity every 50ms
            } else {
                guiDiv.style.opacity = '0'; // Set opacity to fully transparent
                setTimeout(function() {
                    guiDiv.style.display = 'none'; // Hide GUI after opacity transition
                }, 500); // Wait for opacity transition duration (0.5s)
            }
        }

        // Event listener to hide/show GUI when 'INSERT' key is pressed
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Insert') {
                toggleGUI();
            }
        });

        // Event listener to remove cursor style when hovering over GUI
        guiDiv.addEventListener('mouseover', function() {
            guiDiv.style.cursor = 'default';
        });

        // Event listener to restore cursor style when leaving GUI
        guiDiv.addEventListener('mouseout', function() {
            guiDiv.style.cursor = 'move';
        });

        // Add event listeners for mouse events to make the GUI draggable with Shift key
        var isDragging = false;
        var offsetX, offsetY;
        function handleMouseDown(event) {
            if (event.shiftKey) {
                isDragging = true;
                offsetX = event.clientX - guiDiv.getBoundingClientRect().left;
                offsetY = event.clientY - guiDiv.getBoundingClientRect().top;
            }
        }
        function handleMouseMove(event) {
            if (isDragging) {
                var newX = event.clientX - offsetX;
                var newY = event.clientY - offsetY;
                guiDiv.style.left = newX + 'px';
                guiDiv.style.top = newY + 'px';
            }
        }
        function handleMouseUp(event) {
            isDragging = false;
        }
        guiDiv.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    // Add animation keyframes for glowing and pulsating border with color transition
    var style = document.createElement('style');
    style.innerHTML = `
        @keyframes glowPulse {
            0% {
                box-shadow: 0 0 20px 10px rgba(128,0,128,0.5);
            }
            50% {
                box-shadow: 0 0 40px 20px rgba(255,0,255,0.7);
            }
            80% {
                box-shadow: 0 0 20px 10px rgba(128,0,128,0.5);
            }
        }
        #loginGUI.glow-border, #bloxflipGUI.glow-border {
            animation: glowPulse 3s infinite alternate, colorChange 6s infinite;
        }
        @keyframes colorChange {
            0% {
                border-color: purple;
            }
            50% {
                border-color: pink;
            }
            100% {
                border-color: purple;
            }
        }
    `;
    document.getElementsByTagName('head')[0].appendChild(style);
})();
