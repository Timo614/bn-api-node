const moment = require("moment");

const ticketing = {
	generateTicketTypePricing(
		{
			startPrice,
			pricingPeriods,
			eventDateString,
			...rest
		}) {
		const m = moment.utc();
		const nowMoment =
			m.minute() || m.second() || m.millisecond()
				? m.subtract(1, "hour").startOf("hour")
				: m.startOf("hour").subtract(1, "hour"); //Round down to the hour

		const startEndDifference = moment
			.utc(eventDateString)
			.local()
			.diff(nowMoment);

		//Break down time between now and event start time into periods
		const timeBetweenTicketPricing = Math.floor(
			startEndDifference / pricingPeriods
		);

		let ticket_price_start_date = nowMoment.clone();
		let ticket_pricing = [];
		for (let index = 0; index < pricingPeriods; index++) {
			const price_in_cents = startPrice + index * 500; //Add an extra $5 for later batches

			const start_date = ticket_price_start_date
				.utc()
				.format(moment.HTML5_FMT.DATETIME_LOCAL_MS);

			ticket_price_start_date.add(timeBetweenTicketPricing);

			const end_date = ticket_price_start_date
				.utc()
				.format(moment.HTML5_FMT.DATETIME_LOCAL_MS);

			const ticket_price = {
				name: `Batch ${index + 1}`,
				price_in_cents,
				start_date,
				end_date
			};
			ticket_pricing.push(ticket_price);
		}

		return {
			start_date: moment(nowMoment)
				.utc()
				.format(moment.HTML5_FMT.DATETIME_LOCAL_MS),
			end_date: eventDateString,
			price_in_cents: ticket_pricing[0].price_in_cents,
			ticket_pricing,
			...rest
		};
	}
};

module.exports = ticketing;
