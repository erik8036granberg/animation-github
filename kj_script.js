/*
Kaninen og jægeren
Erik Granberg

Elementer:
#kanin_container
#kanin_sprite

Animationer:
.move_in
.walk
.fall

Lyde:
*/

//  Siden er loadet

$(window).on("load", startskaerm);

function startskaerm() {
	console.log("startskaerm - siden er klar med javascript");

	//	Startskærm vises
	$("#start_knap").removeClass("skjult");
	$("#start_knap").addClass("synlig");
	$("#start_skilt").removeClass("skjult");
	$("#start_skilt").addClass("synlig");
	$("#start_nedtoning").removeClass("skjult");
	$("#start_nedtoning").addClass("synlig");

	//	Søm-måtte knapper
	$("#knap_1_startskaerm").on("click", startskaerm);
	$("#knap_2_kanin_hop_ind").on("click", kanin_hop_ind);
	$("#knap_3_jaeger_drikker").on("click", jaeger_drikker);
	$("#knap_4_jaeger_falder_i_soevn").on("click", jaeger_falder_i_soevn);
	$("#knap_5_jaeger_sover").on("click", jaeger_sover);
	$("#knap_6_kanin_blinker").on("click", kanin_blinker);
	$("#knap_7_taktikvalg").on("click", taktikvalg);

	// Jæger sidder på kasse
	$("#jaeger_container").addClass("jaeger_sidder");
	$("#jaeger_sprite").addClass("jaeger_sidder_stille");
}

//  Der er klikket på startknappen

function kanin_hop_ind() {
	console.log("kanin_hop_ind - til træ");

	//	Startskærm skjules
	$("#start_knap").removeClass("synlig");
	$("#start_knap").addClass("skjult");
	$("#start_skilt").removeClass("synlig");
	$("#start_skilt").addClass("skjult");
	$("#start_nedtoning").removeClass("synlig");
	$("#start_nedtoning").addClass("skjult");

	// Start flytte-animation: kanin_ind-fra-siden
	$("#kanin_container").addClass("kanin_ind-fra-siden");

	// Start sprite-animation: kanin_hop_fremad
	$("#kanin_sprite").addClass("kanin_hop_fremad");

	//  .kanin_ind-fra-siden er færdig
}

function jaeger_drikker() {
	console.log("jaeger_drikker");

	//	Fjern tidligere klasser og sæt stilframes
	$("#kanin_container").removeClass("kanin_ind_fra_siden");
	$("#kanin_container").addClass("kanin_bag_trae");
	$("#kanin_sprite").removeClass("kanin_hop_fremad");
	$("#kanin_sprite").addClass("kanin_staar");

	// Start sprite-animation: Jægerdrikker
	$("#jaeger_sprite").removeClass("jaeger_sidder_stille");
	$("#jaeger_sprite").addClass("jaeger_drikker");
}

//  .jaeger_drikker er færdig

function jaeger_falder_i_soevn() {
	console.log("jaeger_falder_i_soevn");

	// Start sprite-animation: jæger falder i søvn
	$("#jaeger_sprite").addClass("jaeger_falder_i_soevn");
	$("#jaeger_sprite").removeClass("jaeger_drikker");
}

//  .jaeger_drikker er færdig

function jaeger_sover() {
	console.log("jaeger_sover");

	// Start sprite-animation: jæger falder i søvn
	$("#jaeger_sprite").addClass("jaeger_sover");
	$("#jaeger_sprite").removeClass("jaeger_falder_i_soevn");
}

//  .jaegeren sover - skift efter lyd?????

function kanin_blinker() {
	console.log("kanin_blinker");

	// Start sprite-animation: jæger falder i søvn
	$("#kanin_sprite").addClass("kanin_blinker");
	$("#kanin_sprite").removeClass("kanin_staar");
}

// .Der skal træffes et valg

function taktikvalg() {
	console.log("taktikvalg");

	//	Taktikvalg-skilt vises
	$("taktik-valg-skilt").removeClass("skjult");
	$("taktik-valg-skilt").addClass("synlig");
}
