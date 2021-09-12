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

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <BootstrapStyles />
      <p>
        {state.theme.isUrlVisible ? (
          <p>
            Current URL: {state.router.link}
            Show URL
            <button
              type="button"
              onClick={actions.theme.toggleUrl}
              class="btn btn-danger"
            >
              Hide Url
            </button>
          </p>
        ) : (
          <button
            type="button"
            onClick={actions.theme.toggleUrl}
            class="btn btn-primary"
          >
            Show URL
          </button>
        )}
      </p>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/page/2"
                >
                  More posts
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about-us"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav></nav>
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
