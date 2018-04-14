/*
Kaninen og jægeren
Erik Granberg

Elementer:
Animationer:
Lyde:
*/

$(window).on("load", startskaerm);

//  Siden er loadet

// - - - - - function startskaerm - - - - -

function startskaerm() {
	console.log("startskaerm");

	//	Søm-måtte knapper
	$("#knap_1_startskaerm").on("click", startskaerm);
	$("#knap_2_kanin_hop_ind").on("click", kanin_hop_ind);
	$("#knap_3_jaeger_drikker").on("click", jaeger_drikker);
	$("#knap_4_jaeger_falder_i_soevn").on("click", jaeger_falder_i_soevn);
	$("#knap_5_jaeger_sover").on("click", jaeger_sover);
	$("#knap_7_taktikvalg").on("click", taktikvalg);
	$("#knap_8_kanin_hopper_frem").on("click", kanin_hopper_frem);

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
	$("#start_knap").on("click", start_klik_paa_knap);
}

// - - - - - function start_klik_paa_knap - - - - -

function start_klik_paa_knap() {
	console.log("start_klik_paa_knap");

	// knaplyd spilles
	// *** kommer til ***

	//  Når lyden har spillet spillet
	// *** rettes til lyden har spillet isted for klik ***
	$("#start_knap").on("click", kanin_hop_ind);
}


// - - - - - kanin_hop_ind - - - - -

function kanin_hop_ind() {
	console.log("kanin_hop_ind - til træ");

	// knaplyd sluttes??

	//	Startskærm skjules
	$("#start_skilt").removeClass("synlig");
	$("#start_skilt").addClass("skjult");

	//	Startknap skjules - følger med startskærm

	//	Nedtoning skjules
	$("#nedtoning").removeClass("synlig");
	$("#nedtoning").addClass("skjult");

	// Start flytte-animation: kanin_ind-fra-siden
	$("#kanin_container").addClass("kanin_ind_fra_siden");

	// Start sprite-animation: kanin_hop_fremad
	$("#kanin_sprite").addClass("kanin_hop_fremad");
}

//  .kanin_ind-fra-siden er færdig

// - - - - - jaeger_drikker - - - - -

function jaeger_drikker() {
	console.log("jaeger_drikker");

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
}

//  Jægeren har drukket 3 gange

// - - - - - function jaeger_falder_i_soevn - - - - -

function jaeger_falder_i_soevn() {
	console.log("jaeger_falder_i_soevn");

	// Stop sprite-animation: jaeger_drikker
	$("#jaeger_sprite").removeClass("jaeger_drikker");

	// Start sprite-animation: jaeger_falder_i_soevn
	$("#jaeger_sprite").addClass("jaeger_falder_i_soevn");

}

//   .jaeger_falder_i_soevn er færdig

// - - - - -  function jaeger_sover + kanin blinker - - - - -

function jaeger_sover() {
	console.log("jaeger_sover");

	// Stop sprite-animation: jaeger_falder_i_soevn
	$("#jaeger_sprite").removeClass("jaeger_falder_i_soevn");

	// Start sprite-animation: jaeger_sover
	$("#jaeger_sprite").addClass("jaeger_sover");

	// stop sprite frame: kanin_staar
	$("#kanin_sprite").removeClass("kanin_staar");

	// Stop spriteanimation: kanin_blinker
	$("#kanin_sprite").addClass("kanin_blinker");
}

//  Når .kanin_blinker er færdig

// - - - - -  function taktikvalg - - - - -

function taktikvalg() {
	console.log("taktikvalg");

	// Taktik-skilt vises
	$("#taktik-valg-skilt").removeClass("skjult");
	$("#taktik-valg-skilt").addClass("synlig");

	// Taktik-knapper vises

	// Taktik-nedtoning vises
	$("#start_nedtoning").removeClass("skjult");
	$("#start_nedtoning").addClass("synlig");
}

// .valget er truffet

// - - - - -  function kanin_hopper_frem - - - - -

function kanin_hopper_frem() {
	console.log("kanin_hopper_frem");

	//	Taktikvalg-skilt skjules
	$("#taktik-valg-skilt").removeClass("synlig");
	$("#taktik-valg-skilt").addClass("skjult");
	$("#start_nedtoning").removeClass("synlig");
	$("#start_nedtoning").addClass("skjult");


	//	slut blink
	$("#kanin_sprite").removeClass("kanin_blinker");

	// Start flytte-animation: kanin_et_hop_til_hoejre
	$("#kanin_container").addClass("kanin_et_hop_til_hoejre");

	//	 Start sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").addClass("kanin_drej_i_luften");

	$("#kanin_sprite").on("animationend", kanin_mod_mark);
}

// - - - - -  function kanin_mod_mark - - - - -

function kanin_mod_mark() {
	console.log("kanin_mod_mark");

	//	 Start sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").addClass("kanin_staar_mod_mark");
	$("#kanin_sprite").removeClass("kanin_drej_i_luften")

}
