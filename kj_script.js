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
	$("#knap_kanin_hop_ind").on("click", kanin_hop_ind);
	$("#knap_jaeger_drikker").on("click", jaeger_drikker);
	$("#knap_jaeger_falder_i_soevn").on("click", jaeger_falder_i_soevn);
	$("#knap_jaeger_sover").on("click", jaeger_sover);
	$("#knap_taktikvalg").on("click", taktikvalg);
	$("#knap_taktikvalg_klik_paa_knap").on("click", taktikvalg_klik_paa_knap);
	$("#knap_kanin_hopper_frem").on("click", kanin_hopper_frem);
	$("#knap_kanin_mod_mark").on("click", kanin_mod_mark);
	$("#knap_kanin_mark_hop_1").on("click", kanin_mark_hop_1);
	$("#knap_kanin_mark_hop_1_efter").on("click", kanin_mark_hop_1_efter);
	$("#knap_kanin_mark_hop_2").on("click", kanin_mark_hop_2);
	$("#knap_kanin_mark_hop_2_efter").on("click", kanin_mark_hop_2_efter);
	$("#knap_kanin_mark_hop_3").on("click", kanin_mark_hop_3);

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
	// *** rettes til lyden har spillet istedet for klik ***
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

	// Start flytte-animation: kanin_ind_fra_siden
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
	$("#taktikvalg_skilt").removeClass("skjult");
	$("#taktikvalg_skilt").addClass("synlig");

	// Taktik-knapper vises - sammen med taktikskærm

	// Taktik-nedtoning vises
	$("#nedtoning").removeClass("skjult");
	$("#nedtoning").addClass("synlig");

	// Baggrundsmusik slutter
	// Valg-musik starter

	// Der er klikket på knap a
	$("#start_knap").on("click", taktikvalg_klik_paa_knap);

}

// - - - - -  function taktik_klik_paa_knap - - - - -

function taktikvalg_klik_paa_knap() {
	console.log("taktik_klik_paa_knap");

	// knaplyd spilles
	// *** kommer til ***

	//  Når lyden har spillet spillet
	// *** rettes til lyden har spillet istedet for klik ***
	$("#start_knap").on("click", kanin_hopper_frem);

}

// .valget er truffet

// - - - - -  function kanin_hopper_frem - - - - -

function kanin_hopper_frem() {
	console.log("kanin_hopper_frem");

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
}

// Når .kanin_et_hop_til_hoejre er færdig

// - - - - -  function kanin_mod_mark - - - - -

function kanin_mod_mark() {
	console.log("kanin_mod_mark");

	// Slut contaioner-ani: kanin_et_hop_til_hoejre
	$("#kanin_container").removeClass("kanin_et_hop_til_hoejre");

	// Begynd container possition: kanin_mod_mark
	$("#kanin_container").addClass("kanin_mark_possition");

	// Slut sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").removeClass("kanin_drej_i_luften");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");
}

// - - - - -  function kanin_mark_hop_1 - - - - -

function kanin_mark_hop_1() {
	console.log("kanin_mark_hop_1");

	// Slut container possition: kanin_mod_mark
	$("#kanin_container").removeClass("kanin_mark_possition");

	// Begynd container animation: kanin_mark_move_1
	$("#kanin_container").addClass("kanin_mark_move_1");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop");
}

function kanin_mark_hop_1_efter() {
	console.log("kanin_mark_hop_1_efter");

	// Slut contaioner-ani: kanin_et_hop_til_hoejre
	$("#kanin_container").removeClass("kanin_mark_move_1");

	// Begynd container possition: kanin_mod_mark
	$("#kanin_container").addClass("kanin_mark_possition_1");

	// Slut sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").removeClass("kanin_mark_hop");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");
}

function kanin_mark_hop_2() {
	console.log("kanin_mark_hop_2");

	// Slut container possition: kanin_mod_mark
	$("#kanin_container").removeClass("kanin_mark_possition_1");

	// Begynd container animation: kanin_mark_move_1
	$("#kanin_container").addClass("kanin_mark_move_2");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop");
}

function kanin_mark_hop_2_efter() {
	console.log("kanin_mark_hop_2_efter");

	// Slut contaioner-ani: kanin_et_hop_til_hoejre
	$("#kanin_container").removeClass("kanin_mark_move_2");

	// Begynd container possition: kanin_mod_mark
	$("#kanin_container").addClass("kanin_mark_possition_2");

	// Slut sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").removeClass("kanin_mark_hop");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");
}

function kanin_mark_hop_3() {
	console.log("kanin_mark_hop_3");

	// Slut container possition: kanin_mod_mark
	$("#kanin_container").removeClass("kanin_mark_possition_2");

	// Begynd container animation: kanin_mark_move_1
	$("#kanin_container").addClass("kanin_mark_move_3");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop");
}
