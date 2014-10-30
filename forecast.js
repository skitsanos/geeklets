#!/usr/local/bin/node

'use strict';

var Forecast = require('forecast.io');

var app = {
	config: {
		apiKey: 'YOUR_FORECAST_IO_KEY'
	}
};

/*process.argv.forEach(function (val, index, array)
{
	console.log(index + ': ' + val);
});*/

var forecast = new Forecast({
	APIKey: app.config.apiKey
});

forecast.get(44.43250, 26.10389, {units: 'si'}, function (err, res, weather)
{
	if (err) console.dir(err);
	else
	{
		//console.dir(weather);
		var command = process.argv[2];
		if (command != undefined)
		{
			switch (command.toLowerCase())
			{
				case 'hourly-summary':
					console.log(weather.daily.summary);
					break;

				case 'daily-summary':
					console.log(weather.daily.summary);
					break;

				case 'temperature':
					console.log(weather.currently.temperature + '°C');
					break;
			}
		}
		else
		{
			console.log('missing parameter');
		}
	}
});
