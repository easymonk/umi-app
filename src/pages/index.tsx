import styles from './index.less';
import { Link, history, IGetInitialProps, Helmet } from 'umi'
import Modal from 'lib/components/modal'
import 'lib/common/config/flexible.js'
function goToListPage() {
  history.push('/login');
}
const IndexPage = (props) => {
  const { data } = props;
  return (
    <div>
      <h1 className={ styles.title }>
        zzz
      </h1>
      <Link to="/user">Go to user page</Link>
      <h1 className={ styles.title } onClick={goToListPage}>Go to login page</h1>
      <img className={ styles.headIcon } src={ require('@/assets/foo.png') } />
      <div className={ styles.logo }></div>
      <Helmet encodeSpecialCharacters={false}>
        <html lang="en" data-direction="666" />
        <title>Hello Umi Bar Title</title>
      </Helmet>
      <Modal></Modal>
    </div>
  );
}
IndexPage.getInitialProps = (async (ctx) => {
  return Promise.resolve({
    data: {
      title: 'Hello zgz',
    }
  })
}) as IGetInitialProps;
export default IndexPage
