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

$(window).on("load", startSkaerm);

//  Siden er loadet

// - - - - - function startskaerm - - - - -

function startSkaerm() {
	console.log("startSkaerm");

	//	Søm-måtte knapper
	$("#knap_1").on("click", kaninHopInd);
	$("#knap_2").on("click", jaegerDrikker);
	$("#knap_3").on("click", jaegerFalderISoevn);
	$("#knap_4").on("click", jaegerSover);
	$("#knap_5").on("click", taktikValg);
	$("#knap_6").on("click", taktikValgKlikPaaKnap);
	$("#knap_7").on("click", kaninHopperFrem);
	$("#knap_8").on("click", kaninModMark);
	$("#knap_9").on("click", kaninMarkHop1);
	$("#knap_10").on("click", kaninMarkHop1Possition);
	$("#knap_11").on("click", kaninMarkHop2);
	$("#knap_12").on("click", kaninMarkHop2Possition);
	$("#knap_13").on("click", kaninMarkHop3);
	$("#knap_14").on("click", kaninMarkHop3Possition);
	$("#knap_15").on("click", kaninMarkHop4);
	$("#knap_16").on("click", kaninMarkHop4Possition);
	$("#knap_17").on("click", kaninMarkHop5);
	$("#knap_18").on("click", kaninMarkHop5Possition);
	$("#knap_19").on("click", kaninMarkHop6);


	//	Startskærm vises
	$("#start_skilt").removeClass("skjult");
	$("#start_skilt").addClass("synlig");

	//	Startnedtoning vises
	$("#nedtoning").removeClass("skjult");
	$("#nedtoning").addClass("synlig");

	// Jæger sidder på kasse
	$("#jaeger_container").addClass("jaeger_sidder");
	$("#jaeger_sprite").addClass("jaeger_sidder_stille");

	// Der er klikket på startknap
	$("#start_knap").on("click", startKlikPaaKnap);
}

// - - - - - function start_klik_paa_knap - - - - -

function startKlikPaaKnap() {
	console.log("startKlikPaaKnap");

	$("#start_knap").off("click", startKlikPaaKnap);

	// - - -

	// knaplyd spilles
	// *** kommer til ***

	// - - - trigger

	//  Når lyden har spillet spillet
	// *** rettes til lyden har spillet istedet for klik ***

	kaninHopInd();
}

// - - - - - kanin_hop_ind - - - - -

function kaninHopInd() {
	console.log("kaninHopInd");

	// knaplyd sluttes??

	// - - -

	//	Startskærm skjules
	$("#start_skilt").removeClass("synlig");
	$("#start_skilt").addClass("skjult");

	//	Startknap skjules - følger med startskærm

	//	Nedtoning skjules
	$("#nedtoning").removeClass("synlig");
	$("#nedtoning").addClass("skjult");

	// Start flytte-animation: kanin_ind_fra_siden
	$("#kanin_container").addClass("kanin_ind_fra_siden");

	// Start sprite-animation: kanin_hop_fremad
	$("#kanin_sprite").addClass("kanin_hop_fremad");

	// - - - trigger

	//  .kanin_ind-fra-siden er færdig
	$("#kanin_sprite").on("animationend", jaegerDrikker);
}



// - - - - - jaeger_drikker - - - - -

function jaegerDrikker() {
	console.log("jaegerDrikker");

	$("#kanin_sprite").off("animationend", jaegerDrikker);

	// - - -

	// Stop flytte-animation: kanin_ind-fra-siden
	$("#kanin_container").removeClass("kanin_ind_fra_siden");

	// Sæt flytte possition: kanin_bag_trae
	$("#kanin_container").addClass("kanin_bag_trae");

	// Stop sprite-animation: kanin_hop_fremad
	$("#kanin_sprite").removeClass("kanin_hop_fremad");

	// Sæt prite frame: kanin_staar
	$("#kanin_sprite").addClass("kanin_staar");

	// fjern sprite frame: jaeger_sidder_stille
	$("#jaeger_sprite").removeClass("jaeger_sidder_stille");

	// start sprite-ani: jaeger_drikker
	$("#jaeger_sprite").addClass("jaeger_drikker");

	// - - - trigger

	//  Jægeren har drukket 3 gange
	$("#jaeger_sprite").on("animationend", jaegerFalderISoevn);
}



