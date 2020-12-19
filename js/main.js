// our first javascript code
// to display map;
let map;

function initMap() {
    const loc={ lat: -0.608987, lng: 30.658912 }
  map = new google.maps.Map(document.getElementById("map"), {
    center: loc,
    zoom: 8,
  });
  const marker = new google.maps.Marker({ position: loc, map:map })
}
// sticky menu background transparency
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.88;
    }
    else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});
// smooth scrolling using jquery

$('#navbar a, .btn').on('click', function(event){
    if (this.hash !=='') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            }, 
            950
        );
    }
});

