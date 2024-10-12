// JavaScript to display volunteer opportunities based on selected interest
const opportunities = {
    // Medicine
    "TMH Volunteer Program": [
        { role: "Medical Assistant", interest: "Medicine", url: "https://www.tmh.org/about-tmh/volunteer-opportunities" }
    ],
    "One Heart For All (Chiles High School)": [
        { role: "Spread Awareness at Heart Disease", interest: "Medicine", url: "https://www.instagram.com/ohfa.1/?igsh=MWhsajh6YmI3bWxkeQ%3D%3D" }
    ],
  

    // Technology
    "The Plant": [
        { role: "Variety of options", interest: "Technology", url: "https://leoncountyfl.galaxydigital.com/need/detail/?need_id=882462" }
    ],
    "STEM4GIRLS": [
        { role: "Learn about STEM and leadership", interest: "Technology", url: "https://leoncountyfl.galaxydigital.com/need/detail/?need_id=636890" }
    ],
    "Leon County Library System-Main & Branches": [
        { role: "Information Assistant", interest: "Technology", url: "https://leoncountyfl.galaxydigital.com/need/detail/?need_id=952166" }
    ],
  

    //Donations
    "America's Second Harvest of the Big Bend": [
        { role: "Food Distribution Helper", interest: "Donations", url: "https://fightinghunger.org/volunteer/" }
    ],
    "Big Bend Cares": [
        { role: "Front Desk/Food Distribution Helper", interest: "Donations", url: "https://bigbendcares.org/volunteer/" }
    ],
    "Safe Families for Children North Florida": [
        { role: "Donate Goods", interest: "Donations", url: "https://leoncountyfl.galaxydigital.com/need/detail/?need_id=644330" }
    ],


    // Education
    "BuddyKnit": [
        { role: "Peer Tutor", interest: "Education", url: "https://buddyknit.org/volunteer/" }
    ],
    "Kids Incorporated of the Big Bend": [
        { role: "Classrom Assistant", interest: "Education", url: "https://kidsincorporated.org/volunteer/" }
    ],
    "Leon County 4-H Club": [
        { role: "Youth Teacher", interest: "Education", url: "https://sfyl.ifas.ufl.edu/leon/4-h-youth-development/volunteer-program/" }
    ],
    "Leon County Library System-Main & Branches": [
        { role: "Tutoring Services for grades K-8", interest: "Education", url: "https://leoncountyfl.galaxydigital.com/need/detail/?need_id=615773" }
    ],
    "Leon County Library System-Main & Branches": [
        { role: "Volunteer Program Assistant", interest: "Education", url: "https://leoncountyfl.galaxydigital.com/need/detail/?need_id=938997" }
    ],
    "United Way of the Big Bend": [
        { role: "Community Outreach", interest: "Education", url: "https://uwbb.org/student-united-way/" }
    ],

    //Helper
    "Big Bends for Humanity": [
        { role: "Project Builder", interest: "Helper", url: "https://bigbendhabitat.org/volunteer/" }
    ],
    "Goat House Farm": [
        { role: "Take care of goats", interest: "Helper", url: "https://leoncountyfl.galaxydigital.com/need/detail/?need_id=684698" }
    ],
    "Alfred B Maclay Gardens": [
        { role: "Volunteer at the garden", interest: "Helper", url: "https://leoncountyfl.galaxydigital.com/need/detail/?need_id=150811" }
    ],
    "Animal Service Center": [
        { role: "Animal helper", interest: "Helper", url: "https://www.talgov.com/animals/asc-volunteer" }
    ],

    // Elderly Support
    "Ears for Elder": [
        { role: "Companion Visitor", interest: "Elderly Support", url: "https://earsforelder.org/volunteer" }

    ],
    "Alzheimer's Project": [
        { role: "Memory Care Assistant", interest: "Elderly Support", url: "https://alzheimersproject.org/volunteer/" }
    ],
    "Elder Care Services": [
        { role: "Entertainer", interest: "Elderly Support", url: "https://leoncountyfl.galaxydigital.com/need/detail/?need_id=188913" }
    ],
    "Melodies for Memories": [
        { role: "Piano Player", interest: "Elderly Support", url: "https://l.instagram.com/?u=https%3A%2F%2Fforms.gle%2FwBdPLJho7ASXoX9R6&e=AT3QDEZZg75FThLOY2w2jRA3Xj_IRBATq0IhYoe3F2BTaNb-_Znmcc6uhTs-TBf8E6gMzyjh0whtfCnQ6ZkI5AMIQs1vh9Lv" }
    ],

};

// Function to match user interests with available opportunities
function matchOpportunities() {
    const selectedInterest = document.getElementById("interest-select").value;

    // Check if an interest is selected
    if (!selectedInterest) {
        alert("Please select an interest from the dropdown.");
        return;
    }

    const matchedOpportunities = [];

    // Check each nonprofit's opportunities against the selected interest
    for (const nonprofit in opportunities) {
        opportunities[nonprofit].forEach(opportunity => {
            if (opportunity.interest === selectedInterest) {
                matchedOpportunities.push(
                    `<li>${opportunity.role} at <strong>${nonprofit}</strong> - <a href="${opportunity.url}" target="_blank">Learn More</a></li>`
                );
            }
        });
    }

    // Display the matched opportunities
    const opportunityDisplay = document.getElementById("matched-opportunities");
    if (matchedOpportunities.length > 0) {
        opportunityDisplay.innerHTML = "<h3>Matched Opportunities</h3><ul>" + matchedOpportunities.join('') + "</ul>";
    } else {
        opportunityDisplay.innerHTML = "<p>No matching opportunities found. Please try a different interest.</p>";
    }

    // Scroll to the "Matched Volunteer Opportunities" section
    const volunteerSection = document.getElementById("volunteer");
    volunteerSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section'); // Select all sections

    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the section is in view
    };

    const fadeInObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible'); // Add fade-in-visible when in view
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, observerOptions);

    // Add the fade-in class to all sections and observe them
    sections.forEach(section => {
        section.classList.add('fade-in');
        fadeInObserver.observe(section);
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let lastScrollPosition = window.pageYOffset;
    let ticking = false;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                if (currentScroll > lastScrollPosition && currentScroll > header.offsetHeight) {
                    // Scrolling down and past the header height
                    header.classList.add('hidden');
                } else {
                    // Scrolling up
                    header.classList.remove('hidden');
                }
                lastScrollPosition = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
                ticking = false;
            });

            ticking = true;
        }
    });
});
