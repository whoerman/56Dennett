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
        bio: 'The year was 1926. UNHs senior class posed in front of Hamilton Smiths white pillars as a photographer took their picture for the yearbook. Near the center, surrounded by classmates with bobbed hair, sat Elizabeth Ann Virgil 26, who a few months later would be the first African-American to earn a bachelors degree from UNH. Thus did the university become desegregated: quietly, uneventfully, without fanfare or noticeable dissent. In 1951, she joined UNH, where she typed reports from data collected by soil conservation scientists. She found the work interesting--especially later on when women were allowed out into the field--and she stayed for 22 years.'
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
        indepth: "56 Dennett Street: 1977-1985 My introduction to the house was through boozy dinner parties hosted by Stocky and Betty Warnock who had moved up to Portsmouth from Easton, Maryland in1975. We loved the big fireplace in the living room. I told Stocky if he ever sold, we’d buy the place sight unseen. Perpetually unemployed, Stocky decided to move back to his childhood home near Philadelphia. I made good on my promise, writing up a contract for something like $36,000 in the Spring Hill Tavern of the Dolphin Striker. Shortly thereafter, we moved in, leaving a lovely apartment on Ceres Street directly across from the tugboats. Waking up after our first night in the house, we looked out the window to discover we were living in a run-down neighborhood. In fact, a slum. “Shorty,” a locksmith with an alleged criminal record lived in a run-down house where the McEachern’s now live. His wife smoked cigars. On the other side was a beat-up duplex with some tough characters living there and as it turned out a pretty-much absentee slum-landlord. I planted some flowers in the front flower beds. By the next morning, someone had pulled them all up. It was the harassment of these kids, it turned out, that motivated Stocky to leave sooner than later. And would aggravate me as well. I was a guidance counselor in Derry and my wife Joan worked as a Planned Giving Officer for Tufts. Between relentless commutes, we discovered the house was a mess. First, there was really no kitchen—just a closet between the living and dining rooms—the only two rooms on the first floor, plus a seasonal sunroom. I hired an Army Reserve buddy of mine, John Lamson, to help me build a kitchen addition. We dug footings and poured cement using Shorty’s cement mixer. Soon we had a lovely, sunny kitchen looking out on the pond. John is now president of the Gundalow Association after a fine career in the state department. We hired the late Steve Pearson to build a beautiful full-length deck connecting to the kitchen and a hutch in the dining room. Steve would go on to become one of the area’s premier carpenters. A local mason-friend rebuilt both chimneys and a science teacher from Hood Junior High in Derry reroofed the house. By the way, the second floor consisted of two bedrooms and a bath in between, which we also modestly improved. There was a walk- up attic. I painted and caulked the entire upstairs. With no prior experience, I personally repaired clapboards, caulked, and painted the exterior, too. I cultivated a fabulous vegetable garden by the shores of the pond where decaying saw dust from the old mills had enriched the soils. We enjoyed a rich and full life on Dennett Street. I started The New England Football Newsletter, a small-college newsletter. On weekends, Joan developed pics for the publication in a makeshift dark room in the small living room closet. But it was all to become a nightmare. In the summer of 1984, Joan was on the cape visiting family and I was away in Kentucky serving a two-week Army Reserve summer camp. We had hired a young woman to baby sit the cat. I got a call from Joan that someone had broken into the house and stolen our TV set. It was obvious, as events unfolded, that our “neighbor” living on the side closest to us in the duplex, 17-year-old Scott Boronsky, had smashed in the new bulkhead door, come up the basement stairs and rifled the TV. Ironically, his uncle Henry had just been named the Chamber of Commerce Citizen of the Year. The police were slow to act on multiple tips involving Boronsky. He robbed folks throughout the city on an almost daily basis. He and his goon friend would drop cigarette butts over the fence and onto to my car. They shouted catcalls if we went out on our deck or used the yard. One afternoon, I snapped a picture of him trying to elude capture from police. They had chased him up on the roof of the duplex where he was clinging to the chimney, bare-chested, in defiance. When he slipped and fell, neighbors cheered, but Scott, who was taken into custody, recovered and was back on the street in a matter of hours. When Boronsky saw my pic on the front page of the Herald (it made the Union Leader as well), he waited until I was out of the house and then stoned the whole side closest to the duplex. I came home to find glass everywhere and a dream of living life on the North Mill Pond shattered forever. It was all too much. We asked Jane James to list and sell our house. When people saw some of the shattered windows, she said the Rice’s were getting a divorce and had had a fight where stuff had been thrown. The MacDonald’s bought the house for $125,000. It turns out Scott’s birthday is very close to mine, and we still socialize with them from time to time…Months later, Scott Boronsky went to prison from which he escaped at least once. He was released about 10 years ago, I believe, and has since passed away. As a real estate agent, I later sold the house to some folks from New York. I advised them to build the garage/studio so the duplex would be forever blocked out. They did. The Warnock’s divorced. We stay in touch with Betty. Stocky fell down his basement stairs, hit his head and died about 15 years ago. He never held a real job and is buried near his parish church in Philadelphia. We moved to the Woodlands in December 1985 and have happily lived there ever since. Bob Lightizer, a cop who tried to protect us from Boronsky (without success), moved into the neighborhood shortly thereafter. I still miss that wonderful deck, the view, and the vegetable garden. "
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
        bio: "Dec 10, 2014 Fosters: The owners of two city homes are appealing cease-and-desist notices they received saying they are barred from renting their properties on a short-term basis through online sites including airbnb.com. Robert and Eileen Mackin say they started renting their circa 1730 house at 56 Dennett St. last summer, that they were issued a license by the state to collect the nine percent rooms and meals taxes for that purpose and that their property insurer has covered them for rentals of up to 60 days a year.  “In other words, we have made every effort to be honest and fair in renting our property,” the couple wrote in their appeal.",
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