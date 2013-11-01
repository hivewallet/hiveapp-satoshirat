function show_rat(address)
{
         $.getJSON('http://satoshirat.com/requestinfo.php?rat_address='+address, function(jd) {
             
           
             if(jd.error==0){
             $('#stage').html('Rat: ' + address );
             $('#stage').append('<br /><img src="http://satoshirat.com/poll/bara_exp.php?prc=' +jd.exp_proccent +'&health=' + jd.exp + '&health_max=' + jd.exp_max + '&level=' + jd.level +'"' + '">');
				 $('#stage').append('<br /><img src="http://satoshirat.com/poll/bara_health.php?prc=' +jd.health_proccent +'&health=' + jd.health + '&health_max=' + jd.health_max + '&health_turn=' + jd.health_turn +'"' + '">');
             $('#stage').append('<br /><img src="http://satoshirat.com/poll/bara_stamina.php?prc=' +jd.stamina_proccent +'&health=' + jd.stamina + '&health_max=' + jd.stamina_max + '&health_turn=' + jd.stamina_turn +'"' + '">');
             if(jd.last_game_id!=0) { $('#stage').append('<br />Last Game ID:' + jd.last_game_id + ' Place:' + jd.last_game_place + ' Won:<font color="green">+' + jd.last_game_btc_won + 'BTC</font>'); }
					
					if(jd.neural_implant>0) $("#buyi").hide();
					if(jd.metal_claws>0) $("#buyc").hide();
					if(jd.mechanized_tail>0) $("#buyt").hide();
					
					}          
          });
};