// - - - - - function jaeger_falder_i_soevn - - - - -

function jaegerFalderISoevn() {
	console.log("jaegerFalderISoevn");

	$("#jaeger_sprite").off("animationend", jaegerFalderISoevn);

	// - - -

	// Stop sprite-animation: jaeger_drikker
	$("#jaeger_sprite").removeClass("jaeger_drikker");

	// Start sprite-animation: jaeger_falder_i_soevn
	$("#jaeger_sprite").addClass("jaeger_falder_i_soevn");

	// - - - trigger

	// .jaeger_falder_i_soevn er færdig
	$("#jaeger_sprite").on("animationend", jaegerSover);

}



// - - - - -  function jaeger_sover + kanin blinker - - - - -

function jaegerSover() {
	console.log("jaegerSover");

	$("#jaeger_sprite").off("animationend", jaegerSover);

	// - - -

	// Stop sprite-animation: jaeger_falder_i_soevn
	$("#jaeger_sprite").removeClass("jaeger_falder_i_soevn");

	// Start sprite-animation: jaeger_sover
	$("#jaeger_sprite").addClass("jaeger_sover");

	// stop sprite frame: kanin_staar
	$("#kanin_sprite").removeClass("kanin_staar");

	// Stop spriteanimation: kanin_blinker
	$("#kanin_sprite").addClass("kanin_blinker");

	// - - - trigger

	//  Når .kanin_blinker er færdig
	$("#kanin_sprite").on("animationend", taktikValg);
}



// - - - - -  function taktikvalg - - - - -

function taktikValg() {
	console.log("taktikValg");

	$("#kanin_sprite").off("animationend", taktikValg);

	// - - -

	// Taktik-skilt vises
	$("#taktikvalg_skilt").removeClass("skjult");
	$("#taktikvalg_skilt").addClass("synlig");

	// Taktik-knapper vises - sammen med taktikskærm

	// Taktik-nedtoning vises
	$("#nedtoning").removeClass("skjult");
	$("#nedtoning").addClass("synlig");

	// Baggrundsmusik slutter
	// Valg-musik starter

	// - - - trigger

	// Der er klikket på knap a
	$("#taktikvalg_knap_a").on("click", taktikValgKlikPaaKnap);
	$("#taktikvalg_tekst_a").on("click", taktikValgKlikPaaKnap);

}

// - - - - -  function taktik_klik_paa_knap - - - - -

function taktikValgKlikPaaKnap() {
	console.log("taktikValgKlikPaaKnap");

	$("#taktikvalg_knap_a").off("click", taktikValgKlikPaaKnap);
	$("#taktikvalg_tekst_a").off("click", taktikValgKlikPaaKnap);

	// - - -

	// knaplyd spilles
	// *** kommer til ***

	// - - - trigger

	//  Når lyden har spillet spillet
	// *** rettes til lyden har spillet istedet for klik ***

	kaninHopperFrem();

}

// .valget er truffet

// - - - - -  function kanin_hopper_frem - - - - -

function kaninHopperFrem() {
	console.log("kaninHopperFrem");

	// - - -

	// Taktikvalg-skilt skjules
	$("#taktikvalg_skilt").removeClass("synlig");
	$("#taktikvalg_skilt").addClass("skjult");
	$("#nedtoning").removeClass("synlig");
	$("#nedtoning").addClass("skjult");

	// Valg-musik slutter
	// Baggrundsmusik begynder

	// Slut contaioner-possition: kanin_bag_trae
	$("#kanin_container").removeClass("kanin_bag_trae");

	// Start contaioner-ani: kanin_et_hop_til_hoejre
	$("#kanin_container").addClass("kanin_et_hop_til_hoejre");

	// Slut sprite-ani: kanin_blinker
	$("#kanin_sprite").removeClass("kanin_blinker");

	// Start sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").addClass("kanin_drej_i_luften");


	// - - - trigger

	// Når .kanin_et_hop_til_hoejre er færdig
	$("#kanin_container").on("animationend", kaninModMark);
}



// - - - - -  function kanin_mod_mark - - - - -

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

	// - - - trigger

	// Når kanin_ryg_til vises

	$("#kanin_sprite").on("animationend", kaninMarkHop1);
}



// - - - - -  function kanin_mark_hop_1 - - - - -

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

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop1Possition);

}


