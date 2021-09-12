import { Global, css, connect } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "../List";
import Post from "../Post";
import Page from "../Page";
import { fixCss } from "../../helpers/css";

import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";

const fixedBootstrapCss = fixCss(bootstrapCss);
const BootstrapStyles = () => <Global styles={css(fixedBootstrapCss)} />;

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <BootstrapStyles />
      <p> Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/page/2">More posts</Link>
        <br />
        <Link link="/about-us">About Us</Link>
      </nav>
      <div>
        <main>
          <Switch>
            <List when={data.isArchive} />
            <div when={data.isArchive}>This is a list</div>
            <Post when={data.isPost}>This is a post</Post>
            <Page when={data.isPage}>This is a page</Page>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default connect(Root);
