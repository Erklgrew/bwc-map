

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
          legend: 'Pine Bluff Arsenal, Arkansas',
            image: 'https://thebulletin.org/wp-content/uploads/2023/03/max1200.jpg',
          caption: 'Pine Bluff Arsenal assembly line; 1940s. (Pine Bluff Arsenal)',
            description: 
'At the Pine Bluff Arsenal in Arkansas, workers loaded bioweapons agents onto bombs and into spray tanks. The facility <a href="https://wmdcenter.ndu.edu/Portals/97/Documents/Publications/Case%20Studies/cswmd_cs1.pdf">handled</a> dried anthrax bacteria, tularemia bacteria, Venezuelan equine encephalitis virus, and other pathogens in its biowarfare stockpiles, according to the late bioweapons expert Jonathan Tucker. The military stored tens of thousands of loaded munitions at the site.',
          location: {
                center: [-92.08558727916851, 34.30250709779775],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'us-county',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'us-county',
                     opacity: 0,
                 }
            ]
        },
      {
            id: 'ark-2',
            alignment: 'left',
            hidden: false,
            title: '',
                  legend: 'Pine Bluff Arsenal, Arkansas',
            image: '',
          caption: '',
            description: 
'Near the weapons facilities, boy scouts held “camporees,” and hunters and fishermen <a href="https://www.nytimes.com/1971/06/10/archives/war-germ-facility-viewed-as-an-asset-by-pine-bluff.html">wandered</a> Pine Bluff’s 9,000 acres of woods—a “stone’s throw from the Western world’s deadliest collection of germs,” a 1971 <em>New York Times</em> story reported.',
        location: {
                center: [-92.08558727916851, 34.30250709779775],
                zoom: 12,
                pitch: 60,
                bearing: 90,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
              {
               layer: 'mapbox-satellite',
                    opacity: 0,}
            ]
        },
        {
            id: 'utah-1',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: 'Dugway Proving Ground, Utah',
            image: 'https://upload.wikimedia.org/wikipedia/en/5/5c/A0112shee.jpg?20080318160501',
            caption: 'Dead sheep owned by Ray Peck in Skull Valley, 1968. (Wikimedia Commons)',
            description: 
'Meanwhile, out in the Utah desert at the Dugway Proving Ground, the military ran thousands of open-air tests using viruses and bacteria in addition to chemical weapons. The experiments didn’t always stay on the range. Thousands of sheep <a href="https://www.smithsonianmag.com/history/how-death-6000-sheep-spurred-american-debate-chemical-weapons-cold-war-180968717/">died in 1968</a> after a malfunction caused a plane carrying nerve agent to release it at a higher altitude than planned, contaminating grazing lands 27 miles away. According to a 1994 US Senate staff report, investigations also found that animals near Dugway had antigens to Venezuelan equine encephalomyelitis, suggesting they had been exposed due to work at Dugway. The disease had previously only been found among rats in Florida.',            
          location: {
                center: [-111.43082616715316, 39.50528244745277],
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
            id: 'utah-2',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: 'Dugway Proving Ground, Utah',
            image: '',
            description: 
'The latter testing mishap was likely a result of a basic truth about bioweapons: They are extremely tricky things for militaries to handle. Environmental factors like UV radiation can <a href="https://thebulletin.org/2022/03/amid-false-russian-allegations-of-us-biolabs-in-ukraine-its-worth-asking-what-is-a-bioweapon/#post-heading">affect</a> pathogens. The wind can blow them off course. A contagious disease could boomerang, infecting whoever deploys it, or it could <a href="https://www.belfercenter.org/sites/default/files/legacy/files/88506_stern.pdf">mutate</a> after its release. Despite these obvious drawbacks, they’re likely quite capable of killing or sickening a lot of people.',
          location: {
                center: [-113.1769207068459, 40.19904957506993],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                speed: 1, // make the flying slow

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
          spinGlobe: true,
            callback: '',
            onChapterEnter: [
              {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
              {
               layer: 'mapbox-satellite',
                    opacity: 0,
              }
            ]
        },
       
          {
            id: 'soviet-anth',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: 'Sverdlovsk, Soviet Union<br>(now Yekaterinburg, Russia)',
            image: '',
            description: 
'In 1970, the World Health Organization <a href="https://www.centerforhealthsecurity.org/our-work/publications/francisella-tularensis-fact-sheet#:~:text=Tularemia%20as%20a%20Biological%20Weapon,-F.&amp;text=F.-,tularensis%20is%20considered%20to%20be%20a%20serious%20potential%20bioterrorist%20threat,cause%20serious%20illness%20and%20death.">estimated</a> that 110 pounds of tularemia bacteria, if aerosolized and dispersed on a city of five million people, would kill 19,000 and sicken another 250,000.',
            location: {
                center: [60.61520, 56.84776],
                zoom: 3,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
               layer: 'mapbox-satellite',
                    opacity: 0,
              }
            ],
            onChapterExit: []
        },
        {
            id: 'soviet-anth-2',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: 'Sverdlovsk, Soviet Union<br>(now Yekaterinburg, Russia)',
            image: '',
            description: 
'Indeed, the accidental release from the Sverdlovsk anthrax plant in the Soviet Union<a href="https://www.nytimes.com/2021/06/20/world/europe/coronavirus-lab-anthrax.html"> killed</a> more than 60 people downwind from the facility in 1979.',            location: {
                center: [60.5816382970626, 56.77801631432103],
                zoom: 15,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
              {
               layer: 'mapbox-satellite',
                    opacity: 0,
              }
            ]
        },
         {
            id: 'japan-731',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 
'During World War II, the Japanese Imperial Army tested and used biological weapons on a large scale. Planes flew over China dropping bombs full of plague-infested fleas. Though crude, the  attacks sparked reports of outbreaks, <a href="https://www.nytimes.com/1995/03/17/world/unmasking-horror-a-special-report-japan-confronting-gruesome-war-atrocity.html">according</a> to a 1995 <em>New York Times</em> report. Medical staff in China would conduct vivisections, sometimes without anesthetics, to see how biological agents affected patients.',
           location: {
                center: [126.63577517899836, 45.61282649279784],
                zoom: 2.5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
               layer: 'mapbox-satellite',
                    opacity: 0,
              }
            ],
            onChapterExit: [
              {
               layer: 'mapbox-satellite',
                    opacity: 1,
              }
            ]
        },
      {
            id: 'japan-731-2',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: 'Sverdlovsk, Soviet Union<br>(now Yekaterinburg, Russia)',
            image: '',
            description: 
'As one wartime medic with the army’s notorious Unit 731 told the <em>Times</em>, anesthetics “might have an effect on the results.” A former Japanese military doctor later recounted <a href="https://web.archive.org/web/20150505083740/http:/www.japantimes.co.jp/news/2007/10/24/reference/vivisectionist-recalls-his-day-of-reckoning/#.VUiBYOzP30p">sending</a> samples of typhoid bacillus to Japanese troops. The test tubes, the doctor was told, would be used to poison wells.',
        location: {
                center: [126.63055093524075, 45.606492923206744],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                     layer: 'mapbox-satellite',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
              {
               layer: 'mapbox-satellite',
                    opacity: 0,}]
        },
    ]
};