function kaninMarkHop1Possition() {
	console.log("kaninMarkHop1Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop1Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_1
	$("#kanin_container").removeClass("kanin_mark_move_1");

	// Begynd container possition: kanin_mark_possition_1
	$("#kanin_container").addClass("kanin_mark_possition_1");

	// Slut sprite-animation: kanin_mark_hop
	$("#kanin_sprite").removeClass("kanin_mark_hop");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop2);
}

function kaninMarkHop2() {
	console.log("kaninMarkHop2");

	$("#kanin_container").off("animationend", kaninMarkHop2);

	// - - -

	// Slut container kanin_mark_possition_1
	$("#kanin_container").removeClass("kanin_mark_possition_1");

	// Begynd container animation: kanin_mark_move_2
	$("#kanin_container").addClass("kanin_mark_move_2");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop_2");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop2Possition);
}

function kaninMarkHop2Possition() {
	console.log("kaninMarkHop2Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop2Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_2
	$("#kanin_container").removeClass("kanin_mark_move_2");

	// Begynd container possition: kanin_mod_mark
	$("#kanin_container").addClass("kanin_mark_possition_2");

	// Slut sprite-animation: kanin_mark_hop_2
	$("#kanin_sprite").removeClass("kanin_mark_hop_2");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop3);

}

function kaninMarkHop3() {
	console.log("kaninMarkHop3");

	$("#kanin_container").off("animationend", kaninMarkHop3)

	// - - -

	// Slut container possition: kanin_mark_possition_2
	$("#kanin_container").removeClass("kanin_mark_possition_2");

	// Begynd container animation: kanin_mark_move_3
	$("#kanin_container").addClass("kanin_mark_move_3");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop_3");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop3Possition);
}

