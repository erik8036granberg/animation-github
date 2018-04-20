/*
Kaninen og jægeren
Erik Granberg

 - - - - - elementer - - - - -

#scene

#start_knap
#start_skilt
#nedtoning
#taktikvalg_skilt
#taktikvalg_knap
	.skjult
	.synlig

# baggrund_buske
# baggrund_trae
# baggrund_mark
# baggrund_bjerge
# roeg
# roeg_2
# sten


 - - - - - animationer - - - - -

#kanin_container
	.kanin_ind_fra_siden
	.kanin_bag_trae
	.kanin_et_hop_til_hoejre
	.kanin_mark_position
	.kanin_mark_move_1
	.kanin_staa_paa_mark
	.kanin_mobil_ryster

# kanin_sprite
	.kanin_hop_fremad
	.kanin_staar
	.kanin_blinker
	.kanin_drej_i_luften
	.kanin_ryg_til
	.kanin_mark_hop
	.kanin_glad
	.kanin_bange

# jaeger_container
	.jaeger_sidder

# jaeger_sprite
	.jaeger_sidder_stille
	.jaeger_drikker
	.jaeger_falder_i_soevn
	.jaeger_sover
	.jaeger_er_sur
	.jaeger_skyder

# blod_splat_container
# blod_splat_sprite
# afskudt_hovede_container
# afskudt_hovede_sprite

# vindue_container
# vindue_sprite


 - - - - - lyde - - - - -
*/

// - - - - - onLoad - - - - -

$(window).on("load", startSkaerm);

$("#musik_gunfight")[0].volume = 0.2;

//  Siden er loadet

// - - - - - startskaerm - - - - -

function startSkaerm() {
	console.log("startSkaerm");

	//	Startskærm vises
	$("#start_skilt").removeClass("skjult");
	$("#start_skilt").addClass("synlig");

	//	Startnedtoning vises
	$("#nedtoning").removeClass("skjult");
	$("#nedtoning").addClass("synlig");

	// Start jaeger container
	$("#jaeger_container").addClass("jaeger_sidder");

	// Start Jaeger sprite frame
	$("#jaeger_sprite").addClass("jaeger_sidder_stille");

	// Der er klikket på startknap
	$("#start_knap").on("click", startKlikPaaKnap);
}

// - - - - - start_klik_paa_knap - - - - -

function startKlikPaaKnap() {
	console.log("startKlikPaaKnap");

	$("#start_knap").off("click", startKlikPaaKnap);

	// - - -

	// Start knaplyd effekt_bank
	$("#effekt_bank")[0].play();

	// - - - trigger

	//  Når lyden har spillet spillet
	$("#effekt_bank").on("ended", kaninHopInd);

}

// - - - - - kanin_hop_ind - - - - -

function kaninHopInd() {
	console.log("kaninHopInd");

	$("#effekt_bank").off("ended", kaninHopInd);

	// slut knaplyd effekt_bank
	$("#effekt_bank").off("ended");

	// - - -

	//	Startskærm skjules
	$("#start_skilt").removeClass("synlig");
	$("#start_skilt").addClass("skjult");

	//	Nedtoning skjules
	$("#nedtoning").removeClass("synlig");
	$("#nedtoning").addClass("skjult");

	// Start kanin move: kanin_ind-fra-siden
	$("#kanin_container").addClass("kanin_ind_fra_siden");

	// Start kanin-animation: kanin_hop_fremad
	$("#kanin_sprite").addClass("kanin_hop_fremad");

	// Start lyd: effekt_kaninhop
	$("#effekt_kaninhop_to_gange")[0].play();
	$("#effekt_kaninhop_to_gange")[0].volume = 0.1;

	// - - - trigger

	//  .kanin_ind-fra-siden er færdig
	$("#kanin_sprite").on("animationend", jaegerDrikker);
}



// - - - - - jaeger_drikker - - - - -

