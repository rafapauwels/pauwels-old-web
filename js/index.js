$(document).ready(function() {
  $('#page').pagepiling({
    menu: '#menu',
    anchors: ['home', 'work', 'about', 'contact'],
    sectionsColor: ['#1E1E3A', '#FFF', '#1E1E3A', '#FFF'],
    navigation: null,
    verticalCentered: false,
    direction: 'vertical',
    onLeave: function(index, nextIndex, direction) {
      direction === 'up' ? changeNavColor(index+1) : ''
    },
    afterLoad: function(anchorLink, index) {
      changeNavColor(index)
    }

  })
})

function changeNavColor(index) {
  index % 2 ? 
    document.getElementById("navbar").classList.add("secundary-color") : 
    document.getElementById("navbar").classList.remove("secundary-color")
}