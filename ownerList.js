let ownerListArray = [
    {
        owner: 'Ephraim Dennett',
        monthBought: null,
        yearBought: 1730,
        monthSold: null,
        yearSold: 1741,
        source: 'Dennett Family Lineage',
        bio: "Ephraim Dennett was born on the 2nd of August, 1689, to John and Amy (Sherburne) Dennett, in the 'Beehive' house on the hill above this home. He lived with his mother until she died. Ephraim controlled the land on the main Dennett property along today's Dennett Street. Ephraim married Catherine Wise and had at least five children, of whom Ephraim Jr, born July 22, 1718, was the eldest. Ephraim Dennett became the most politically active of the Dennetts. He served as a selectman from 1715 to 1718 and representative to the legislative house from 1718 to 1728. Newington was separated from Portsmouth in 1713, and Ephraim's land was on the edge of Portsmouth. In 1732, Ephraim was appointed to the Governor's Council at the time that Richard Waldron controlled politics, from the death of Lt. Governor John Wentworth until Benning Wentworth was named Royal Governor of the 'old colony.",
    },
    {
        owner: 'John Dennett',
        monthBought: null,
        yearBought: 1741,
        monthSold: null,
        yearSold: 1787,
        source: 'Dennett Family Lineage',
        bio: 'John Dennett was born on 15 October 1716, in the Beehive House up on the hill. John was the son of Ephraim and Catherine (Wise) Dennett. John married Phoebe Bartlett in February 1739. They were the parents of at least 1 son and 2 daughters.',
    },
    {
        owner: 'Nathaniel Dennett',
        monthBought: null,
        yearBought: 1787,
        monthSold: null,
        yearSold: 1808,
        source: 'Dennett Family Lineage',
        bio: 'When Nathaniel Dennett was born in 1740, in Portsmouth, his father, John Dennett, was 24 and his mother, Phebe Bartlett, was 19. He married Margrey Rogers on 2 January 1762, in Kittery, York, Massachusetts Bay Colony, British Colonial America. They were the parents of at least 1 son and 1 daughter. He died on 15 April 1808, in Portsmouth at the age of 68, and was buried in Proprietors Burying Ground off South Street.',
    },
    {
        owner: 'Ephraim Dennett',
        monthBought: null,
        yearBought: 1808,
        monthSold: null,
        yearSold: 1832,
        source: 'Dennett Family Lineage',
        bio: 'Ephraim Dennett was born 28 December 1785 in Portsmouth. He married Abigail Paul on 16 August 1809. Ephraim died in 1837.',
    },
    {
        owner: 'George W Dennett',
        monthBought: null,
        yearBought: 1832,
        monthSold: "June",
        yearSold: 1866,
        source: 'Dennett Family Lineage',
        bio: 'George was born 15 August 1814. After selling the house in 1886, he died on 3 January 1879 in Wakefield, MA',
    },
    {
        owner: 'George and Ellen Clark',
        monthBought: "June",
        yearBought: 1866,
        monthSold: "March",
        yearSold: 1882,
        source: 'Rockingham County Deeds',
        bio: null
    },
    {
        owner: 'Mary and Clarence Nutter',
        monthBought: "March",
        yearBought: 1882,
        monthSold: "September",
        yearSold: 1913,
        source: 'Rockingham County Deeds',
        bio: "In 1910, Mary Nutter, age 74, lived here with her 48 year old single son, Clarence, who was employed as a janitor.",
    },
    {
        owner: 'Ida Seymour',
        monthBought: "September",
        yearBought: 1913,
        monthSold: "July",
        yearSold: 1919,
        source: 'Rockingham County Deeds',
        bio: "",
    },
    {
        owner: 'Plummer B. Smith',
        monthBought: "July",
        yearBought: 1919,
        monthSold: "June",
        yearSold: 1941,
        source: 'Rockingham County Deeds',
        bio: "In 1905, Plummer Smith was a painter at the Navy Yard. According to the 1930 census, Plummer B Smith, age 72, lived here with his wife Izetta, age 71. He was working od jobs including as a painter. Plummer died 24 February 1934 of cancer. Izetta died in 1936."
    },
    {
        owner: 'Ruth Chase',
        monthBought: "June",
        yearBought: 1941,
        monthSold: "April",
        yearSold: 1945,
        source: 'Rockingham County Deeds',
        bio: null
    },
    {
        owner: 'Dorothy Hart',
        monthBought: "April",
        yearBought: 1945,
        monthSold: "September",
        yearSold: 1956,
        source: 'Rockingham County Deeds',
        bio: null
    },
    {
        owner: 'Elizabeth Anne Virgil',
        monthBought: "September",
        yearBought: 1956,
        monthSold: "February",
        yearSold: 1971,
        source: 'Rockingham County Deeds',
        bio: ''
    },
    {
        owner: 'Bernard Hiatt',
        monthBought: "February",
        yearBought: 1971,
        monthSold: "August",
        yearSold: 1975,
        source: 'Rockingham County Deeds',
        bio: null
    },
    {
        owner: 'Robert and Helen Dysinger',
        monthBought: "August",
        yearBought: 1975,
        monthSold: "November",
        yearSold: 1976,
        source: 'Rockingham County Deeds',
        bio: null
    },
    {
        owner: 'Stockton and Elizabeth Warnock',
        monthBought: "November",
        yearBought: 1976,
        monthSold: "October",
        yearSold: 1977,
        source: 'Rockingham County Deeds',
        bio: null
    },
    {
        owner: 'John and Joan Rice',
        monthBought: "October",
        yearBought: 1977,
        monthSold: "December",
        yearSold: 1985,
        source: 'Rockingham County Deeds',
        bio: "",
        indepth: ""
    },
    {
        owner: 'Scott and MaryBeth and Stanley McDonald',
        monthBought: "December",
        yearBought: 1985,
        monthSold: "July",
        yearSold: 1987,
        source: 'Rockingham County Deeds',
        bio: null
    },
    {
        owner: 'William and Eleanor Tracy',
        monthBought: "July",
        yearBought: 1987,
        monthSold: "March",
        yearSold: 2009,
        source: 'Rockingham County Deeds',
        bio: null
    },
    {
        owner: 'Robert and Eileen Mackin',
        monthBought: "March",
        yearBought: 2009,
        monthSold: "March",
        yearSold: 2017,
        source: 'Rockingham County Deeds',
        bio: "",
    },
    {
        owner: 'Walter and Mary Ellen Hoerman',
        monthBought: "March",
        yearBought: 2017,
        monthSold: null,
        yearSold: "Present",
        source: 'Rockingham County Deeds',
        bio: null
    },

];

//javascript file for cards for all restaurants 
listOwners();

//restaurant card structure
function listOwners() {
    for (i = 0; i < (ownerListArray.length); i++) {
        console.log(i);
        console.log(ownerListArray[i].owner)
        document.getElementById("56Owners").innerHTML +=
        '<div class="card border-secondary text-center"> \
        <h6 class="text-center font-italic m-1"> From ' + (ownerListArray[i].yearBought) + ' to ' + (ownerListArray[i].yearSold) + '</h6> \
        <h6 class="text-center font-italic m-1">~~~</h6> \
        <h4 class="text-center m-1">' + (ownerListArray[i].owner) + '</h4> \
        <h6 class="text-center font-italic m-1">~~~</h6> \
        <h6 class="text-center font-italic m-1">' + (ownerListArray[i].bio) + '</h6> \
        <h6 class="text-center font-italic m-1"></h6> \
        </div>'
        ;
    }
}