const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Prevent the default browser prompt
  const deferredPrompt = event; // Save the event for later use

  // Show the install button or perform any other UI changes to indicate that the app can be installed
  butInstall.style.display = 'block';

  // Implement a click event handler on the `butInstall` element
  butInstall.addEventListener('click', async () => {
    // Prompt the user to install the app
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    // Perform any necessary actions based on the user's choice
    if (outcome === 'accepted') {
      console.log('The app was installed.');
    } else {
      console.log('The app installation was declined.');
    }

    // Clear the deferredPrompt variable
    deferredPrompt = null;
  });
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('The app was installed successfully.');
  // Perform any necessary actions after the app is installed
});