function jaegerDrikker() {
	console.log("jaegerDrikker");

	$("#kanin_sprite").off("animationend", jaegerDrikker);

	// slut lyd: effekt_kaninhop_to_gange
	$("#effekt_kaninhop_to_gange").off("ended");

	// - - -

	// Stop kanin move: kanin_ind-fra-siden
	$("#kanin_container").removeClass("kanin_ind_fra_siden");

	// Sæt kanin possition: kanin_bag_trae
	$("#kanin_container").addClass("kanin_bag_trae");

	// Stop sprite-animation: kanin_hop_fremad
	$("#kanin_sprite").removeClass("kanin_hop_fremad");

	// Sæt kanin sprite frame: kanin_staar
	$("#kanin_sprite").addClass("kanin_staar");

	// fjern jaeger sprite frame: jaeger_sidder_stille
	$("#jaeger_sprite").removeClass("jaeger_sidder_stille");

	// start jaeger sprite-ani: jaeger_drikker

	$("#jaeger_sprite").addClass("jaeger_drikker");

	// Start lyd: effekt_slurk_tre_gange
	$("#effekt_slurk_tre_gange")[0].play();
	$("#effekt_slurk_tre_gange")[0].volume = 0.2;

	// - - - trigger

	//  Jægeren har drukket 3 gange
	$("#jaeger_sprite").on("animationend", jaegerFalderISoevn);
}



// - - - - - jaeger_falder_i_soevn - - - - -

function jaegerFalderISoevn() {
	console.log("jaegerFalderISoevn");

	$("#jaeger_sprite").off("animationend", jaegerFalderISoevn);

	// Slut lyd: effekt_slurk_tre_gange
	$("#effekt_slurk_tre_gange").off("ended");

	// - - -

	// Stop sprite-animation: jaeger_drikker
	$("#jaeger_sprite").removeClass("jaeger_drikker");

	// Start sprite-animation: jaeger_falder_i_soevn
	$("#jaeger_sprite").addClass("jaeger_falder_i_soevn");

	// - - - trigger

	// .jaeger_falder_i_soevn er færdig + tid
	$("#jaeger_sprite").on("animationend", jaegerSover);
}



// - - - - -  jaegerSover - - - - -

function jaegerSover() {
	console.log("jaegerSover");

	$("#jaeger_sprite").off("animationend", jaegerSover);

	// - - -

	// Stop sprite-animation: jaeger_falder_i_soevn
	$("#jaeger_sprite").removeClass("jaeger_falder_i_soevn");

	// Start sprite-animation: jaeger_sover
	$("#jaeger_sprite").addClass("jaeger_sover");

	// Start lyd: effekt_snorken
	$("#effekt_snorken")[0].play();
	$("#effekt_snorken")[0].volume = 0.3;
	document.getElementById("effekt_snorken").loop = true;

	// stop sprite frame: kanin_staar
	$("#kanin_sprite").removeClass("kanin_staar");

	// Start sprite-animation: kanin_blinker
	$("#kanin_sprite").addClass("kanin_blinker");


	// - - - trigger

	//  Når .kanin_blinker er færdig + tid
	$("#kanin_sprite").on("animationend", taktikValg);
}



// - - - - -  taktikValg - - - - -

function taktikValg() {
	console.log("taktikValg");

	$("#kanin_sprite").off("animationend", taktikValg);

	// - - -

	// Taktik-skilt vises
	$("#taktikvalg_skilt").removeClass("skjult");
	$("#taktikvalg_skilt").addClass("synlig");

	// Taktik-nedtoning vises
	$("#nedtoning").removeClass("skjult");
	$("#nedtoning").addClass("synlig");

	// Baggrundsmusik skrues ned
	$("#musik_gunfight").animate({
		volume: 0
	}, 8000);

	// Snorken skrues ned
	$("#effekt_snorken").animate({
		volume: 0.05
	}, 2000);
	// - - - trigger

	// Der er klikket på knap a
	$("#taktikvalg_knap_a").on("click", taktikValgKlikPaaKnap);

	$("#taktikvalg_tekst_a").on("click", taktikValgKlikPaaKnap);

}

// - - - - -  taktikValgKlikPaaKnap - - - - -

