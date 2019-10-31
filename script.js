/*  // current year month date
            // const monthNames = ['January','February', 'March','April','May','June','July','August','September','October','November','December'];
            // const month = new Date().getMonth();
			// var year = new Date().getFullYear();
			// var date = new Date().getDate();

			// document.write("The current date is " + year + ',' +  monthNames[month]+ date + "<br>");

// current day
// var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// var day = new Date().getDay();
  // document.write("Today is:" + days[day]+ "<br>");

  // current time
  // var today = new Date();
  // var hour = today.getHours();
  // var minute = today.getMinutes();
  // var second = today.getSeconds();


   // if( hour < 12)
   // {
     // document.write("current time is:" + hour + "AM:" + minute + ':'+ second+ "<br>");
   // }
   // else
   // {
     // document.write("current time is:" + hour+ "PM:"+ minute + ':' + second + "<br>");
   // }

// print page
// function print_page() {
  // window.print();
// }

// namta
      // var namta = 1;
      // var namta2 = 2;

      // while (namta <=10)
      // {
        // var result = namta2* namta;
        // document.write(namta2 + "*" + namta+ "=" + result + "<br>");
        // namta++;
      // }

      // colors show
      // var colors= ["red","green","blue","yellow","black"]
      // for(var i= 0; i< colors.length; i++)
      // {
        // document.write( "The colors name is "+ colors[i] + "<br>");
      // }

      // how to show an object through loop
      // var person ={
        // firstName: "sadia",
        // lastName: "akter",
        // age: 26
      // };
       // for(key in person)
       // {
         // document.write( key + ":" + person[key] + "<br>");
       // }
	// $(document).ready(function() {
		// $('button').click(function(){
			// $('p').animate({left: '200px'});
			// $('p').animate({top: '200px'});
			// $('p').animate({left: '0px'});
			// $('p').animate({top: '0px'});
	    // });
		
		// $('#stop').click(function(){
			// $('p').stop();
		// });
		// $('a').click(function(){
			// $('#text').toggle(2000);
		// });
		
	    
	// }); */
	
	$(document).ready(function() {
		
		$('button').click(function(){
			var quantity = document.getElementById("qty").value;
			var price = document.getElementById("price").value;
			var result = quantity*price;
			
			var totalPrice = document.getElementById("t_price").value = result;
			
			//taking value of discount
			var discount = document.getElementById("p_discount").value;
			
			// discount over total price
			var dis_percent = (totalPrice* discount)/100;
			var dis_total = totalPrice - dis_percent;
			
			//put amount after discount value in place
			var dis_total_place = document.getElementById("a_discount").value = dis_total;
			
			
			//instant paid
			var instantPaid = document.getElementById("i_paid").value;
			
			//Due Amount
			var duet = dis_total - instantPaid;
			
			//put due amount in place
			var duePlace = document.getElementById("due").value = duet;
			
			console.log(duePlace);
		});
	
		
		
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	   
	   