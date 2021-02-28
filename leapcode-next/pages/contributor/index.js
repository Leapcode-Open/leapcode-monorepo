import LandingPageLayout from "../../Components/LandingPageLayout";
import { getAllPosts } from "../../config/contributorsLib";
import Link from 'next/link';
const index = ({ contributors }) => {
    return (
        <LandingPageLayout>
            <div className="max-w-screen-lg mx-auto px-4 py-4">
                    <a href="/">
                        <img className="md:w-1/6 w-1/2 mb-24" src={'/logo.svg'} />
                    </a>
                </div>


                <div className="max-w-screen-lg mx-auto px-4 py-4">
                    <h1 className="text-2xl font-gt">Contributor on Leapcode</h1>
                    <div className="mt-12 grid grid-cols-3 gap-4">
                         { contributors.map(contrib => (
                             <Link key={contrib.data.username} href={`/contributor/${contrib.slug}`}>
                                <a className="p-3 border border-gray-300 rounded-lg mb-4 block bg-white shadow-sm hover:shadow-lg duration-100">
                                    <h3 className="font-gt text-base mb-1">{contrib.data.name}</h3>
                                    <small className="font-gt text-gray-600 text-xs mb-1 block">{contrib.data.username}</small>
                                    <p className="font-gt text-sm mb-0">{contrib.data.bio}</p>
                                </a>
                             </Link>
                             
                         ))}
                    </div>  
                </div>
        </LandingPageLayout>
    );
}


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
    return {
        props:{
            contributors:allContributorPosts
        }
    }
}

export default index;