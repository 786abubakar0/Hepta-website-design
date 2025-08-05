function toggle(){
            var element=document.getElementById("menu-page");
            var display_property = document.getElementById("menu-page").style.display;
            console.log(display_property);
            if(display_property=="flex"){
                document.getElementById("menu-page").style.display="none";
                document.getElementById("main-container").style.display="flex"

            }
            else{
                document.getElementById("menu-page").style.display="flex";
                document.getElementById("main-container").style.display="none"
            }
        }



        window.addEventListener('load', () => {
            document.getElementById("spinner").style.display = "none";
            document.getElementById("main-container").style.display= "flex";
    // Select all elements that should be animated on scroll
    const animatedElements = document.querySelectorAll('.animate-me');
    const animatedElements2 = document.querySelectorAll('.animate-me2');
    const animatedElements3 = document.querySelectorAll('.animate-me3');


    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.01 // Trigger when 20% of the element is visible
    };

    // Callback function when an observed element's visibility changes
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is now in the viewport
                entry.target.classList.add('active1'); // Add the class to trigger animation
                observer.unobserve(entry.target); // Stop observing once animated (optional)
            }
        });
    };

       // Callback function when an observed element's visibility changes
    const observerCallback2 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is now in the viewport
                entry.target.classList.add('active2'); // Add the class to trigger animation
                observer.unobserve(entry.target); // Stop observing once animated (optional)
            }
        });
    };

      // Callback function when an observed element's visibility changes
    const observerCallback3 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is now in the viewport
                entry.target.classList.add('active3'); // Add the class to trigger animation
                observer.unobserve(entry.target); // Stop observing once animated (optional)
            }
        });
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const observer2 = new IntersectionObserver(observerCallback2, observerOptions);
    const observer3 = new IntersectionObserver(observerCallback3, observerOptions);
    
    // Observe each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });

      // Observe each animated element
    animatedElements2.forEach(element => {
        observer2.observe(element);
    });

      // Observe each animated element
    animatedElements3.forEach(element => {
        observer3.observe(element);
    });
});