import cookies from 'next-cookies';
function test() {
    return (
        <div>
            Enter
        </div>
    );
}

export async function getServerSideProps(ctx){
  
    const { lptoken } = cookies(ctx);
    console.log(lptoken);
    return {
        props:{
            data:null
        }
    }
}

export default test;