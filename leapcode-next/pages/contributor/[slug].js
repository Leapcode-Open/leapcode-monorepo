import LandingPageLayout from '../../Components/LandingPageLayout';
import { getPostBySlug, getAllPosts } from '../../config/contributorsLib';
import Link from 'next/link';


const Slug = (props) => {
    const { name, username, bio } = props.data;
     return(
        <LandingPageLayout>
             <div className="w-screen h-screen bg-blue-100 flex flex-col items-center justify-center">
                    <Link href="/">
                        <a>
                            <img style={{ width:'140px' }} className="mx-auto" src={'/logo.svg'} />
                        </a>
                    </Link>
                    <div className="md:w-1/4 mt-10 md:mx-0 mx-auto  text-left p-10 bg-white">
                        <div className="blog-post font-gt">
                            <div className="mb-4">
                                <small class="font-medium text-gray-600">I'm</small>
                                <h3 className="font-medium text-xl">{name}</h3>
                            </div>
                           
                            <div className="mb-4">
                                <small class="font-medium text-gray-600 mb-2">My Github Profile is</small>
                                <h3 className="font-medium text-xl">{username}</h3>
                            </div>

                            <div className="mb-4">
                                <small class="font-medium text-gray-600">and</small>
                                <h3 className="font-medium text-xl">{bio}</h3>
                            </div>
                        </div>
                    </div>
                    <Link href="/contributor">
                        <a className="text-left font-bold font-gt mt-4 block text-sm hover:underline">Back to contributors</a>
                    </Link>
                </div>
        </LandingPageLayout>
    )
}



export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  return {
    props: {
      ...post
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}


export default Slug;