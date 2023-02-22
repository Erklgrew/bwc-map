

var config = {
    style: 'mapbox://styles/erikrenglish/clefoowuc001o01makytvt9gi',
    accessToken: 'pk.eyJ1IjoiZXJpa3JlbmdsaXNoIiwiYSI6ImNsOGJtM3RzdDBzbnEzcG4zdG41MXJ1NWgifQ.3Q2Dk3cNwK6Z0eNJ-vwjpA',
    showMarkers: true,
    markerColor: 'purple',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    projection: 'globe',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'ark-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'At the Pine Bluff Arsenal in Arkansas, workers loaded bioweapons agents onto bombs and into spray tanks. The facility handled dried anthrax bacteria, tularemia bacteria, and Venezuelan equine encephalitis virus. According to the late bioweapons expert Jonothan Tucker, Pine Bluff had a stockpile of munitions loaded with pathogens and simulants that numbered in the tens of thousands. Near the weapons facilities, boy scouts held “camporees” and hunters and fishermen wandered Pine Bluff’s 9,000 acres of woods—a “stone’s throw from the Western world’s deadliest collection of germs,” a 1971 New York Times story reported.',
            location: {
                center: [-92.01420, 34.21579],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'utah-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Meanwhile, out in the Utah desert at the Dugway Proving Grounds, the military ran thousands of open-air tests of viruses and bacteria, in addition to chemical weapons. The experiments didn’t always stay put on the range. Investigations found animals near Dugway with antigens to Venezuelan equine encephalomyelitis, a disease a 1995 Congressional report said had previously only been found among rats in Florida.',
            location: {
                center: [-111.54722, 39.54476],
                zoom: 6,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'global',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'The testing mishap was likely a result of a basic truth about bioweapons: They are extremely tricky things for militaries to handle. Heat and sunlight can kill germs. The wind can blow them off course. A contagious disease could boomerang, infecting whoever deploys it. And, of course, the mere thought of using germs to kill on a mass scale is revolting—including to some generals. While some military leaders have argued that the weapons are infective—making giving them up, as the United States has done, an easy choice—they’re quite capable of killing or sickening a lot of people.',
            location: {
                center: [-113.06986, 20],
                zoom: 1.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
          spinGlobe: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
       {
            id: 'dc-anth',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'In 1970, the World Health Organization estimated that 110 pounds of the aerosolized tularemia bacteria, if dispersed on a city of five million people, would kill 19,000 and sicken another 250,000. A 2006 study of anthrax estimated that releasing a little over two pounds of it on Washington, DC, could infect between 4,000 to 50,000 people.',
            location: {
                center: [-77.01459, 38.89382],
                zoom: 10.5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'soviet-anth',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Unless they are quickly treated with antibiotics, inhaled anthrax kills 90 percent of people infected. Indeed, the accidental release from the Sverdlovsk anthrax plant in the Soviet Union killed [at least 68] people downwind from the facility in 1979.',
            location: {
                center: [60.61520, 56.84776],
                zoom: 3,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'japan-731',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'During World War II, the Japanese tested and used biological weapons on a large scale. Planes flew over Chinese towns dropping bombs full of plague-infested fleas. Though crude, the  attacks sparked reports of outbreaks. In the Japanese Imperial Army’s Unit 731, surgeons conducted vivisections to see how biological agents affected patients. Surgeries were done without anesthetics because, as one wartime medical assistant who subsequently became a farmer explained to The New York Times in 1995, that “might have an effect on the results.” One former Japanese military doctor later recounted sending samples of dysentery and typhoid bacillus to Japanese biowarfare units.',
            location: {
                center: [138.37129, 36.30781],
                zoom: 4,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
