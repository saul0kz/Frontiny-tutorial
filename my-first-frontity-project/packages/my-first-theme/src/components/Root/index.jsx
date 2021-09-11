import { connect } from 'frontity'
import Link from '@frontity/components/link'
import Switch from '@frontity/components/switch'

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
                <Link link="/about-us">About Us</Link>
            </nav>
            <div>
                <main>
                    <Switch>
                        <div when={data.isArchive}>This is a list</div>
                        <div when={data.isPost}>This is a post</div>
                        <div when={data.isPage}>This is a page</div>
                    </Switch>
                </main>
            </div>
        </>
    )
}

export default connect(Root)