function taktikValgKlikPaaKnap() {
	console.log("taktikValgKlikPaaKnap");

	$("#taktikvalg_knap_a").off("click", taktikValgKlikPaaKnap);
	$("#taktikvalg_tekst_a").off("click", taktikValgKlikPaaKnap);

	// - - -

	// knaplyd effekt_bank spilles
	$("#effekt_bank")[0].play();


	// - - - trigger

	//  Når lyden har spillet spillet
	$("#effekt_bank").on("ended", kaninHopperFrem);

}


// - - - - -  kaninHopperFrem - - - - -

function kaninHopperFrem() {
	console.log("kaninHopperFrem");

	$("#effekt_bank").off("ended", kaninHopperFrem);

	// - - -

	// Taktikvalg-skilt skjules
	$("#taktikvalg_skilt").removeClass("synlig");
	$("#taktikvalg_skilt").addClass("skjult");
	$("#nedtoning").removeClass("synlig");
	$("#nedtoning").addClass("skjult");

	// Stop lyd effekt_bank
	$("#effekt_bank").off("ended");

	// Start lyd Actionmusik
	$("#musik_crust")[0].play();
	$("#musik_crust")[0].volume = 0.2;

	// Slut kanin-possition: kanin_bag_trae
	$("#kanin_container").removeClass("kanin_bag_trae");

	// Start kanin move: kanin_et_hop_til_hoejre
	$("#kanin_container").addClass("kanin_et_hop_til_hoejre");

	// Slut sprite-animation: kanin_blinker
	$("#kanin_sprite").removeClass("kanin_blinker");

	// Start sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").addClass("kanin_drej_i_luften");

	// Start lyd: effekt_kaninhop
	$("#effekt_kaninhop")[0].play();
	$("#effekt_kaninhop")[0].volume = 0.1;

	// - - - trigger

	// Når .kanin_et_hop_til_hoejre er færdig
	$("#kanin_container").on("animationend", kaninModMark);
}



// - - - - -   kaninModMark - - - - -

function kaninModMark() {
	console.log("kaninModMark");

	$("#kanin_container").off("animationend", kaninModMark);

	// - - -

	// Slut contaioner-ani: kanin_et_hop_til_hoejre
	$("#kanin_container").removeClass("kanin_et_hop_til_hoejre");

	// Begynd container possition: kanin_mod_mark
	$("#kanin_container").addClass("kanin_mark_possition");

	// Slut sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").removeClass("kanin_drej_i_luften");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop").off("ended");

	// - - - trigger

	// Når kanin_ryg_til vises

	$("#kanin_sprite").on("animationend", kaninMarkHop1);
}

// - - - - -  kaninMarkHop1 - - - - -

function kaninMarkHop1() {
	console.log("kaninMarkHop1");

	$("#kanin_sprite").off("animationend", kaninMarkHop1);

	// - - -

	// Slut container possition: kanin_mod_mark
	$("#kanin_container").removeClass("kanin_mark_possition");

	// Begynd container animation: kanin_mark_move_1
	$("#kanin_container").addClass("kanin_mark_move_1");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop");

	// Start lyd: effekt_kaninhop_1
	$("#effekt_kaninhop_1")[0].play();
	$("#effekt_kaninhop_1")[0].volume = 0.1;

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop1Possition);

}

// - - - - -  kaninMarkHop1Possition - - - - -

function kaninMarkHop1Possition() {
	console.log("kaninMarkHop1Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop1Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_1
	$("#kanin_container").removeClass("kanin_mark_move_1");

	// Begynd kanin possition: kanin_mark_possition_1
	$("#kanin_container").addClass("kanin_mark_possition_1");

	// Slut sprite-animation: kanin_mark_hop
	$("#kanin_sprite").removeClass("kanin_mark_hop");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_1").off("ended");


	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop2);
}

// - - - - -  kaninMarkHop2 - - - - -

