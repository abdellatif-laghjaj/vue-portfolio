const theme_items = document.querySelectorAll('.theme-item');

theme_items.forEach((theme) => {
    theme.addEventListener("click", (e) => {
        //remove all active classes
        theme_items.forEach((theme) => {
            theme.classList.remove('outline');
            theme.classList.remove('outline-2');
        });

        //add active class to clicked theme
        e.target.closest('.theme-item').classList.add('outline');
        e.target.closest('.theme-item').classList.add('outline-2');
        const theme = e.target.closest('.theme-item').getAttribute('data-set-theme');
        console.log(theme);
        document.documentElement.setAttribute('data-theme', theme);
    });
});