import Head from '../components/head';
import Header from '../components/header';
import DefaultLayout from '../layouts/default';
import Footer from '../components/footer';

const Index = () => (
  <>
    <Head title="Home" />
    <Header />
    <DefaultLayout>
      <p>サンプルテキスト</p>
    </DefaultLayout>
    <Footer />
  </>
)

export default Index;