function kaninMarkHop2() {
	console.log("kaninMarkHop2");

	$("#kanin_container").off("animationend", kaninMarkHop2);

	// Start lyd: effekt_kaninhop_2
	$("#effekt_kaninhop_2")[0].play();
	$("#effekt_kaninhop_2")[0].volume = 0.1;

	// - - -

	// Slut container kanin_mark_possition_1
	$("#kanin_container").removeClass("kanin_mark_possition_1");

	// Begynd container animation: kanin_mark_move_2
	$("#kanin_container").addClass("kanin_mark_move_2");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop_2
	$("#kanin_sprite").addClass("kanin_mark_hop_2");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop2Possition);
}

// - - - - -  kaninMarkHop2Possition - - - - -

function kaninMarkHop2Possition() {
	console.log("kaninMarkHop2Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop2Possition);

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_2").off("ended");

	// - - -

	// Slut contaioner-ani: kanin_mark_move_2
	$("#kanin_container").removeClass("kanin_mark_move_2");

	// Begynd container possition: kanin_mark_possition_2
	$("#kanin_container").addClass("kanin_mark_possition_2");

	// Slut sprite-animation: kanin_mark_hop_2
	$("#kanin_sprite").removeClass("kanin_mark_hop_2");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop3);

}

// - - - - -  kaninMarkHop3 - - - - -

function kaninMarkHop3() {
	console.log("kaninMarkHop3");

	$("#kanin_container").off("animationend", kaninMarkHop3);

	// Start lyd: effekt_kaninhop_3
	$("#effekt_kaninhop_3")[0].play();
	$("#effekt_kaninhop_3")[0].volume = 0.1;


	// - - -

	// Slut container possition: kanin_mark_possition_2
	$("#kanin_container").removeClass("kanin_mark_possition_2");

	// Begynd container animation: kanin_mark_move_3
	$("#kanin_container").addClass("kanin_mark_move_3");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop_3
	$("#kanin_sprite").addClass("kanin_mark_hop_3");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop3Possition);
}

// - - - - -  kaninMarkHop3Possition - - - - -

function kaninMarkHop3Possition() {
	console.log("kaninMarkHop3Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop3Possition);

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_3").off("ended");


	// - - -

	// Slut contaioner-ani: kanin_mark_move_3
	$("#kanin_container").removeClass("kanin_mark_move_3");

	// Begynd container possition: kanin_mark_possition_3
	$("#kanin_container").addClass("kanin_mark_possition_3");

	// Slut sprite-animation: kanin_mark_hop_3
	$("#kanin_sprite").removeClass("kanin_mark_hop_3");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_container").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop4);
}

// - - - - -  kaninMarkHop4 - - - - -

function kaninMarkHop4() {
	console.log("kaninMarkHop4");

	$("#kanin_container").off("animationend", kaninMarkHop4);

	// Start lyd: effekt_kaninhop_4
	$("#effekt_kaninhop_4")[0].play();
	$("#effekt_kaninhop_4")[0].volume = 0.1;

	// - - -

	// Slut container possition: kanin_mark_possition_3
	$("#kanin_container").removeClass("kanin_mark_possition_3");

	// Begynd container animation: kanin_mark_move_4
	$("#kanin_container").addClass("kanin_mark_move_4");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop_4
	$("#kanin_sprite").addClass("kanin_mark_hop_4");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop4Possition);
}

// - - - - -  kaninMarkHop4Possition - - - - -

function kaninMarkHop4Possition() {
	console.log("kaninMarkHop4Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop4Possition);

	// Slut lyd: effekt_kaninhop_4
	$("#effekt_kaninhop_4").off("ended");

	// - - -

	// Slut contaioner-ani: kanin_mark_move_4
	$("#kanin_container").removeClass("kanin_mark_move_4");

	// Begynd container possition: kanin_mark_possition_4
	$("#kanin_container").addClass("kanin_mark_possition_4");

	// Slut sprite-animation: kanin_mark_hop_4
	$("#kanin_sprite").removeClass("kanin_mark_hop_4");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop5);
}

// - - - - -  kaninMarkHop5 - - - -

