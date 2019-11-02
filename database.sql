CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (80) NOT NULL,
    "admin" boolean DEFAULT false,
    "avatar" VARCHAR (100) NULL
);


INSERT INTO "user" ("username", "password", "admin" )
VALUES ('Marty', '12345678', true);

CREATE TABLE "location" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "name" VARCHAR (80) NOT NULL,
    "time" VARCHAR (80),
    "detail" VARCHAR (200),
    "URL" VARCHAR (100),
    "lat" Decimal(9,6), 
    "lng" Decimal(9,6), 
    "approve" BOOLEAN DEFAULT false
);


INSERT INTO "location" ("user_id", "name", "time", "detail", "URL", "lat", "lng" )
VALUES 
( 1, 'Eastside Eat and Drink', '4:00pm-6:00pm', 'Daily', 'https://eastsidempls.com', 44.979877, -93.264011),
( 1, 'Bar Zia', '3:00pm-6:00pm', 'Monday-Friday', 'https://www.barzia.net', 44.977274, -93.263245),
( 1, 'The Depot Tavern', '11:00am-6:00pm', 'Daily', 'https://thedepottavern.com', 44.978511, -93.275574),
( 1, 'The Pourhouse (Downtown)', '3:00pm-6:00pm & 9:00pm-11:00pm', 'Daily', 'https://thepourhousempls.com/venue/downtown/', 44.979462, -93.272066),
( 1, 'HopCat', '3:00pm-6:00pm', 'Monday-Thursday', 'https://hopcat.com/minneapolis', 44.978753, -93.269764),
( 1, 'Bus Stop', '3:00pm-6:00pm & 9:00pm-1:00am', 'Monday-Friday', 'https://www.busstopbrewhouse.com', 44.976349, -93.260750),
( 1, 'EagleBOLT bar', '2:00pm-6:00pm', 'Monday-Friday', 'https://www.eagleboltbar.com/', 44.978382, -93.260870),
( 1, 'Zen Box', '5:00pm-6:00pm & 9:00pm-10:00pm', 'Monday-Friday', 'https://www.zenbox.com/', 44.978428, -93.259529),
( 1, 'Grumpy`s NE', '1:00pm-6:00pm', 'Monday-Friday', 'https://www.grumpys-bar.com', 45.010077, -93.261774),
( 1, '331 Club', '1:00pm-6:00pm', 'Monday-Sunday', 'https://331club.com', 45.001125, -93.262939),
( 1, 'The Republic', '4:00pm-6:00pm & 10:00pm-12:00am', 'Daily', 'http://republicmn.com/', 44.973229, -93.246951),
( 1, '508 Bar & Restaurant', '11:00am-6:00pm & 9:00pm-12:00am', 'Monday-Friday & Sunday-Thursday', 'http://www.bar508.com/', 44.980204, -93.27432),
( 1, 'Crooked Pint Ale House', '3:00pm-6:00pm & 9:30pm-12:00am', 'ok', 'https://www.crookedpint.com/downtown-minneapolis/', 44.977274, -93.263245),
( 1, 'Bullwinkle’s Saloon', '3:00pm-7:00pm', 'Daily', 'http://www.bullwinklesaloon.com/', 44.972975, -93.247975),
( 1, 'The Corner Bar', '4:00pm-7:00pm', 'Daily', 'http://thecorner.bar/', 44.972846, -93.2477),
( 1, 'Whitey`s Old Town Saloon', '4:00pm-6:00pm', 'Monday-Friday', 'http://whiteyssaloon.com/minneapolis/', 44.988338, -93.25455),
( 1, 'Pizza Luce (Seward)', '3:00pm-6:00pm & 10:00pm-2:00am', 'Daily', 'http://www.pizzaluce.com/', 44.962987, -93.240445),
( 1, 'Acadia', '4:00pm-7:00pm', 'Monday-Friday', 'http://www.acadiapub.com/', 44.970245, -93.246984),
( 1, 'Mac`s Industrial Sports Bar', '3:00pm-7:00pm', 'Monday-Friday', 'http://www.macsindustrial.com/', 44.987971, -93.255552),
( 1, 'Nye`s Bar', '4:00pm-6:00pm', 'Monday-Friday', 'http://www.nyesbar.com/', 44.987091, -93.258278),
( 1, 'Dusty`s Bar', '2:00pm-6:00pm', 'Monday-Friday', 'http://dustysbaranddagos.com/?utm_source=local&utm_medium=organic&utm_campaign=gmb', 45.000766, -93.270169),
( 1, 'Mayslack`s', '3:00pm-6:00pm', 'Monday-Friday', 'http://www.mayslacksbar.com/', 45.002939, -93.261687),
( 1, 'NE Moose Bar & Grill', '3:00pm-7:00pm', 'Monday-Friday', 'http://www.moosene.com/', 44.994904, -93.252878),
( 1, 'Pizza Luce (Downtown)', '3:00pm-6:00pm & 10:00pm-12:00am', 'Daily', 'https://www.pizzaluce.com/', 44.981751, -93.27355),
( 1, 'The Loop - Minneapolis', '2:00pm-6:00pm', 'Monday-Friday', 'http://minneapolis.looprestaurants.com/', 44.987281, -93.276142),
( 1, 'Bunker`s Music Bar & Grill', '3:00pm-7:00pm', 'Monday-Friday', 'http://www.bunkersmusic.com/', 44.988604, -93.278703),
( 1, 'Brothers Bar & Grill', '3:00pm-8:00pm', 'Monday-Saturday', 'http://www.brothersbar.com/', 44.98066, -93.273751),
( 1, '508 Bar & Restaurant', '11:00am-6:00pm', 'Monday-Friday', 'http://www.bar508.com/', 44.980204, -93.27432),
( 1, 'Gluek`s Restaurant & Bar', '3:00pm-5:00pm', 'Monday-Friday', 'http://www.glueks.com/', 44.979303, -93.274181),
( 1, 'Lyon`s Pub', '3:00pm-6:00pm', 'Monday-Friday', 'http://lyonspub.com/', 44.97862, -93.272803),
( 1, 'Last Call Bar & Grill', '3:00pm-7:00pm', 'Monday-Saturday', 'http://lastcallmn.com/', 44.980443, -93.273292),
( 1, 'The Loon Cafe', '3:30pm-6:30pm', 'Monday-Friday', 'http://looncafe.com/', 44.980393, -93.273961),
( 1, 'Kieran`s Irish Pub', '2:00pm-6:00pm', 'Daily', 'http://www.kierans.com/', 44.979132, -93.274692),
( 1, 'O`Donovan`s Irish Pub', '3:00pm-6:00pm', 'Daily', 'http://www.odonovans.com/', 44.978652, -93.276557),
( 1, 'Mackenzie Pub', '2:00pm-6:00pm', 'Monday-Friday', 'http://www.mackenziepub.com/', 44.976244, -93.277551),
( 1, 'The Saloon', '12:00pm-9:00pm', 'Daily', 'http://www.saloonmn.com/', 44.976673, -93.276996),
( 1, 'The Bulldog Downtown', '3:00pm-6:00pm & 11:00pm-1:00am', 'Monday-Friday', 'http://thebulldogdowntown.com/', 44.974883, -93.27944),
( 1, 'The Bulldog Uptown', '3:00pm-6:00pm', 'Monday-Friday', 'http://www.thebulldoguptown.com/', 44.955899, -93.287755),
( 1, 'Brit`s Pub', '4:30pm-6:00pm', 'Monday-Friday', 'https://britspub.com/', 44.972818, -93.275923),
( 1, 'Constantine', '5:00pm-9:00pm', 'Monday-Friday', 'http://constantinempls.com/', 44.971354, -93.272683),
( 1, 'Prohibition Bar', '4:00pm-7:00pm', 'Monday-Friday', 'https://thelivingroom-prohibition.com/', 44.974453, -93.271589),
( 1, 'Barrio', '3:00pm-6:00pm', 'Monday-Friday', 'http://www.barriotequila.com/', 44.974171, -93.274161);
( 1, 'Erik The Red Bar', '3:00pm-6:00pm', 'Monday-Friday', 'http://www.eriktheredbar.com/', 44.972938, -93.260441),
( 1, 'Maxwell`s American Pub', '3:00pm-6:00pm', 'Daily', 'http://www.maxwellsbar.net/', 44.974606, -93.251773),
( 1, 'Day Block Brewing Company', '2:00pm-6:00pm', 'Tuesday-Friday', 'https://www.dayblockbrewing.com/', 44.975189, -93.253061),
( 1, 'Darby`s Pub & Grill', '3:00pm-6:00pm', 'Monday-Friday', 'http://www.darbysmpls.com/', 44.984726, -93.275694),
( 1, 'The Bad Waitress', '3:00pm-6:00pm', 'Monday-Friday', 'http://thebadwaitress.com/', 44.955727, -93.27766),
( 1, 'Icehouse', '3:00pm-6:00pm', 'Monday-Friday', 'http://www.icehousempls.com/', 44.956323, -93.278061),
( 1, 'CC Club', '3:00pm-7:00pm & 9:00pm-10:00pm', 'Monday-Thursday', 'http://www.ccclubbar.com/', 44.955388, -93.288444),
( 1, 'Nightingale', '4:00pm-6:00pm & 11:00pm-1:00am', 'Daily', 'http://nightingalempls.com/', 44.955787, -93.287689),
( 1, 'Leaning Tower of Pizza', '4:00pm-6:00pm & 10:30pm-12:30am', 'Daily', 'http://leaningtowermpls.com/', 44.959259, -93.288362),
( 1, 'Liquor Lyle`s', '4:00pm-6:00pm & 11:00pm-1:00am', 'Monday-Thursday', 'https://www.liquorlylesmn.com/', 44.962066, -93.291654),
( 1, 'Nico`s Taco and Tequila Bar', '4:00pm', 'Daily', 'http://www.nicostacobar.com/', 44.956775, -93.296241),
( 1, 'Red Cow North Loop', '3:00pm-6:00pm', 'Monday-Friday', 'http://redcowmn.com/', 44.983648, -93.269682),
( 1, 'Red Cow Uptown', '3:00pm-6:00pm', 'Monday-Friday', 'http://redcowmn.com/', 44.954764, -93.297477),
( 1, 'Williams Uptown Pub & Peanut Bar', '4:00pm-7:00pm', 'Monday-Friday', 'http://www.williamsminneapolis.com/', 44.949518, -93.298101),
( 1, 'Blue Door Pub — Lyn-Lake', '2:00pm-6:00pm & 9:00pm-2:00am', 'Daily', 'https://www.thebdp.com/', 44.948009, -93.288406),
( 1, 'Herkimer Pub and Brewery', '3:00pm-6:00pm', 'Daily', 'http://www.theherkimer.com/', 44.949157, -93.288378),
( 1, 'Muddy Waters Bar & Eatery', '3:00pm-5:00pm & 11:00pm-2:00am', 'Daily', 'http://www.muddywatersmpls.com/', 44.949225, -93.287703);
( 1, 'Hickory N Hops', '3:00pm-6:00pm & 10:00pm-11:00pm', 'Daily', 'http://hickorynhops.com/', 444.949131, -93.28772);