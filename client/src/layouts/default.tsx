import styles from '../styles/layouts/default.module.scss';

type LayoutProps = {
    children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps): JSX.Element => (
    <>
        <main className={styles.main}>{ children }</main>
    </>
)

export default DefaultLayout;