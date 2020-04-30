import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet, ut eos vero ubique posidonium, scriptorem
          efficiantur interpretaris an est, no duo error discere quaestio.
          Tritani habemus propriae sed ut, an vel saperet pertinacia. Inermis
          delectus hendrerit has ad, cum tale nusquam an, omnes virtute ne his.
          Vis esse omnes mediocrem at, nobis corpora conclusionemque sed in. Et
          mel quis accusamus consetetur, consetetur efficiantur ius an. Sea ut
          alia nullam possim. Maiorum ocurreret persecuti te qui, quo ut nibh
          omnis.
        </p>
      </section>
    </Layout>
  );
}
