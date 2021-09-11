import { connect } from 'frontity'
import Link from '@frontity/components/link'
import Switch from '@frontity/components/switch'
import List from '../List';
import Post from "../Post";

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
      <>
        <p> Current URL: {state.router.link}</p>
        <nav>
          <Link link="/">Home</Link>
          <br />
          <Link link="/page/2">More posts</Link>
          <br />
          <Link link="/home">Home</Link>
        </nav>
        <div>
          <main>
            <Switch>
              <List when={data.isArchive} />
              <div when={data.isArchive}>This is a list</div>
              <Post when={data.isPost}>This is a post</Post>
              <Post when={data.isPage}>This is a page</Post>
            </Switch>
          </main>
        </div>
      </>
    );
}

export default connect(Root)
