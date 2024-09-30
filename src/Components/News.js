import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {

articles = [{
    "source": {
        "id": "reuters",
        "name": "Reuters"
    },
    "author": "Francois Murphy, Dave Graham",
    "title": "Austria votes in tight election with far right bidding for historic win - Reuters",
    "description": "Austrians voted on Sunday for a new parliament with the far-right Freedom Party (FPO) aiming to secure its first general election win, which could lead to a dispute within the European Union over the war in Ukraine.",
    "url": "https://www.reuters.com/world/europe/austria-holds-tight-election-with-far-right-bidding-historic-win-2024-09-28/",
    "urlToImage": "https://www.reuters.com/resizer/v2/IFL7XMQM4BPPHGWDI3MWI6GJJ4.jpg?auth=21a75d033a1c6d41a9996edd7bcf35769ef56346e18c983f42caa6b22f50984f&height=1005&width=1920&quality=80&smart=true",
    "publishedAt": "2024-09-29T08:13:07Z",
    "content": null
},
{
    "source": {
        "id": "cnn",
        "name": "CNN"
    },
    "author": "Simone McCarthy, Irene Nasser, Alex  Stambaugh",
    "title": "Live updates: Hezbollah leader’s killing escalates conflict with Israel - CNN",
    "description": "Hezbollah has confirmed the death of its leader Hassan Nasrallah, as fears grow of the conflict at the Israel-Lebanon border growing into a wider war. Follow for live news updates.",
    "url": "https://www.cnn.com/world/live-news/israel-lebanon-war-hezbollah-09-29-24/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2174109977-20240928172942835.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-09-29T07:50:00Z",
    "content": "Hassan Nasrallahs death marks a major moment in recent Middle East history, but the long-term consequences are uncertain. It raises a key question: Do decapitation strikes killing the leaders of terr… [+1919 chars]"
},
{
    "source": {
        "id": null,
        "name": "CBS Sports"
    },
    "author": "",
    "title": "Tomorrow's Top 25 Today: Alabama moves to No. 1 spot after thrilling win over Georgia in instant classic - CBS Sports",
    "description": "Projecting the new AP Top 25 college football rankings after Week 5 of the 2024 season",
    "url": "https://www.cbssports.com/college-football/news/tomorrows-top-25-today-alabama-moves-to-no-1-spot-after-thrilling-win-over-georgia-in-instant-classic/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/09/29/3af1a3f9-7c3f-4be9-886f-1ea383f3862d/thumbnail/1200x675/d4ad010bddf22fc69e095fbff33d66c0/bama-top-25.png",
    "publishedAt": "2024-09-29T06:16:00Z",
    "content": "The new AP Top 25 poll will have yet another debate for who is No. 1 as voters turn in their ballots after a thunderous Week 5 slate.. And while we are projecting multiple -- three or more -- teams t… [+8522 chars]"
},
{
    "source": {
        "id": "cbs-news",
        "name": "CBS News"
    },
    "author": "Peter Van Sant, Chuck Stevenson, Lauren Clark",
    "title": "An Idaho woman is found dead in her bathtub. Did her husband use his law enforcement skills to stage the scene? - CBS News",
    "description": "Kendy Howard, a 48-year-old wife and mother, was found dead in her bathtub with a gunshot wound to the head. Evidence at the scene led investigators to take a hard look at her husband, a former Idaho state trooper. Did he have the know-how to get away with mu…",
    "url": "https://www.cbsnews.com/news/kendy-howard-idaho-murder-dan-howard-law-enforcement-skills-was-bathtub-scene-staged-48-hours/",
    "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/09/25/0dd599e6-aa29-4c55-83e0-8c67d1354ae4/thumbnail/1200x630/62ec4585866860998fc1853ab82544fb/howard-sneakpeek.jpg?v=fa529222a2be3543711c1a879b51e860",
    "publishedAt": "2024-09-29T06:09:26Z",
    "content": "Kootenai County Sheriff's Deputy Miranda Thomas will never forget coming face to face with a distraught Dan Howard, a former state trooper, at his home in Northern Idaho on a cold winter's morning in… [+34165 chars]"
},
{
    "source": {
        "id": null,
        "name": "Rolling Stone"
    },
    "author": "William Vaillancourt",
    "title": "‘SNL’ Cold Open: Kamala Dances While Trump Longs For Old Biden - Rolling Stone",
    "description": "Featuring Maya Rudolph as Harris, comedian Jim Gaffigan as Tim Walz, Andy Samberg as Doug Emhoff, and Dana Carvey as Joe Biden",
    "url": "http://www.rollingstone.com/tv-movies/tv-movie-news/snl-cold-open-kamala-dances-while-trump-longs-old-joe-biden-1235115618/",
    "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/09/Screen-Shot-2024-09-29-at-12.24.07-AM.png?w=1358&h=705&crop=1",
    "publishedAt": "2024-09-29T04:40:56Z",
    "content": "Saturday Night Live‘s 50th season premiered with show alum Maya Rudolph reprising her role as “fun aunt” Kamala Harris, this time holding a jovial campaign rally while Donald Trump and JD Vance try n… [+2462 chars]"
},
{
    "source": {
        "id": null,
        "name": "Deadline"
    },
    "author": "Lynette Rice",
    "title": "Soap World Reacts To Death Of Drake Hogestyn: “He Loved Days, The Fans & Shared That Passion With Everyone On Set” - Deadline",
    "description": "Days of Our Lives star Drake Hogestyn was remembered Saturday by fellow daytime drama actors as an \"incredible man\" who \"cared about every scene.\"",
    "url": "http://deadline.com/2024/09/drake-hogestyn-death-reaction-days-of-our-lives-actor-1236102802/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2024/09/TSDDAOF_NB123.jpg?w=1024",
    "publishedAt": "2024-09-29T04:20:00Z",
    "content": "Days of Our Lives star Drake Hogestyn was remembered Saturday by fellow daytime drama actors as an “incredible man” who “cared about every single scene.” \r\nHogestyn, who died at age 70 from pancreati… [+3162 chars]"
},
{
    "source": {
        "id": null,
        "name": "Financial Times"
    },
    "author": null,
    "title": "Freight rates rise as companies plan for costly US port strike - Financial Times",
    "description": null,
    "url": "https://www.ft.com/content/7fdd7d4a-794c-46f2-95c5-aa317a5163a4",
    "urlToImage": null,
    "publishedAt": "2024-09-29T04:00:50Z",
    "content": "FT newspaper delivered Monday-Saturday, plus FT Digital Edition delivered to your device Monday-Saturday.\r\n<ul><li></li>Weekday Print Edition<li></li>FT Weekend<li></li>FT Digital Edition<li>Global n… [+105 chars]"
},
{
    "source": {
        "id": "the-globe-and-mail",
        "name": "The Globe And Mail"
    },
    "author": "Sally Brompton",
    "title": "Your lookahead horoscope: September 29, 2024 - The Globe and Mail",
    "description": "Your lookahead horoscope for the week of Sept. 29, 2024",
    "url": "https://www.theglobeandmail.com/life/horoscopes/article-your-lookahead-horoscope-september-29-2024/",
    "urlToImage": "https://www.theglobeandmail.com/resizer/v2/LMZRFELKY5CP7NSCTCPEMNCFII.png?auth=47107fdfbf7ea0ccde091a624e8a92236787276e7c23c335aea3275bb34aa7eb&width=1200&height=801&quality=80&smart=true",
    "publishedAt": "2024-09-29T04:00:00Z",
    "content": "Open this photo in gallery:Libra.iStockPhoto / Getty Images\r\nHOROSCOPES IF TODAY IS YOUR BIRTHDAY\r\nAre you brave enough to begin a new adventure? Of course you are. The message of your birthday chart… [+3505 chars]"
},
{
    "source": {
        "id": "axios",
        "name": "Axios"
    },
    "author": "Axios",
    "title": "Trump pounds immigration message after Harris' border visit - Axios",
    "description": null,
    "url": "https://www.axios.com/2024/09/28/trump-immigration-rally-wisconsin-harris-border-visit",
    "urlToImage": null,
    "publishedAt": "2024-09-29T03:21:34Z",
    "content": null
},
{
    "source": {
        "id": "fox-news",
        "name": "Fox News"
    },
    "author": "Sarah Rumpf-Whitten",
    "title": "DOJ sues Alabama, state's top election official for allegedly purging noncitizen voters too close to election - Fox News",
    "description": "The justice department has filed a lawsuit against Alabama and Secretary of State Wes Allen after he removed over 3,000 voters who had been granted noncitizen identification numbers.",
    "url": "https://www.foxnews.com/politics/doj-sues-alabama-states-top-election-official-allegedly-purging-noncitizen-voters-too-close-election",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/GettyImages-2079016899-1.jpg",
    "publishedAt": "2024-09-29T03:20:00Z",
    "content": "The Department of Justice sued the State of Alabama and its top election official, alleging that they had removed voters who had previously been issued noncitizen identification numbers from its elec… [+3021 chars]"
},
{
    "source": {
        "id": "cbs-news",
        "name": "CBS News"
    },
    "author": null,
    "title": "North Carolina's Asheville devastated after Helene's damage cuts power, floods roads - CBS News",
    "description": "In North Carolina, more than 400 roads remained closed on Saturday as floodwaters began to recede and reveal the extent of damage.",
    "url": "https://www.cbsnews.com/news/north-carolina-asheville-devastated-after-helene/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/09/28/f28ea6a4-b943-42c1-9479-b75f37bebdaf/thumbnail/1200x630/08e66dc4c236c660efc7997d373a612d/ap24271626793622.jpg?v=fa529222a2be3543711c1a879b51e860",
    "publishedAt": "2024-09-29T02:58:20Z",
    "content": "Floodwaters pushed by the remnants of Hurricane Helene left North Carolina's largest mountain city largely cut off Saturday by damaged roads and a lack of power and cellphone service, part of a swath… [+4023 chars]"
},
{
    "source": {
        "id": null,
        "name": "WCVB Boston"
    },
    "author": "Phil Tenser",
    "title": "Steward Health Care CEO Dr. Ralph de la Torre leaves bankrupt company - WCVB Boston",
    "description": "He's leaving the bankrupt company after all of its hospitals in Massachusetts were either closed, sold or seized.",
    "url": "https://www.wcvb.com/article/steward-ralph-de-la-torre-separation-sept-28/62423004",
    "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/de-la-torre-gettyimages-2161647244-66da3daa8d910.jpg?crop=1.00xw:0.760xh;0,0&resize=1200:*",
    "publishedAt": "2024-09-29T02:45:00Z",
    "content": "NEEDHAM, Mass. —Dr. Ralph de la Torre, CEO of Dallas-based Steward Health Care, who was held in contempt of Congress for refusing to testify about the company's bankruptcy, is leaving the troubled co… [+3330 chars]"
},
{
    "source": {
        "id": null,
        "name": "Hindustan Times"
    },
    "author": "Bhavika Rathore",
    "title": "Diddy's attorney announces the mogul will not accept plea deal as 'He's...' - Hindustan Times",
    "description": "Sean ‘Diddy’ Combs will not accept a plea deal in his legal battle over sex trafficking and racketeering charges.",
    "url": "https://www.hindustantimes.com/entertainment/others/diddys-attorney-announces-the-mogul-will-not-accept-plea-deal-as-hes-101727574599849.html",
    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/09/29/1600x900/FILES-US-CRIME-ENTERTAINMENT-DIDDY-ASSAULT-0_1720885267271_1727574848657.jpg",
    "publishedAt": "2024-09-29T02:27:21Z",
    "content": "Sean Diddy Combs lawyer, Marc Agnifilo confirmed that the rapper will not agree to a plea deal during his ongoing legal battle. Diddy was arrested and charged with sex trafficking and racketeering. H… [+2054 chars]"
},
{
    "source": {
        "id": null,
        "name": "New York Post"
    },
    "author": "Mark Suleymanov",
    "title": "Julius Randle’s new look revealed as mom acknowledges Knicks trade on Instagram: ‘Let’s go Wolves!’ - New York Post ",
    "description": "Another member of Julius Randle’s family seems to be happy with his career move.",
    "url": "https://nypost.com/2024/09/28/sports/julius-randles-new-look-revealed-as-mom-acknowledges-knicks-trade-on-instagram-lets-go-wolves/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/09/newspress-collage-ddw1zuk7t-1727574774181.jpg?quality=75&strip=all&1727560452&w=1024",
    "publishedAt": "2024-09-29T02:17:00Z",
    "content": "Another member of Julius Randles family seems to be happy with his career move.\r\nThe three-time NBA All-Star donned a Tiger Woods T-shirt and showed off a new look in a picture posted to Instagram on… [+2110 chars]"
},
{
    "source": {
        "id": "cnn",
        "name": "CNN"
    },
    "author": "Edward-Isaac Dovere",
    "title": "Heading into the vice presidential debate, Tim Walz is fighting nerves - CNN",
    "description": "Tim Walz is telling people he’s just as nervous about facing JD Vance on the debate stage as he was when he first warned Kamala Harris he was a bad debater.",
    "url": "https://www.cnn.com/2024/09/28/politics/tim-walz-vice-president-debate/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-09-14t220600z-229929578-rc2l0aag0er9-rtrmadp-3-usa-election-walz.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-09-29T01:44:00Z",
    "content": "Tim Walz is telling people hes just as nervous about facing JD Vance as he was the Sunday afternoon in August when he warned Kamala Harris in his running mate interview that he was a bad debater.\r\nMa… [+11283 chars]"
},
{
    "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
    },
    "author": "Maitree Baral",
    "title": "Minimal physical activity due to work and commuting causing heart attacks, says Dr. Ramakanta Panda - The Times of India",
    "description": "Dr. Ramakanta Panda underscores the importance of a disciplined lifestyle on World Heart Day to tackle rising heart disease in India. He advises on ma",
    "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/minimal-physical-activity-due-to-work-and-commuting-causing-heart-attacks/articleshow/113770989.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-113770979,width-1070,height-580,imgsize-691400,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2024-09-29T01:30:00Z",
    "content": null
},
{
    "source": {
        "id": null,
        "name": "WTVD-TV"
    },
    "author": null,
    "title": "Multiple people killed in plane crash near Wright Brothers Memorial's First Flight Airport - ABC11 Raleigh-Durham",
    "description": "Officials said the single-engine plane crashed into a wooded area at the airport.",
    "url": "https://abc11.com/post/kill-devil-hills-crash-multiple-people-killed-plane-wright-brothers-memorials-flight-airport/15369371/",
    "urlToImage": "https://cdn.abcotvs.com/dip/images/15174305_052624-ktrk-generic-police-blur-lights-sw-img.jpg?w=1600",
    "publishedAt": "2024-09-29T01:14:51Z",
    "content": "KILL DEVIL HILLS, N.C. (WTVD) -- Multiple people are dead after a single-engine plane crashed into a wooded area near an airport in eastern North Carolina on Saturday.\r\nAccording to the Wright Brothe… [+492 chars]"
},
{
    "source": {
        "id": null,
        "name": "The Action Network"
    },
    "author": "Sean Koerner",
    "title": "NFL Player Props Week 4: Sam Darnold, Michael Pittman Jr., Garrett Wilson, More - The Action Network",
    "description": "Find Week 4 NFL player props for Sam Darnold, Michael Pittman Jr., Greg Dortch, Garrett Wilson and more on September 29.",
    "url": "https://www.actionnetwork.com/nfl/nfl-player-props-week-4",
    "urlToImage": "https://images.actionnetwork.com/blog/2024/09/sam-darnold-24.jpg",
    "publishedAt": "2024-09-29T00:07:00Z",
    "content": "NFL Week 4 has arrived, and I have NFL player props to target for the fourth NFL Sunday of the season.\r\nLet's dive right into my NFL player props for Week 4, which include picks for Sam Darnold, Mich… [+4983 chars]"
},
{
    "source": {
        "id": null,
        "name": "BBC News"
    },
    "author": null,
    "title": "Watch: BBC Verify analyses footage of Israeli strikes on Beirut - BBC.com",
    "description": "How the BBC worked out the facts about blasts in Lebanon's capital from clues in social media footage.",
    "url": "https://www.bbc.com/news/videos/cm28l6pnmxko",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2dd1/live/897eb0f0-7dec-11ef-bf4b-ef19cfbf3842.jpg",
    "publishedAt": "2024-09-28T23:19:24Z",
    "content": "Israeli strikes on Friday, which are now known to have killed Hezbollah leader Hassan Nasrallah, concluded a week of Israeli strikes on southern areas of the Lebanese capital, Beirut. \r\nBBC Verify's … [+448 chars]"
},
{
    "source": {
        "id": null,
        "name": "WEAR"
    },
    "author": "Marion Caldwell",
    "title": "Tracking new area of potential tropical development in Gulf of Mexico - WEAR",
    "description": "As we progress into the heat of our 2024 tropical season, the WEAR First Warning Weather Team is tracking yet another area of interest in the Western Caribbean",
    "url": "https://weartv.com/news/local/tracking-new-area-of-potential-tropical-development-in-gulf-of-mexico",
    "urlToImage": "https://weartv.com/resources/media2/16x9/1280/986/center/90/4aaf4535-976f-4b11-ac67-4b94bc089508-TropicalSatelliteGOES16.png",
    "publishedAt": "2024-09-28T23:17:55Z",
    "content": "As we progress into the heat of our 2024 tropical season, the WEAR First Warning Weather Team is tracking yet another area of interest in the Western Caribbean Sea and Gulf of Mexico.\r\nThe National H… [+1793 chars]"
}] 

    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        const defaultImageUrl = "https://via.placeholder.com/150"; // Default image URL
    
        return (
          <>
            <div className="container mt-5">
              <div className="row">
                {this.state.articles.map((article, index) => (
                        
                  <div className="col-md-4 mb-4" key={index}> {/* Adjusted column width */}
                    <NewsItem 
                      title={article.title.slice(0,40)+"...."} 
                      description={article.description? article.description.slice(0,80): "No description available."} 
                      imageUrl={article.urlToImage || defaultImageUrl} // Use default image if not available
                      url = {article.url}
                    />
                  </div>
                ))}
              </div>
            </div>        
          </>
        );
    }
}