function kaninMarkHop3Possition() {
	console.log("kaninMarkHop3Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop3Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_3
	$("#kanin_container").removeClass("kanin_mark_move_3");

	// Begynd container possition: kanin_mod_mark
	$("#kanin_container").addClass("kanin_mark_possition_3");

	// Slut sprite-animation: kanin_mark_hop_3
	$("#kanin_sprite").removeClass("kanin_mark_hop_3");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_container").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop4);
}

function kaninMarkHop4() {
	console.log("kaninMarkHop4");

	$("#kanin_container").off("animationend", kaninMarkHop4);

	// - - -

	// Slut container possition: kanin_mark_possition_3
	$("#kanin_container").removeClass("kanin_mark_possition_3");

	// Begynd container animation: kanin_mark_move_4
	$("#kanin_container").addClass("kanin_mark_move_4");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop_4");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop4Possition);
}

function kaninMarkHop4Possition() {
	console.log("kaninMarkHop4Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop4Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_4
	$("#kanin_container").removeClass("kanin_mark_move_4");

	// Begynd container possition: kanin_mod_mark
	$("#kanin_container").addClass("kanin_mark_possition_4");

	// Slut sprite-animation: kanin_mark_hop_4
	$("#kanin_sprite").removeClass("kanin_mark_hop_4");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop5);
}

function kaninMarkHop5() {
	console.log("kaninMarkHop5");

	$("#kanin_container").off("animationend", kaninMarkHop5);

	// - - -

	// Slut container possition: kanin_mark_possition_3
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

function kaninMarkHop5Possition() {
	console.log("kaninMarkHop5Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop5Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_4
	$("#kanin_container").removeClass("kanin_mark_move_5");

	// Begynd container possition: kanin_mod_mark
	$("#kanin_container").addClass("kanin_mark_possition_5");

	// Slut sprite-animation: kanin_mark_hop_5
	$("#kanin_sprite").removeClass("kanin_mark_hop_5");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop6);
}

function kaninMarkHop6() {
	console.log("kaninMarkHop6");


	$("#kanin_container").off("animationend", kaninMarkHop6);

	// - - -

	// Slut container possition: kanin_mark_possition_3
	$("#kanin_container").removeClass("kanin_mark_possition_5");

	// Begynd container animation: kanin_mark_move_6
	$("#kanin_container").addClass("kanin_mark_move_6");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop_6");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop6Possition);
}

function kaninMarkHop6Possition() {
	console.log("kaninMarkHop6Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop6Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_6
	$("#kanin_container").removeClass("kanin_mark_move_6");

	// Begynd container possition: kanin_mod_mark
	$("#kanin_container").addClass("kanin_mark_possition_6");

	// Slut sprite-animation: kanin_mark_hop_6
	$("#kanin_sprite").removeClass("kanin_mark_hop_6");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");


	// - - -

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMobilRinger);
}

function kaninMobilRinger() {
	console.log("kaninMobilRinger");
	$("#kanin_container").off("animationend", kaninMobilRinger);

	// - - -

	// begynd: kanin_mobil_size
	$("#kanin_sprite").addClass("kanin_mobil_size");

	// slut container possition: kanin_mod_mark
	$("#kanin_container").removeClass("kanin_mark_possition_6")

	// begynd contaioner-animation: kanin_mobil_ryster
	$("#kanin_container").addClass("kanin_mobil_ryster");

	// - - -

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninBange);
}

function kaninBange() {
	console.log("kaninBange");
	$("#kanin_container").off("animationend", kaninBange);

	// - - -

	// stop contaioner-animation: kanin_mobil_ryster
	$("#kanin_container").removeClass("kanin_mobil_ryster")

	// begynd contaioner-animation: kanin_mobil_ryster_2
	$("#kanin_container").addClass("kanin_mobil_possition");

	// fjern sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// start sprite-still: kanin_bange
	$("#kanin_sprite").addClass("kanin_bange");

	// Når flytte-animation er færdig

	$("#kanin_sprite").on("animationend", kaninMobil2Ringer);

	kaninMobil2Ringer();

}

function kaninMobil2Ringer() {
	console.log("kaninMobil2Ringer");

	$("#kanin_sprite").off("animationend", kaninMobil2Ringer);

	// - - -

	// slut contaioner-animation: kanin_mobil_ryster
	$("#kanin_container").removeClass("kanin_mobil_ryster");

	// begynd contaioner-animation: kanin_mobil_ryster_2
	$("#kanin_container").addClass("kanin_mobil_ryster_2");

	// slut sprite-animation: jaeger_sover
	$("#jaeger_sprite").removeClass("jaeger_sover");

	// start sprite-animation: jaeger_vaagner
	$("#jaeger_sprite").addClass("jaeger_vaagner");

	// - - -

	// Når sprite-animation er færdig

	$("#jaeger_sprite").on("animationend", MobilRygerFrem);

}

function MobilRygerFrem() {
	console.log("MobilRygerFrem");

	$("#jaeger_sprite").off("animationend", MobilRygerFrem);

	// - - -

	// slut contaioner-animation: kanin_mobil_ryster_2
	$("#kanin_container").removeClass("kanin_mobil_ryster_2");

	// begynd contaioner-animation: mobil ryger frem
	$("#mobil_container").addClass("mobil_ryger_frem");


	// slut sprite-animation: jaeger_vaagner
	$("#jaeger_sprite").removeClass("jaeger_vaagner");

	// start sprite-still: jaeger_sur
	$("#jaeger_sprite").addClass("jaeger_sur");

	// - - -

	// Når flytte-animation er færdig

	// når mobil ryster er færdig
	$("#mobil_container").on("animationend", mobilRyster);
}

function mobilRyster() {
	console.log("mobilRyster");

	$("#mobil_container").off("animationend", mobilRyster);

	// - - -

	// begynd contaioner-animation: mobil ryger frem
	$("#mobil_container").removeClass("mobil_ryger_frem");

	// begynd contaioner-animation: mobil possition
	$("#mobil_container").addClass("mobil_ryster_possition");

	// begynd contaioner-animation: kanin_ryster
	$("#mobil_container").addClass("mobil_ryster")

	// start container-animation: censur_container_possition
	$("#censur_container").addClass("censur_possition");

	// - - -

	$("#mobil_container").on("animationend", jaegerSkyder);

}

function jaegerSkyder() {
	console.log("jaegerSkyder");

	$("#mobil_container").off("animationend", jaegerSkyder)

	// - - -

	// start container-animation: censur_cover
	$("#censur_container").addClass("censur_cover");

	// slut sprite-still: jaeger_sur
	$("#jaeger_sprite").removeClass("jaeger_sur");

	// start sprite-animation: jaeger_falder_i_soevn
	$("#jaeger_sprite").addClass("jaeger_skyder");

}
