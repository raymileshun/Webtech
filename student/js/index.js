//ennek el kellene tüntetni a paragrafusokat kattintáskor
    $(document).ready(function () {
        $('p').click(function () {
            $(this).hide();
        })



        	$(function (){
        		$('form').on('submit', function(e) {

        			e.preventDefault();


        		$.ajax(
        			{
        				type: 'post',
        				url: 'addAuthor',
        				data: $('form').serialize(),
        				success: function(data) {
        					openAuthors();
        				},
        				error: function() {
        					alert("oops");
        				}


        			}

        			)




        		})


        	})






    });







