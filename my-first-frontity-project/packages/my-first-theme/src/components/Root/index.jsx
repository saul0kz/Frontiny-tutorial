import { Global, css, connect, Head } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "../List";
import Post from "../Post";
import Page from "../Page";
import { fixCss } from "../../helpers/css";

import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
import Loading from "../Loading";
import Error from "../Error";

const fixedBootstrapCss = fixCss(bootstrapCss);
const BootstrapStyles = () => <Global styles={css(fixedBootstrapCss)} />;

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  const { previous, next } = data;
  return (
    <>
      <BootstrapStyles />
      <p>
        <Head>
          <title>Saul0kz Page</title>
          <meta
            name="Saul0kz tutorial Frontity"
            content="Seguindo os passos do tutorial para consumir uma instalação wordpress como cms headless"
          />
        </Head>
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
            <Loading when={data.isFetching} />
            <Error when={data.isError} />
          </Switch>
        </main>
      </div>
      <div>
        {previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous);
            }}
            type="button"
            class="btn btn-outline-primary"
          >
            Previous
          </button>
        )}
        {next && (
          <button
            type="button"
            onClick={() => {
              actions.router.set(data.next);
            }}
            class="btn btn-outline-secondary"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default connect(Root);
