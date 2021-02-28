import { useContext, useEffect } from 'react'
import LandingPageLayout from '../Components/LandingPageLayout'
import { getAllPosts } from '../config/contributorsLib'
import { AuthContext } from '../providers/AuthProvider'
import Link from 'next/link';
import { API_URL, GET_SERVER_TOKEN_HEADER } from '../config/constants';
import { RepoBlock } from '../Components/RepoBlock';
import Card from '../Components/Card';
const tweets = [
    {
      id:0,
      username: 'archanaserver',
      html: `<blockquote class="twitter-tweet" data-conversation="none" data-theme="dark"><p lang="en" dir="ltr">The platform is so cool for all who is going to join <a href="https://twitter.com/hashtag/LeapcodeOpen?src=hash&amp;ref_src=twsrc%5Etfw">#LeapcodeOpen</a>, the best part of this platform is everyone contributor will get scores after each pull requests. 🤩<br><br>Thank you <a href="https://twitter.com/isethu?ref_src=twsrc%5Etfw">@isethu</a> and the <a href="https://twitter.com/leapcodeio?ref_src=twsrc%5Etfw">@leapcodeio</a> team for building this platform. This is going to be huge soon.🔥</p>&mdash; Archana🦉 (@archanaserver) <a href="https://twitter.com/archanaserver/status/1268254820080615424?ref_src=twsrc%5Etfw">June 3, 2020</a></blockquote>`
    },
    {
      id:1,
      username:'hiralthaker12',
      html:`<blockquote class="twitter-tweet" data-conversation="none" data-theme="dark"><p lang="en" dir="ltr">The platform is so easy and insightful to understand, play around and make your first open source contribution.<br><br>Waiting for them to go public with their project.<a href="https://twitter.com/hashtag/opensource?src=hash&amp;ref_src=twsrc%5Etfw">#opensource</a> <a href="https://twitter.com/hashtag/opensourceprojects?src=hash&amp;ref_src=twsrc%5Etfw">#opensourceprojects</a> <a href="https://twitter.com/hashtag/WomenInTech?src=hash&amp;ref_src=twsrc%5Etfw">#WomenInTech</a></p>&mdash; Thaker Hiral #WomenInTech #IWD20 #TogetherWeRise (@hiralthaker12) <a href="https://twitter.com/hiralthaker12/status/1267501834010312704?ref_src=twsrc%5Etfw">June 1, 2020</a></blockquote>`
  
    }, {
      id:3,
      username:'PrateekG_',
      html:`<blockquote class="twitter-tweet" data-conversation="none" data-theme="dark"><p lang="en" dir="ltr"><a href="https://twitter.com/leapcodeio?ref_src=twsrc%5Etfw">@leapcodeio</a> guides you each step, from finding a project to raising your first PR. The whole process of working on an open source project is gamified such that it keeps you engaged. Overall, you can be a open source contributor in just a few clicks😁</p>&mdash; Prateek Gupta (@PrateekG_) <a href="https://twitter.com/PrateekG_/status/1270385738815664128?ref_src=twsrc%5Etfw">June 9, 2020</a></blockquote>`
    }
  ]
  const UserSteps = [{
    id:0,
    heading: 'Create an Account',
    desc: 'Sign in using your GitHub account'
  }, {
    id:1,
    heading: 'Pick a Repository',
    desc: 'Pick a repo matching with your skills from our curated list'
  }, {
    id:2,
    heading: 'Start Contributing',
    desc: 'Streamlined & simple steps to help you contribute to the repo'
  }, {
    id:3,
    heading: 'Earn Rewards 🔥',
    desc: 'Receive points as you progress through the steps. Brownie points & badges when your Pull Request is accepted.'
  }]

  

  
  const LandingPage = ({ contributors, projects, featuredUsers }) => {

    const authStatus = useContext(AuthContext);
    console.log(featuredUsers);


    useEffect(() => {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      s.setAttribute("async", "true");
      document.head.appendChild(s);
    }, []);



    const runSurvey = () => {

    }
    
    return(
      <LandingPageLayout>
        <div>
          <div className="max-w-screen-lg mx-auto mt-12 md:mt-32">
            <div className="flex justify-center">

          
              <div className="w-full md:w-2/3  text-center px-6 md:px-0">
                <img alt='Leapcode Logo' className="md:w-1/3 w-1/2 mx-auto mb-12" src={'/logo.svg'} />
                <h1 className="w-full text-3xl md:text-5xl text-newblue-900 font-gt">{}Kick start your  open <br /> source contribution{}</h1>
                <p className=" font-gt text-base md:text-lg text-newblue-900 leading-relaxed tracking-wide letter">Leapcode helps you contribute to open source projects right from your first pull request to working on major projects</p>
                <div className="flex flex-col mt-8 align-center justify-center">
                  <div className="block mt-2">
                    {!authStatus.currentUser ? 
                    <a href="https://app.leapcode.io/login?ghlogin=true" rel="nofollow" className=" hover:bg-black bg-gray-900 text-white font-gt inline-block font-semibold px-6 py-3 text-sm md:text-sm rounded-lg ">
                      <div className="flex"><img className="w-5 h-5 mb-0 mr-3" src={'/lo.png'} /><span>Sign in with Github</span></div>
                    </a> : 
                    
                    <a href="/dashboard" rel="nofollow" className=" hover:bg-black bg-gray-900 text-white font-gt inline-block font-semibold px-6 py-3 text-sm md:text-sm rounded-lg ">
                      <div className="flex"><span>Go to dashboard</span></div>
                    </a>
                    }

                  </div>
                  <div>
                    <button  onClick={runSurvey} className="bg-white underline px-6 py-3 text-base rounded-lg font-gt font-regular mt-4 text-newblue-900 ml-1">Request access</button>

                  </div>
                </div>
              </div>

              {/* <div className="w-full md:w-1/2">

              </div> */}


            </div>

          </div> 

          <div className="bg-newblue-100 mt-12 md:mt-32 py-12 md:pt-32 md:pb-24 steps--container">
            <div className="max-w-screen-lg mx-auto">
              <div className="flex steps-section justify-center ">
                {/* <div className="md:w-1/2"></div> */}
                <div className="md:w-1/2 px-6 md:px-0">
                  <h3 className=" text-2xl text-center md:text-3xl font-bold text-newblue-900 leading-relaxed font-gt">Make your first Pull Request <br /> in 5 minutes</h3>
                  <div className="steps-area ">
                    {
                        UserSteps.map(step => (
                          <div class="step__item active">
                            <span class="step__item-number font-gt"></span>
                            <div class="step__item-content">
                              <span className="font-gt text-xl md:text-2xl mb-4 block text-newblue-900 font-bold">{step.heading}</span>
                              <p className="font-gt">{step.desc}</p>
                            </div>
                          </div>
                        ))
                    }
                  
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="mt-24 text-center">
            <h2 className="font-gt md:text-5xl text-newblue-900">Don’t take our word for it</h2>
            <p className="font-gt text-newblue-900 tracking-wide">Our users are already talking about it on twitter</p>
            <div className="mt-12 md:mt-24 px-4 md:px-0 max-w-screen-sm md:max-w-screen-lg mx-auto flex flex-row flex-wrap justify-center"> 
              { tweets.map(tweet => <div key={tweet.id} className="w-full md:w-1/2 px-4 mb-8">
                  <div className="" dangerouslySetInnerHTML={{ __html: tweet.html }} />
              </div>) }
            </div>

 
              <div className="max-w-screen-lg mx-auto mt-4">
                <h2 className="">Recent contributors who made their first pull request</h2>
                <div className="grid gap-4 grid-cols-3 text-left mt-10">
                    {
                      contributors.filter(c => c.data.username != 'sethusathyan').map(contrib => (
                        <Link key={contrib.slug} href={`/contributor/${contrib.slug}`}>
                          <a  className="border cursor-pointer border-gray-300 p-3 shadow-sm hover:shadow-lg transition transition-duration-100 rounded">
                            <h6 className="font-gt text-base mb-2">{contrib.data.name}</h6>
                            <p  className="font-gt text-sm mb-0">{contrib.data.bio}</p>
                          </a>
                        </Link>
                      ))
                    }
                </div>


                <div className="mt-8">
                  <div className="flex flex-wrap justify-center">
                    { featuredUsers.map(u => (
                      <Link href={`u/${u.username}`}>
                        <a className="block w-12 h-12 mx-2 rounded mt-2">
                          <img className="w-12 h-12 rounded-full" alt={u.username} src={u.displayPhoto} />
                        </a>
                      </Link>
                    )) }
                  </div>
                </div>
                <Link href="/contributor">
                  <a className="text-blue-600 font-bold font-gt mt-10 block hover:underline" >See all contributors →</a>
                </Link>

              </div>
            

          </div>


          <div className=" mt-12 md:mt-32 text-center bg-newblue-800 py-12 md:py-32 strokes-bg">
            <div className="max-w-screen-md mx-auto px-6 md:px-2">
              <h2 className="text-3xl md:text-4xl font-gt text-white">Contributing to open source is now <br />easy & rewarding</h2>
              <p className="font-gt text-white  leading-relaxed tracking-wide">A lot of first time contributors face issues in finding a project, figuring out what to contribute, understanding the repo etc. With Leapcode, we are empowering first time contributors by motivating & rewarding each step they take towards the contribution.</p>
              <button  onClick={runSurvey} className="bg-white hover:bg-gray-200 px-6 py-3 text-base rounded-lg mt-8 font-gt font-bold text-newblue-900">Request Access</button>
            </div>
          </div>

          <section className="md:mt-32 mt-16" >
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row ">
              <div className="md:w-3/6 px-6 md:px-0">
                <small className="font-gt font-bold block mb-4 text-lg opacity-75">For Open Source Project Owners</small>
                <h2 className="text-4xl font-gt text-newblue-900 leading-snug">Create a seamless experience for your contributors</h2>
                <p className="text-newblue-900 tracking-wide font-gt">For open source project maintainers & owners, Leapcode helps you onboard first time contributors by simplyfying your contribution process & making it interesting.</p>
                <div class="check__item">
                  <h5 className="text-2xl font-gt text-newblue-900">Onboard new contributors easily</h5>
                  <p className="text-base font-gt  text-newblue-900 tracking-wide">Onboard & navigate new contributors to your open source projects quickly</p>
                </div>

                <div class="check__item">
                  <h5 className="text-2xl font-gt text-newblue-900">Access to a thriving community</h5>
                  <p className="text-base font-gt  text-newblue-900 tracking-wide">Get an ethusiastic and motivated community to contribute to your projects</p>
                </div>


                <div class="check__item">
                  <h5 className="text-2xl font-gt text-newblue-900">Grow your projects</h5>
                  <p className="text-base font-gt  text-newblue-900 tracking-wide">Get issues fixed & features added from a community of contributors that helps each other</p>
                </div>


                <a href="https://airtable.com/shrGWFt2xQsfAHMu4" target="_blank" className=" mt-12 block text-center md:inline-block bg-gray-300 hover:bg-gray-400 text-newblue-900 font-semibold font-gt px-6 py-3 rounded">Add your Repository</a>

              </div>

              <div className="flex-1 ml-12 mt-10 md:mt-0">
                <div className="grid grid-cols-1 gap-4 ">
                  { projects.map(pro => (
                    <div className="random-layout">
                      <RepoBlock {...pro} />
                    </div>
                  ) ) }
                  <div className="">
                    <Link href="/projects">
                      <a className="text-blue-600 font-bold font-gt mt-4 block hover:underline text-center" >See all projects →</a>
                    </Link>
                  </div>
                </div>
              </div>
              
              
            </div>
          </section>











        </div>
      </LandingPageLayout>
  )}


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export const getStaticProps = async (ctx) => {

    let allContributorPosts = await getAllPosts();
    allContributorPosts = await shuffleArray(allContributorPosts);
    allContributorPosts = allContributorPosts.splice(0,3);
    let projects = await fetch(API_URL+`/project/random?v3=true&limit=3`, {
        headers: await GET_SERVER_TOKEN_HEADER(ctx)
    });

    let featuredUsers = await fetch(API_URL+'/auth/randomUsers?limit=40', {
      headers: await GET_SERVER_TOKEN_HEADER(ctx)
    });
    featuredUsers = await featuredUsers.json();
    featuredUsers = await shuffleArray(featuredUsers)
    featuredUsers.length > 0 ? featuredUsers = featuredUsers.splice(0,20) : null;
    projects = await projects.json()
    //projects = projects.splice(0,3);

    return {
        props:{
            contributors:allContributorPosts,
            projects: projects,
            featuredUsers
        }
    }
}

export default LandingPage;