const db = require('../db/db');

function initTownMailAddressesTable() {
    db.run(`
        CREATE TABLE IF NOT EXISTS town_mail_addresses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            postcode INTEGER NOT NULL,
            generalMailName TEXT NOT NULL,
            depEnvironmentMailName TEXT,
            mailDomain TEXT NOT NULL
        );
    `);

    db.get(`SELECT COUNT(*) AS count FROM town_mail_addresses`, (err, row) => {
        if (err) {
            console.error("Error checking town_mail_addresses table:", err.message);
            return;
        }
        if (!row) {
            console.error("No row returned when checking town_mail_addresses table.");
            return;
        }
        if (row.count === 0) {
            const insert = db.prepare(`
                INSERT INTO town_mail_addresses (postcode, generalMailName, depEnvironmentMailName, mailDomain)
                VALUES (?, ?, ?, ?)
            `);

            insert.run(9880,'gemeente',        '', 'aalter.be');
            insert.run(1500,'info',            '', 'halle.be');
            insert.run(1547,'info',            '', 'gemeentebever.be');
            insert.run(1560,'gemeente',        '', 'hoeilaart.be');
            insert.run(1570,'info',            '', 'pajottegem.be');
            insert.run(1600,'info',            '', 'sint-pieters-leeuw.be');
            insert.run(1620,'info',            '', 'drogenbos.be');
            insert.run(1630,'info',            '', 'linkebeek.be');
            insert.run(1640,'info',            '', 'sint-genesius-rode.be');
            insert.run(1652,'info',            '', 'beersel.be');
            insert.run(1670,'info',            '', 'pepingen.be');
            insert.run(1700,'info',            '', 'dilbeek.be');
            insert.run(1730,'info',            '', 'asse.be');
            insert.run(1740,'info',            '', 'ternat.be');
            insert.run(1745,'info',            '', 'opwijk.be');
            insert.run(1750,'info',            '', 'lennik.be');
            insert.run(1760,'info',            '', 'roosdaal.be');
            insert.run(1770,'1770',            '', 'liedekerke.be');
            insert.run(1780,'info',            '', 'wemmel.be');
            insert.run(1785,'info',            '', 'merchtem.be');
            insert.run(1790,'info',            '', 'affligem.be');
            insert.run(1800,'info',            '', 'vilvoorde.be');
            insert.run(1820,'info',            '', 'steenokkerzeel.be');
            insert.run(1830,'info',            '', 'machelen.be');
            insert.run(1840,'info',            '', 'londerzeel.be');
            insert.run(1850,'gemeentebestuur', '', 'grimbergen.be');
            insert.run(1861,'info',            '', 'meise.be');
            insert.run(1880,'info',            '', 'kapelle-op-den-bos.be');
            insert.run(1910,'info',            '', 'kampenhout.be');
            insert.run(1930,'info',            '', 'zaventem.be');
            insert.run(1950,'info',            '', 'kraainem.be');
            insert.run(1970,'info',            '', 'wezembeek-oppem.be');
            insert.run(1980,'info',            '', 'zemst.be');
            insert.run(2000,'info',            '', 'antwerpen.be');
            insert.run(2110,'info',            '', 'wijnegem.be');
            insert.run(2160,'info',            '', 'wommelgem.be');
            insert.run(2200,'info',            '', 'herenthals.be');
            insert.run(2220,'info',            '', 'heist-op-den-berg.be');
            insert.run(2230,'info',            '', 'herselt.be');
            insert.run(2235,'info',            '', 'hulshout.be');
            insert.run(2240,'info',            '', 'zandhoven.be');
            insert.run(2250,'info',            '', 'olen.be');
            insert.run(2260,'info',            '', 'westerlo.be');
            insert.run(2270,'info',            '', 'herenthout.be');
            insert.run(2275,'info',            '', 'lille.be');
            insert.run(2280,'info',            '', 'grobbendonk.be');
            insert.run(2290,'info',            '', 'vorselaar.be');
            insert.run(2300,'stad',            '', 'turnhout.be');
            insert.run(2310,'info',            '', 'rijkevorsel.be');
            insert.run(2320,'onthaal',         '', 'hoogstraten.be');
            insert.run(2330,'info',            '', 'merksplas.be');
            insert.run(2340,'info',            '', 'beerse.be');
            insert.run(2350,'gemeente',        '', 'vosselaar.be');
            insert.run(2360,'info',            '', 'oud-turnhout.be');
            insert.run(2370,'info',            '', 'arendonk.be');
            insert.run(2381,'info',            '', 'ravels.be');
            insert.run(2387,'gemeente',        '', 'baarle-hertog.be');
            insert.run(2390,'info',            '', 'malle.be');
            insert.run(2400,'2400',            '', 'gemeentemol.be');
            insert.run(2430,'info',            '', 'laakdal.be');
            insert.run(2440,'info',            '', 'geel.be');
            insert.run(2450,'info',            '', 'meerhout.be');
            insert.run(2460,'info',            '', 'kasterlee.be');
            insert.run(2470,'gemeentebestuur', '', 'retie.be');
            insert.run(2480,'info',            '', 'dessel.be');
            insert.run(2490,'info',            '', 'balen.be');
            insert.run(2500,'info',            '', 'lier.be');
            insert.run(2520,'info',            '', 'ranst.be');
            insert.run(2530,'info',            '', 'boechout.be');
            insert.run(2540,'informatie',      '', 'hove.be');
            insert.run(2547,'info',            '', 'lint.be');
            insert.run(2550,'info',            '', 'kontich.be');
            insert.run(2560,'info',            '', 'nijlen.be');
            insert.run(2570,'info',            '', 'duffel.be');
            insert.run(2580,'info',            '', 'putte.be');
            insert.run(2590,'info',            '', 'berlaar.be');
            insert.run(2620,'informatie',      '', 'hemiksem.be');
            insert.run(2627,'onthaal',         '', 'schelle.be');
            insert.run(2630,'info',            '', 'aartselaar.be');
            insert.run(2640,'onthaal',         '', 'mortsel.be');
            insert.run(2650,'lokaalbestuur',   '', 'edegem.be');
            insert.run(2800,'onthaal',         '', 'mechelen.be');
            insert.run(2820,'onthaal',         '', 'bonheiden.be');
            insert.run(2830,'info',            '', 'willebroek.be');
            insert.run(2840,'info',            '', 'rumst.be');
            insert.run(2845,'secretariaat',    '', 'niel.be');
            insert.run(2850,'info',            '', 'boom.be');
            insert.run(2860,'info',            '', 'skw.be');
            insert.run(2870,'info',            '', 'puursam.be');
            insert.run(2880,'gemeentebestuur', '', 'bornem.be');
            insert.run(2900,'info',            '', 'schoten.be');
            insert.run(2910,'info',            '', 'essen.be');
            insert.run(2920,'info',            '', 'kalmthout.be');
            insert.run(2930,'info',            '', 'brasschaat.be');
            insert.run(2940,'gemeente',        '', 'stabroek.be');
            insert.run(2950,'gemeente',        '', 'kapellen.be');
            insert.run(2960,'gemeente',        '', 'brecht.be');
            insert.run(2970,'info',            '', 'schilde.be');
            insert.run(2980,'gemeente',        '', 'zoersel.be');
            insert.run(2990,'info',            '', 'wuustwezel.be');
            insert.run(3000,'secretariaat',    '', 'leuven.be');
            insert.run(3020,'info',            '', 'herent.be');
            insert.run(3040,'onthaal',         '', 'huldenberg.be');
            insert.run(3054,'info',            '', 'oud-heverlee.be');
            insert.run(3060,'onthaal',         '', 'bertem.be');
            insert.run(3070,'info',            '', 'kortenberg.be');
            insert.run(3080,'info',            '', 'tervuren.be');
            insert.run(3090,'info',            '', 'overijse.be');
            insert.run(3110,'info',            '', 'rotselaar.be');
            insert.run(3120,'info',            '', 'tremelo.be');
            insert.run(3130,'info',            '', 'begijnendijk.be');
            insert.run(3140,'info',            '', 'keerbergen.be');
            insert.run(3150,'onthaal',         '', 'haacht.be');
            insert.run(3190,'info',            '', 'boortmeerbeek.be');
            insert.run(3200,'info',            '', 'aarschot.be');
            insert.run(3210,'info',            '', 'lubbeek.be');
            insert.run(3220,'info',            '', 'holsbeek.be');
            insert.run(3270,'info',            '', 'scherpenheuvel-zichem.be');
            insert.run(3290,'info',            '', 'diest.be');
            insert.run(3300,'info',            '', 'tienen.be');
            insert.run(3320,'info',            '', 'gemhoegaarden.be');
            insert.run(3350,'info',            '', 'linter.be');
            insert.run(3360,'info',            '', 'bierbeek.be');
            insert.run(3370,'info',            '', 'boutersem.be');
            insert.run(3380,'info',            '', 'glabbeek.be');
            insert.run(3390,'secretariaat',    '', 'tielt-winge.be');
            insert.run(3400,'info',            '', 'landen.be');
            insert.run(3440,'info',            '', 'zoutleeuw.be');
            insert.run(3450,'info',            '', 'geetbets.be');
            insert.run(3460,'info',            '', 'bekkevoort.be');
            insert.run(3470,'info',            '', 'kortenaken.be');
            insert.run(3500,'info',            '', 'hasselt.be');
            insert.run(3520,'info',            '', 'zonhoven.be');
            insert.run(3530,'info',            '', 'houthalen-helchteren.be');
            insert.run(3540,'info',            '', 'herk-de-stad.be');
            insert.run(3545,'info',            '', 'halen.be');
            insert.run(3550,'info',            '', 'heusden-zolder.be');
            insert.run(3560,'info',            '', 'lummen.be');
            insert.run(3570,'gemeentebestuur', '', 'alken.be');
            insert.run(3580,'info',            '', 'beringen.be');
            insert.run(3590,'info',            '', 'diepenbeek.be');
            insert.run(3600,'info',            '', 'genk.be');
            insert.run(3620,'info',            '', 'lanaken.be');
            insert.run(3630,'info',            '', 'maasmechelen.be');
            insert.run(3640,'info',            '', 'kinrooi.be');
            insert.run(3650,'info',            '', 'dilsen-stokkem.be');
            insert.run(3665,'gemeente',        '', 'as.be');
            insert.run(3670,'info',            '', 'oudsbergen.be');
            insert.run(3680,'info',            '', 'maaseik.be');
            insert.run(3690,'informatie',      '', 'zutendaal.be');
            insert.run(3700,'info',            '', 'tongerenborgloon.be');
            insert.run(3717,'info',            '', 'heers.be');
            insert.run(3740,'info',            '', 'bilzenhoeselt.be');
            insert.run(3770,'gemeentebestuur', '', 'riemst.be');
            insert.run(3798,'info',            '', 'devoor.be');
            insert.run(3800,'info',            '', 'sint-truiden.be');
            insert.run(3830,'info',            '', 'wellen.be');
            insert.run(3850,'info',            '', 'nieuwerkerken.be');
            insert.run(3870,'info',            '', 'heers.be');
            insert.run(3890,'info',            '', 'gingelom.be');
            insert.run(3900,'info',            '', 'gemeentepelt.be');
            insert.run(3920,'info',            '', 'lommel.be');
            insert.run(3930,'onthaal',         '', 'hamont-achel.be');
            insert.run(3940,'info',            '', 'hechtel-eksel.be');
            insert.run(3950,'gemeente',        '', 'bocholt.be');
            insert.run(3960,'onthaal',         '', 'bree.be');
            insert.run(3970,'info',            '', 'leopoldsburg.be');
            insert.run(3980,'info',            '', 'tessenderlo-ham.be');
            insert.run(3990,'info',            '', 'peer.be');
            insert.run(8000,'info',            '', 'brugge.be');
            insert.run(8020,'info',            '', 'oostkamp.be');
            insert.run(8210,'info',            '', 'zedelgem.be');
            insert.run(8300,'knokke-heist',    '', 'knokke-heist.be');
            insert.run(8340,'stadsbestuur',    '', 'damme.be');
            insert.run(8370,'stadhuis',        '', 'blankenberge.be');
            insert.run(8377,'info',            '', 'zuienkerke.be');
            insert.run(8400,'o-punt',          '', 'oostende.be');
            insert.run(8420,'gemeentebestuur', '', 'dehaan.be');
            insert.run(8430,'info',            '', 'middelkerke.be');
            insert.run(8450,'gemeentebestuur', '', 'bredene.be');
            insert.run(8460,'info',            '', 'oudenburg.be');
            insert.run(8470,'info',            '', 'gistel.be');
            insert.run(8480,'info',            '', 'ichtegem.be');
            insert.run(8490,'gemeentehuis',    '', 'jabbeke.be');
            insert.run(8500,'info',            '', 'kortrijk.be');
            insert.run(8520,'info',            '', 'kuurne.be');
            insert.run(8530,'info',            '', 'harelbeke.be');
            insert.run(8540,'info',            '', 'deerlijk.be');
            insert.run(8550,'info',            '', 'zwevegem.be');
            insert.run(8560,'info',            '', 'wevelgem.be');
            insert.run(8570,'info',            '', 'anzegem.be');
            insert.run(8580,'info',            '', 'avelgem.be');
            insert.run(8587,'info',            '', 'spiere-helkijn.be');
            insert.run(8600,'onthaal',         '', 'diksmuide.be');
            insert.run(8610,'info',            '', 'kortemark.be');
            insert.run(8620,'onthaal',         '', 'nieuwpoort.be');
            insert.run(8630,'stadsbestuur',    '', 'veurne.be');
            insert.run(8640,'info',            '', 'vleteren.be');
            insert.run(8647,'stadsbestuur',    '', 'lo-reninge.be');
            insert.run(8650,'info',            '', 'houthulst.be');
            insert.run(8660,'info',            '', 'depanne.be');
            insert.run(8670,'info',            '', 'koksijde.be');
            insert.run(8680,'info',            '', 'koekelare.be');
            insert.run(8690,'info',            '', 'alveringem.be');
            insert.run(8700,'stadspunt',       '', 'tielt.be');
            insert.run(8710,'info',            '', 'wielsbeke.be');
            insert.run(8720,'info',            '', 'dentergem.be');
            insert.run(8730,'gemeentehuis',    '', 'beernem.be');
            insert.run(8740,'gemeente',        '', 'pittem.be');
            insert.run(8750,'1750',            '', 'wingene.be');
            insert.run(8770,'gemeente',        '', 'ingelmunster.be');
            insert.run(8780,'gemeente',        '', 'oostrozebeke.be');
            insert.run(8790,'info',            '', 'waregem.be');
            insert.run(8800,'1788',            '', 'roeselare.be');
            insert.run(8810,'info',            '', 'lichtervelde.be');
            insert.run(8820,'info',            '', 'torhout.be');
            insert.run(8830,'info',            '', 'hooglede.be');
            insert.run(8840,'info',            '', 'staden.be');
            insert.run(8850,'info',            '', 'ardooie.be');
            insert.run(8860,'info',            '', 'lendelede.be');
            insert.run(8870,'communicatie',    '', 'izegem.be');
            insert.run(8880,'info',            '', 'ledegem.be');
            insert.run(8890,'info',            '', 'moorslede.be');
            insert.run(8900,'info',            '', 'ieper.be');
            insert.run(8920,'info',            '', 'langemark-poelkapelle.be');
            insert.run(8930,'info',            '', 'menen.be');
            insert.run(8940,'info',            '', 'wervik.be');
            insert.run(8956,'info',            '', 'heuvelland.be');
            insert.run(8957,'info',            '', 'mesen.be');
            insert.run(8970,'info',            '', 'poperinge.be');
            insert.run(8980,'info',            '', 'zonnebeke.be');
            insert.run(9000,'gentinfo',        '', 'stad.gent');
            insert.run(9060,'onthaal',         '', 'zelzate.be');
            insert.run(9070,'info',            '', 'destelbergen.be');
            insert.run(9080,'info',            '', 'lochristi.be');
            insert.run(9100,'info',            '', 'sint-niklaas.be');
            insert.run(9120,'info',            '', 'beveren.be');
            insert.run(9140,'info',            '', 'temse.be');
            insert.run(9160,'infopunt',        '', 'lokeren.be');
            insert.run(9170,'info',            '', 'sint-gillis-waas.be');
            insert.run(9190,'info',            '', 'stekene.be');
            insert.run(9200,'stadsbestuur',    '', 'dendermonde.be');
            insert.run(9220,'gemeente',        '', 'hamme.be');
            insert.run(9230,'wetteren',        '', 'wetteren.be');
            insert.run(9240,'info',            '', 'zele.be');
            insert.run(9250,'informatie',      '', 'waasmunster.be');
            insert.run(9255,'info',            '', 'buggenhout.be');
            insert.run(9260,'lokaalbestuur',   '', 'wichelen.be');
            insert.run(9270,'info',            '', 'laarne.be');
            insert.run(9280,'gemeentebestuur', '', 'lebbeke.be');
            insert.run(9290,'secretariaat',    '', 'berlare.be');
            insert.run(9300,'info',            '', 'aalst.be');
            insert.run(9340,'info',            '', 'lede.be');
            insert.run(9400,'stadsbestuur',    '', 'ninove.be');
            insert.run(9420,'gemeentebestuur', '', 'erpe-mere.be');
            insert.run(9450,'info',            '', 'haaltert.be');
            insert.run(9470,'lokaalbestuur',   '', 'denderleeuw.be');
            insert.run(9500,'info',            '', 'geraardsbergen.be');
            insert.run(9520,'gemeente',        '', 'sint-lievens-houtem.be');
            insert.run(9550,'info',            '', 'herzele.be');
            insert.run(9570,'communicatie',    '', 'lierde.be');
            insert.run(9600,'info',            '', 'ronse.be');
            insert.run(9620,'info',            '', 'zottegem.be');
            insert.run(9630,'info',            '', 'zwalm.be');
            insert.run(9660,'secretariaat',    '', 'brakel.be');
            insert.run(9667,'info',            '', 'horebeke.be');
            insert.run(9680,'info',            '', 'maarkedal.be');
            insert.run(9690,'info',            '', 'kluisbergen.be');
            insert.run(9700,'info',            '', 'oudenaarde.be');
            insert.run(9770,'info',            '', 'kruisem.be');
            insert.run(9790,'gemeente',        '', 'wortegem-petegem.be');
            insert.run(9820,'info',            '', 'merelbeke-melle.be');
            insert.run(9830,'gemeente',        '', 'sint-martens-latem.be');
            insert.run(9840,'info',            '', 'nazarethdepinte.be');
            insert.run(9850,'info',            '', 'deinze.be');
            insert.run(9860,'info',            '', 'oosterzele.be');
            insert.run(9870,'info',            '', 'zulte.be');
            insert.run(9890,'info',            '', 'gavere.be');
            insert.run(9900,'info',            '', 'eeklo.be');
            insert.run(9920,'info',            '', 'lievegem.be');
            insert.run(9940,'info',            '', 'evergem.be');
            insert.run(9960,'info',            '', 'assenede.be');
            insert.run(9970,'info',            '', 'kaprijke.be');
            insert.run(9980,'gemeente',        '', 'sint-laureins.be');
            insert.run(9990,'info',            '', 'maldegem.be');

            insert.finalize();
        }
    })
}

function getTownMailAddresses(postcode, callback) {
    db.get('SELECT * FROM town_mail_addresses WHERE postcode = ?', [postcode], callback);
}

module.exports = {
    initTownMailAddressesTable,
    getTownMailAddresses
}