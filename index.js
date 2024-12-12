const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeAuthor(url) {
	try {
		const { data: html } = await axios.get(url);
		const $ = cheerio.load(html);
		const jsonDataDiv = $(".js-store").attr("data-content");
		const jsonData = JSON.parse(jsonDataDiv);
		// console.log(jsonData.store.page.data.tab_view); // contains all info about the tablature
		console.log(jsonData.store.page.data.tab_view.wiki_tab.content);
		// .content --> lyrics with tabnames
		// .contributors
		// .strummings --> bpm, measures, etc.
		// .strummings.measures
		// .meta --> capo and tunning info!

		// const authorName = jsonData.store.page.data.tab.username;

		return authorName ? authorName : "Author not found";
	} catch (error) {
		console.error("Error scraping author:", error.message);
		return "An error occurred";
	}
}

// Example usage
const url =
	"https://tabs.ultimate-guitar.com/tab/5-seconds-of-summer/heartbreak-girl-chords-1231427";
scrapeAuthor(url).then(console.log);
