const moment = require("moment");

const ticketing = {
	generateTicketTypePricing({
		name,
		startPrice,
		pricingPeriods,
		eventDateString,
		capacity
	}) {
		const nowMoment = moment.utc();
		const startEndDifference = moment
			.utc(eventDateString, moment.HTML5_FMT.DATETIME_LOCAL_MS)
			.diff(nowMoment);

		//Break down time between now and event start time into periods
		const timeBetweenTicketPricing = Math.floor(
			startEndDifference / pricingPeriods
		);

		let ticket_price_start_date = moment.utc();
		let ticket_pricing = [];
		for (let index = 0; index < pricingPeriods; index++) {
			const price_in_cents = startPrice + index * 500; //Add an extra $5 for later batches

			const start_date = ticket_price_start_date.format(
				moment.HTML5_FMT.DATETIME_LOCAL_MS
			);

			ticket_price_start_date.add(timeBetweenTicketPricing);

			const end_date = ticket_price_start_date.format(
				moment.HTML5_FMT.DATETIME_LOCAL_MS
			);

			const ticket_price = {
				name: `Batch ${index + 1}`,
				price_in_cents,
				start_date,
				end_date
			};
			ticket_pricing.push(ticket_price);
		}

		return {
			name,
			capacity,
			start_date: moment.utc().format(moment.HTML5_FMT.DATETIME_LOCAL_MS),
			end_date: eventDateString,
			ticket_pricing
		};
	}
};

module.exports = ticketing;