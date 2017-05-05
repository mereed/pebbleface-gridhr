module.exports = [
  {
    "type": "heading",
    "defaultValue": "GridHR Configuration"
  },
     {
        "type": "text",
        "defaultValue": "<h6>A white button = OFF, an orange button = ON</h6>",
      },
	
 
	
	  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "<h5>Time & Date Colours</h5>",
	//	"capabilities": ["COLOR"],
      },
      {
        "type": "color",
        "messageKey": "hour_colour",
        "defaultValue": "0xFFFFFF",
        "label": "Top row Colour"
      },
      {
        "type": "color",
        "messageKey": "min_colour",
        "defaultValue": "0xFFFFFF",
        "label": "Bottom row Colour"
      },
		{
        "type": "toggle",
        "messageKey": "invert",
        "label": "Invert",
        "defaultValue": false
      }
    ]
  },
		
	{
    "type": "section",
    "items": [		
	{
        "type": "heading",
        "defaultValue": "<h5>Row Display</h5>"
	},	
 	{
  "type": "radiogroup",
  "messageKey": "row2",
//  "defaultValue": 0,
  "label": "ROW 2 show,",
  "options": [
    { 
      "label": "Day Name",
      "value": 0
    },
    { 
      "label": "Week Number",
      "value": 1
    },
	{ 
      "label": "Battery Percent",
      "value": 2
	},	
	]
	},
	{
   	 "type": "toggle",
 	 "messageKey": "row3",
 	 "defaultValue": true,
 	 "label": "Show weather on ROW 3,",
	},
	  {
        "type": "text",
		  "defaultValue": "<h6>For a Pebble2, HR will display any time it's active in place of the MONTH on ROW 4. Other pebbles will always show the DATE. For the P2, HR can be turned off from within the pebble app.</h6>",
      },
	      {
        "type": "toggle",
        "messageKey": "WeatherIsFahrenheit",
        "label": "Celcius (off), Fahrenheit (on)",
        "defaultValue": true
      }
	]
},	

		
  {
    "type": "section",
    "items": [	
 	  {
        "type": "heading",
        "defaultValue": "<h6>Vibration</h6>"
      },
      {
        "type": "toggle",
        "messageKey": "bluetoothvibe",
        "label": "Bluetooth",
        "defaultValue": false
      },
	  {
        "type": "toggle",
        "messageKey": "hourlyvibe",
        "label": "Each hour",
        "defaultValue": false
	  },
    ]
  },
	
	
  {
        "type": "text",
        "defaultValue": "<h6>Please consider making a <a href='https://www.paypal.me/markchopsreed'>small donation here</a>, if you find this watchface useful. Thankyou.</h6>",
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];