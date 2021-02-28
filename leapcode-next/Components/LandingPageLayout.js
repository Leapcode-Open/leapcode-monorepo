const LandingPageLayout = ({ children }) => {

    return (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <main style={{ backgroundImage: `url('/home.bnad.png')`, backgroundSize:'100% auto', backgroundPosition:'50% 0', backgroundRepeat:'repeat-y' }}>{children}</main>
          <footer>
          <div className="py-12 mt-12 md:mt-32 bg-black">
            <div className="max-w-screen-lg mx-auto px-2">
              <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
                <div className="le">
                    <ul className="text-sm">
                      <li> <a href="/code-of-conduct" className='hover:underline cursor-pointer text-gray-200 font-gt'>Code of Conduct</a></li>
                      <li> <a href="https://women.leapcode.io" className='hover:underline cursor-pointer text-gray-200 font-gt'>Women in Tech Commmunity</a></li>
                      {/* <li> <a href="/faq" className='hover:underline cursor-pointer text-gray-200 font-gt'>Frequently Asked Questions</a></li> */}
                    </ul>
                </div>
  
                <div className="mm text-sm">
                  <ul>
                    <li className='hover:underline text-gray-200 font-gt'><a href="https://twitter.com/leapcodeio" target="_blank">Follow us on Twitter</a></li>
                    <li className='hover:underline text-gray-200 font-gt'><a href="https://facebook.com/leapcodeio" target="_blank">Follow us on Facebook</a></li>
                    <li className='hover:underline text-gray-200 font-gt'><a href="https://www.linkedin.com/company/leapcode" target="_blank">Follow us on Linkedin</a></li>
                  </ul>
                </div>
                <div className='rt'>
                  <div className="flex justify-between items-center">
                    <div className="w-24 ml-4">
                      <img alt="GNOME Challenge Winners" src="/CEChallenge-P1Winner2.png" />
                    </div>
  
                    <div className="flex flex-col md:items-end px-6 md:px-0">
                      <span className="text-white opacity-75 font-gt block mb-2 text-sm">Supported By</span>
                      <a href="https://builders.mozilla.community/" target="_blank"><img className='w-32' alt="Mozilla Builders" src="https://builders.mozilla.community/assets/img/mozilla-builders-logo.png"></img></a>
                    </div>
  
                    
                  </div>
                  
                  <div className="rt text-sm md:text-right flex items-center md:justify-end md:items-center px-6 md:px-0">
                    <img  alt="Leapcode" className="w-10 mb-0" src={'/logo.svg'}></img>
                    <span className="text-gray-400 opacity-75 font-gt ml-4">Ⓒ 2020 Leapcode</span>
                  </div>
                </div>
               
               
              </div>
            </div>
          </div>
          </footer>
     
      </>
    )
  }


export default LandingPageLayout