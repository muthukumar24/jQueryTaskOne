$(document).ready(function(){
    // Toggle Method
    $("#btnone").click(function(){
        $("#paraone").toggle()
    }),
    // Fade Out Method
    $("#btntwo").click(function(){
        $("#paratwo").fadeOut(3000)
    }),
    // Slide Up Method
    $("#btnthree").click(function(){
        $("#parathree").slideUp('slow')
    }),

    // Animate Method
    // Animate Style One
    $("#btnfour").click(function(){
            var area = $("#areaone");
            area.animate({width: '300px', opacity: '1'}, "slow");
            area.animate({height: '300px', opacity: '0.4'}, "slow");
            area.animate({height: '100px', opacity: '0.4'}, "slow");
            area.animate({width: '100px', opacity: '1'}, "slow");
    }),
    // Animate Style Two
    $("#btnfive").click(function(){
        $("#areaone").animate({
            left : '300px'
        },'slow'),
        $("#areaone").animate({
            left : '0px'
        },'slow')
    }),
    // Animate Style Three
    $("#btnsix").click(function(){
        $("#areaone").animate({
            left : '250px',
            height : '200px',
            width : '200px'
        })
    }),

    // Chain Method
    $("#btnseven").click(function(){
        $("#instruction").hide(function(){
           alert("Details updated successfully!!")
        })
    })
})