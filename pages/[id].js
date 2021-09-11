import NextNProgress from "nextjs-progressbar";

import styles from "../styles/Home.module.css";

function MyApp({ params }) {
  return (
    <>
      <NextNProgress />
      <div className={styles.container}>
        <div>Params: {params.id}</div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { params: context.params }, // will be passed to the page component as props
  };
}

export default MyApp;