function kaninMarkHop5() {
	console.log("kaninMarkHop5");

	$("#kanin_container").off("animationend", kaninMarkHop5);

	// Start lyd: effekt_kaninhop_5
	$("#effekt_kaninhop_5")[0].play();
	$("#effekt_kaninhop_5")[0].volume = 0.1;

	// - - -

	// Slut container possition: kanin_mark_possition_4
	$("#kanin_container").removeClass("kanin_mark_possition_4");

	// Begynd container animation: kanin_mark_move_5
	$("#kanin_container").addClass("kanin_mark_move_5");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop_5");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop5Possition);
}

// - - - - -  kaninMarkHop5Possition - - - -

function kaninMarkHop5Possition() {
	console.log("kaninMarkHop5Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop5Possition);

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_5").off("ended");

	// - - -

	// Slut contaioner-ani: kanin_mark_move_5
	$("#kanin_container").removeClass("kanin_mark_move_5");

	// Begynd container possition: kanin_mark_possition_5
	$("#kanin_container").addClass("kanin_mark_possition_5");

	// Slut sprite-animation: kanin_mark_hop_5
	$("#kanin_sprite").removeClass("kanin_mark_hop_5");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop6);
}

// - - - - -  kaninMarkHop6 - - - -

function kaninMarkHop6() {
	console.log("kaninMarkHop6");

	// Start lyd: effekt_kaninhop_6
	$("#effekt_kaninhop_6")[0].play();
	$("#effekt_kaninhop_6")[0].volume = 0.1;


	$("#kanin_container").off("animationend", kaninMarkHop6);

	// - - -

	// Slut container possition: kanin_mark_possition_5
	$("#kanin_container").removeClass("kanin_mark_possition_5");

	// Begynd container animation: kanin_mark_move_6
	$("#kanin_container").addClass("kanin_mark_move_6");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop_6
	$("#kanin_sprite").addClass("kanin_mark_hop_6");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop6Possition);
}

// - - - - -  kaninMarkHop6Possition - - - -

