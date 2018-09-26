const data = {
	"http://bam.sg/": {"name": "BAM! Tapas Sake Bar", "discount": "S$50++ set"}, 
	"http://dips.sg/": {"name": "DIBS Restaurant and Bar", "discount": "S$50 off"}, 
	"http://famouskitchen.sg/": {"name": "Famous Kitchen", "discount": "50% off"}, 
	"http://mail.obatignolles.com/": {"name": "O Batignolles Wine Bar & Bistrot", "discount": "50% off"}, 
	"http://www.charcoalthai.com.sg/": {"name": "Charcoal Thai", "discount": "50% off"}, 
	"http://www.orchidthai.com.sg/": {"name": "Orchid Thai", "discount": "S$50 off"}, 
	"http://www.pantler.com.sg/": {"name": "Pantler", "discount": "50% off"}, 
	"https://meatnchill.com/": {"name": "Meat n’ Chill", "discount": "S$50++"}, 
	"https://mouth.com.sg/": {"name": "Mouth Restaurant", "discount": "50% off"}, 
	"https://shop.kitchen.oldhongkong.com.sg/": {"name": "Old Hong Kong Kitchen", "discount": "S$50 off"}, 
	"https://singapore.capribyfraser.com/": {"name": "Caprilicious By Fraser Changi City/ Singapore", "discount": "50% off"}, 
	"https://www.cpk.com/": {"name": "California Pizza Kitchen", "discount": "50% off"}, 
	"https://www.eastocean.sg/": {"name": "East Ocean Teochew Restaurant", "discount": "10% off"}, 
	"https://www.kimskitchen.com.sg/": {"name": "3 Plus 1 by Kim's Kitchen", "discount": "S$50 off"}, 
	"https://www.millenniumhotels.com/": {"name": "Tien Court at Copthorne King’s Hotel Singapore", "discount": "S$50 off"}, 
	"https://www.passion-restaurant.com/": {"name": "Fu Lin Men Chinese Restaurant", "discount": "50% off"}
};
const href = window.location.href;
if (href in data) {


	// Create elements
	let containEl = document.createElement("div");
	let nameEl = document.createElement("div");
	let discountEl = document.createElement("div");
	let descEl = document.createElement("div");
	let ctaEl = document.createElement("div");
	let closeEl = document.createElement("div");

	// Create text nodes
	let nameText = document.createTextNode(data[href]["name"]);
	let discountText = document.createTextNode(data[href]["discount"]);
	let descText = document.createTextNode("Discount at Bank of China Gold:");
	let ctaText = document.createTextNode("CLAIM");
	let closeText = document.createTextNode("X");

	// Append text to elements
	nameEl.appendChild(nameText);
	discountEl.appendChild(discountText);
	descEl.appendChild(descText);
	ctaEl.appendChild(ctaText);
	closeEl.appendChild(closeText);

	// Set IDs
	containEl.id = "boc_gold_container";
	nameEl.id = "boc_gold_name";
	discountEl.id = "boc_gold_discount";
	descEl.id = "boc_gold_description";
	ctaEl.id = "boc_gold_cta";
	closeEl.id = "boc_gold_close";

	// Append elements to body
	containEl.appendChild(nameEl);
	containEl.appendChild(discountEl);
	containEl.appendChild(descEl);
	containEl.appendChild(ctaEl);
	containEl.appendChild(closeEl);
	document.body.appendChild(containEl);

	ctaEl.addEventListener("click", function(evt) {
		window.location.replace("https://boc.gold/?url=" + href);
	});
	closeEl.addEventListener("click", function(evt) {
		containEl.style.display = "none";
	});

	
}
