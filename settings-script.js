document.addEventListener('DOMContentLoaded', () => {
    const emailNotifications = document.getElementById('emailNotifications');
    const pushNotifications = document.getElementById('pushNotifications');
    const upiEnabled = document.getElementById('upiEnabled');
    const themeSelect = document.getElementById('themeSelect');
    const languageSelect = document.getElementById('languageSelect');
    const saveButton = document.getElementById('saveButton');


    // Load saved settings (placeholder)
    const savedEmail = localStorage.getItem('emailNotifications') === 'true';
    const savedPush = localStorage.getItem('pushNotifications') === 'true';
    const savedUpi = localStorage.getItem('upiEnabled') === 'true';
    const savedTheme = localStorage.getItem('selectedTheme');
    const savedLanguage = localStorage.getItem('selectedLanguage');

    if (savedEmail) emailNotifications.checked = true;
    if (savedPush) pushNotifications.checked = true;
    if (savedUpi) upiEnabled.checked = true;
    if (savedTheme) themeSelect.value = savedTheme;
    if(savedLanguage) languageSelect.value=savedLanguage;


    saveButton.addEventListener('click', () => {
        // Save settings (placeholder)
        localStorage.setItem('emailNotifications', emailNotifications.checked);
        localStorage.setItem('pushNotifications', pushNotifications.checked);
        localStorage.setItem('upiEnabled', upiEnabled.checked);
        localStorage.setItem('selectedTheme', themeSelect.value);
        localStorage.setItem('selectedLanguage', languageSelect.value);


         alert('Settings saved!');

         // You would typically send these updates to a server
         console.log("Saved Settings",
          {
              emailNotifications : emailNotifications.checked,
              pushNotifications: pushNotifications.checked,
              upiEnabled : upiEnabled.checked,
              themeSelect:themeSelect.value,
              languageSelect:languageSelect.value
            });

    });
});