function kaninMarkHop6Possition() {
	console.log("kaninMarkHop6Possition");

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_6").off("ended");

	$("#kanin_sprite").off("animationend", kaninMarkHop6Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_6
	$("#kanin_container").removeClass("kanin_mark_move_6");

	// Begynd container possition: kanin_mark_possition_6
	$("#kanin_container").addClass("kanin_mark_possition_6");

	// Slut sprite-animation: kanin_mark_hop_6
	$("#kanin_sprite").removeClass("kanin_mark_hop_6");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");


	// - - -

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", randomValg);
}

// - - - - -  randomValg - - - -

function randomValg() {
	console.log("Random valg");

	$("#kanin_container").off("animationend", randomValg);

	if (Math.random() >= 0.33) {
		kaninMobilRinger();
		console.log("random = mobil ringer!");
	} else {
		friBane();
		console.log("random = der er fri bane");
	}
}

// - - - - -  kaninMobilRinger - - - -

function kaninMobilRinger() {
	console.log("kaninMobilRinger");

	// Slut lyd: effekt_snorken
	$("#effekt_snorken").off("ended");
	document.getElementById("effekt_snorken").loop = false;

	// - - -

	// begynd: kanin mobil_size
	$("#kanin_sprite").addClass("kanin_mobil_size");

	// Slut kanin possition: kanin_mark_possition_6
	$("#kanin_container").removeClass("kanin_mark_possition_6");

	// begynd kanin-animation: kanin_mobil_ryster
	$("#kanin_container").addClass("kanin_mobil_ryster");

	// start lyd effekt_mobilringer
	$("#effekt_mobilringer")[0].play();
	$("#effekt_mobilringer")[0].volume = 1;

	// start lyd effekt_mobilbrummen_1
	$("#effekt_mobilbrummen_1")[0].play();
	$("#effekt_mobilbrummen_1")[0].volume = 0.5;


	// - - -

	// Når kanin_mobil_ryster er færdig

	$("#kanin_container").on("animationend", kaninChok);
}

// - - - - -  kaninChok - - - -

function kaninChok() {
	console.log("kaninBange");
	$("#kanin_container").off("animationend", kaninChok);

	// - - -

	// stop kanin-move: kanin_mobil_ryster
	$("#kanin_container").removeClass("kanin_mobil_ryster");

	// Slut lyd: effekt_mobilbrummen_1
	$("effekt_mobilbrummen_1").off("ended");


	// begynd kanin-animation: kanin_mobil_possition
	$("#kanin_container").addClass("kanin_mobil_possition");

	// fjern sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// start sprite-still: kanin_bange
	$("#kanin_sprite").addClass("kanin_bange");

	// - - -

	kaninMobil2Ringer();
}

// - - - - -  kaninMobil2Ringer - - - -

function kaninMobil2Ringer() {
	console.log("kaninMobil2Ringer");

	// - - -

	// begynd kanin-move: kanin_mobil_ryster_2
	$("#kanin_container").addClass("kanin_mobil_ryster_2");

	// start lyd effekt_mobilbrummen_2
	$("#effekt_mobilbrummen_2")[0].play();
	$("#effekt_mobilbrummen_2")[0].volume = 0.5;


	// slut jaeger sprite-animation: jaeger_sover
	$("#jaeger_sprite").removeClass("jaeger_sover");

	// start jaeger sprite-animation: jaeger_vaagner
	$("#jaeger_sprite").addClass("jaeger_vaagner");

	// - - -

	// Når sprite-animation er færdig

	$("#jaeger_sprite").on("animationend", MobilRygerFrem);

}

// - - - - -  MobilRygerFrem - - - -

function MobilRygerFrem() {
	console.log("MobilRygerFrem");

	$("#jaeger_sprite").off("animationend", MobilRygerFrem);

	// - - -

	// slut kanin-animation: kanin_mobil_ryster_2
	$("#kanin_container").removeClass("kanin_mobil_ryster_2");

	// Slut lyd: effekt_mobilbrummen_2
	$("effekt_mobilbrummen_2").off("ended");

	// begynd contaioner-animation: mobil ryger frem
	$("#mobil_container").addClass("mobil_ryger_frem");

	// slut jaeger sprite-animation: jaeger_vaagner
	$("#jaeger_sprite").removeClass("jaeger_vaagner");

	// start jaeger sprite frame: jaeger_sidder_stille
	$("#jaeger_sprite").addClass("jaeger_sidder_stille");

	// - - -

	// Når mobil ryger frem er færdig
	$("#mobil_container").on("animationend", mobilRyster);
}

// - - - - -  mobilRyster - - - -

function mobilRyster() {
	console.log("mobilRyster");

	$("#mobil_container").off("animationend", mobilRyster);

	// - - -

	// slut mobil-move: mobil ryger frem
	$("#mobil_container").removeClass("mobil_ryger_frem");

	// begynd mobil possition: mobil_ryster_possition
	$("#mobil_container").addClass("mobil_ryster_possition");

	// begynd mobil-move: mobil_ryster
	$("#mobil_container").addClass("mobil_ryster");

	// Start lyd: mobilbrummen_3
	$("#effekt_mobilbrummen_3")[0].play();
	$("#effekt_mobilbrummen_3")[0].volume = 0.5;

	// - - -

	$("#mobil_container").on("animationend", JaegerGevaerProblem);

}

// - - - - -  JaegerGevaerProblem - - - -

function JaegerGevaerProblem() {
	console.log("JaegerGevaerProblem");

	$("#mobil_container").off("animationend", JaegerGevaerProblem);

	// Slut lyd effekt_mobilbrummen_3
	$("effekt_mobilbrummen_3").off("ended");

	// - - -

	// slut mobil-animation: mobil_ryster
	$("#mobil_container").removeClass("mobil_ryster");

	// start contaioner-animation: mobil_ryster
	$("#mobil_container").addClass("mobil_ryster_2");

	// effekt_mobilbrummen_4
	$("#effekt_mobilbrummen_4")[0].play();
	$("#effekt_mobilbrummen_4")[0].volume = 0.5;

	$("effekt_mobilbrummen_4").off("ended");
}

// - - - - -  friBane - - - -

function friBane() {
	console.log("friBane");

}
