        // Get the burger and navigation elements
        const burger = document.getElementById('burger');
        const topNavigation = document.getElementById('topNavigation');

        // Add click event listener to the burger icon
        burger.addEventListener('click', () => {
            // Toggle the display of the navigation menu
                alert("gavo");
                topNavigation.style.display = 'flex'; // Show the menu as a vertical list
                // topNavigation.style.flex-direction: 'column';
                // topNavigation.style.position: 'absolute';
                // topNavigation.style.top: '50px';
                // topNavigation.style.left: '0';

                // topNavigation.style.display = 'none'; 

        });